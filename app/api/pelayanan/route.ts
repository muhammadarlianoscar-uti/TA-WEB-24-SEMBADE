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