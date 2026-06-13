import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 

export async function POST(request: Request) {
  try {
    // 1. Proteksi Sesi Login (Pastikan Pengaju adalah Warga Terautentikasi)
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        {
          success: false,
          message: "Akses ditolak. Silakan masuk akun terlebih dahulu.",
        },
        { status: 401 },
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

    // FORM PENGADUAN
    if (actionType === "pengaduan") {
      const category = formData.get("category") as string;
      const imageFile = formData.get("image") as File | null;
      const imagePath = await saveFile(imageFile);

      await prisma.pengaduan.create({
        data: {
          nama: name,
          kategori: category,
          alamat: address,
          deskripsi: purpose,
          fileBukti: imagePath,
          // notes Opsional: Hubungkan pengaduan ke userId jika skema prisma mendukung relasi ini
          // userId: session.user.id
        },
      });

      return NextResponse.json({
        success: true,
        message: "Laporan pengaduan warga berhasil dikirim!",
      });
    }

    // FORM ADMINISTRASI
    const nik = formData.get("nik") as string;
    const type = formData.get("type") as string;

    const fileKtpPath = await saveFile(formData.get("ktp") as File | null);
    const fileKkPath = await saveFile(formData.get("kk") as File | null);
    const fileRtPath = await saveFile(formData.get("suratRt") as File | null);

    // Memasukkan teks formulir secara dinamis ke dalam format struktur JSON
    const isiJsonForm = {
      nama: name,
      nik: nik,
      alamat: address,
      keperluan: purpose,
    };

    await prisma.pengajuan.create({
      data: {
        jenisLayanan: type,
        dataForm: isiJsonForm, // Masuk langsung ke kolom Json PostgreSQL
        fileKtp: fileKtpPath,
        fileKk: fileKkPath,
        fileRt: fileRtPath,
        userId: session.user.id, // Menghubungkan secara akurat ke ID Warga yang sedang login
      },
    });

    return NextResponse.json({
      success: true,
      message: "Berkas pengajuan administrasi berhasil disimpan!",
    });
  } catch (error) {
    console.error("PELAYANAN_API_ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi gangguan server internal." },
      { status: 500 },
    );
  }
}
