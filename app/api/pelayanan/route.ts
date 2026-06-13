import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Diselaraskan menggunakan named import sesuai kode kamu sebelumnya
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Sesuaikan jalur lokasi authOptions milikmu

export async function POST(request: Request) {
  try {
    // 1. Proteksi Sesi Login (Pastikan Pengaju adalah Warga Terautentikasi)
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, message: "Akses ditolak. Silakan masuk akun terlebih dahulu." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const actionType = formData.get("actionType") as string;
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const purpose = formData.get("purpose") as string;

    // Persiapan Folder Unggahan Berkas di Sisi Server
    const uploadDir = join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    // Fungsi Pembantu untuk Menyimpan File ke Penyimpanan Lokal Server
    const saveFile = async (file: File | null) => {
      if (!file || file.size === 0) return null;
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const path = join(uploadDir, filename);
      await writeFile(path, buffer);
      return `/uploads/${filename}`;
    };