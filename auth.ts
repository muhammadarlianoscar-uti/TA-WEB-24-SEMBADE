import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Logika verifikasi user ke database kamu di sini
        // Contoh return dummy atau sesuaikan dengan API backend-mu:
        if (credentials?.username === "admin" && credentials?.password === "admin") {
          return { id: "1", name: "Warga Sembade", email: "warga@desa.id", nik: "1234567890" };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.nik = (user as any).nik;
        token.username = (user as any).username;
        token.noTelepon = (user as any).noTelepon;
        token.alamat = (user as any).alamat;
      }
      // Menangani updateSession dari client-side secara real-time
      if (trigger === "update" && session?.user) {
        token.name = session.user.name;
        token.email = session.user.email;
        token.noTelepon = session.user.noTelepon;
        token.alamat = session.user.alamat;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).nik = token.nik;
        (session.user as any).username = token.username;
        (session.user as any).noTelepon = token.noTelepon;
        (session.user as any).alamat = token.alamat;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});