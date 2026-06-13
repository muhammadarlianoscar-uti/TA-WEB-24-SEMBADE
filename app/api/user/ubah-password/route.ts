import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function PUT(req: Request) {
  try {
    // 1. Validasi sesi login warga
    const session = await auth();
    if (!session || !session.user?.id) {
      return NextResponse.json({ success: false, error: "Sesi tidak valid atau telah berakhir." }, { status: 401 });
    }

    const body = await req.json();
    const { passwordLama, passwordBaru } = body;

    // 2. Validasi input wajib
    if (!passwordLama || !passwordBaru) {
      return NextResponse.json({ success: false, error: "Semua input password wajib diisi." }, { status: 400 });
    }

    if (passwordBaru.length < 6) {
      return NextResponse.json({ success: false, error: "Kata sandi baru minimal harus 6 karakter." }, { status: 400 });
    }

    // 3. Ambil data password lama terenkripsi dari PostgreSQL
    const userRecord = await prisma.user.findUnique({
      where: { id: session.user.id }
    });

    if (!userRecord || !userRecord.password) {
      return NextResponse.json({ success: false, error: "Data akun tidak ditemukan dalam sistem." }, { status: 404 });
    }

    // 4. Verifikasi kesesuaian password lama
    const isMatch = await bcrypt.compare(String(passwordLama), userRecord.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, error: "Kata sandi saat ini yang Anda masukkan salah." }, { status: 400 });
    }

    // 5. Hashing password baru dengan salt rounds level 10
    const hashedNewPassword = await bcrypt.hash(String(passwordBaru), 10);

    // 6. Update baris password di database
    await prisma.user.update({
      where: { id: session.user.id },
      data: { password: hashedNewPassword }
    });

    return NextResponse.json({ success: true, message: "Kata sandi akun Anda sukses diperbarui!" }, { status: 200 });

  } catch (error: any) {
    console.error("API_CHANGE_PASSWORD_ERROR:", error);
    return NextResponse.json({ success: false, error: "Gagal memproses penggantian password." }, { status: 500 });
  }
}