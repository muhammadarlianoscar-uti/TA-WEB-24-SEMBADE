// auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/prisma"; // PERBAIKAN: Impor default tanpa { }
import bcrypt from "bcrypt";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        identifier: { label: "NIK atau Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) return null;

        const idStr = String(credentials.identifier);

        // 🔍 Pencarian Multi-Identifier di PostgreSQL (Case-Insensitive untuk Username)
        const user = await prisma.user.findFirst({
          where: {
            OR: [
              { nik: idStr },
              { username: { equals: idStr.toLowerCase(), mode: "insensitive" } }
            ]
          }
        });

        if (!user) return null;

        // 🔐 Cocokkan password terenkripsi (Bcrypt)
        const isPasswordValid = await bcrypt.compare(
          String(credentials.password), 
          user.password
        );
        
        if (!isPasswordValid) return null;

        // Data yang dikembalikan di sini akan ditransfer ke JWT & Session
        return {
          id: user.id,
          name: user.nama,
          email: user.email,
          role: user.role,
          nik: user.nik,
          username: user.username,
          noTelepon: user.noTelepon,
          alamat: user.alamat
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as any; // PERBAIKAN: Mencegah TypeScript error hantu
        token.role = u.role;
        token.nik = u.nik;
        token.username = u.username;
        token.noTelepon = u.noTelepon;
        token.alamat = u.alamat;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        (session.user as any).role = token.role as string; // PERBAIKAN: Type assertion rapi
        (session.user as any).nik = token.nik as string;
        (session.user as any).username = token.username as string;
        (session.user as any).noTelepon = token.noTelepon as string;
        (session.user as any).alamat = token.alamat as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login", 
  },
  secret: process.env.NEXTAUTH_SECRET,