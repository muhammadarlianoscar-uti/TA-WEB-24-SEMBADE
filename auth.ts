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
 