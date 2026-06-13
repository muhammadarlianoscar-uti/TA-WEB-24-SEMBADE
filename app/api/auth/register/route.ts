import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Menggunakan path alias agar lebih rapi
import bcrypt from "bcryptjs"; // Menggunakan bcryptjs demi kompatibilitas Next.js

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nama, nik, username, password } = body;

    // 1. Validasi Input Dasar
    if (!nama || !nik || !username || !password) {
      return NextResponse.json({ error: "Semua kolom pendaftaran wajib diisi!" }, { status: 400 });
    }

    if (nik.length !== 16) {
      return NextResponse.json({ error: "Nomor Induk Kependudukan (NIK) harus tepat 16 digit." }, { status: 400 });
    }

    // 2. Cek Ganda: Apakah NIK atau Username sudah digunakan orang lain?
    const userEksis = await prisma.user.findFirst({
      where: {
        OR: [
          { nik: String(nik) },
          { username: String(username).toLowerCase() }
        ]
      }
    });

    if (userEksis) {
      if (userEksis.nik === nik) {
        return NextResponse.json({ error: "NIK tersebut sudah terdaftar dalam sistem desa." }, { status: 400 });
      }
      return NextResponse.json({ error: "Nama pengguna (username) sudah digunakan orang lain." }, { status: 400 });
    }

    // 3. Enkripsi Sandi menggunakan Bcryptjs (Salt rounds 10)
    const hashedPassword = await bcrypt.hash(String(password), 10);

    // 4. Masukkan baris data warga baru secara resmi ke PostgreSQL
    await prisma.user.create({
      data: {
        nama,
        nik: String(nik),
        username: String(username).toLowerCase(),
        password: hashedPassword,
        role: "warga", // Semua pendaftaran otomatis menjadi warga, admin/pimpinan diubah manual via db
      }
    });

    return NextResponse.json({ message: "Registrasi warga berhasil dilakukan!" }, { status: 201 });

  } catch (error) {
    console.error("REGISTER_API_ERROR:", error);
    return NextResponse.json({ error: "Terjadi gangguan server internal saat mendaftar." }, { status: 500 });
  }
}