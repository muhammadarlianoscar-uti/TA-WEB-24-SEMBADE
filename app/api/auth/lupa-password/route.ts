import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { nik, noTelepon, passwordBaru } = body;

    if (!nik || !noTelepon || !passwordBaru) {
      return NextResponse.json({ error: "Seluruh kolom verifikasi wajib diisi." }, { status: 400 });
    }

    // 1. Validasi silang: Memastikan data nomor telepon terdaftar di bawah NIK pemohon
    const warga = await prisma.user.findFirst({
      where: {
        nik: String(nik),
        noTelepon: String(noTelepon)
      }
    });

    if (!warga) {
      return NextResponse.json({ error: "Kombinasi NIK dan Nomor Telepon tidak ditemukan dalam database kependudukan desa." }, { status: 404 });
    }

    // 2. Jika valid, enkripsi password baru dan tindih data password lama
    const hashedNewPassword = await bcrypt.hash(String(passwordBaru), 10);

    await prisma.user.update({
      where: { id: warga.id },
      data: { password: hashedNewPassword }
    });

    return NextResponse.json({ message: "Kata sandi akun Anda sukses di-reset!" }, { status: 200 });

  } catch (error) {
    console.error("FORGOT_PASSWORD_API_ERROR:", error);
    return NextResponse.json({ error: "Gagal memproses pengaturan ulang sandi." }, { status: 500 });
  }
}