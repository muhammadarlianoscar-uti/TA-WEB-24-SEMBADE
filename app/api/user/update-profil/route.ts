import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export async function PUT(req: Request) {
  try {
    // 1. Validasi token sesi user dari middleware/NextAuth
    const session = await auth();
    if (!session || !session.user?.id) {
      return NextResponse.json({ success: false, error: 'Sesi tidak valid atau telah berakhir.' }, { status: 401 });
    }

    const body = await req.json();
    const { nama, email, noTelepon, alamat } = body;

    // 2. Validasi kolom mandatory
    if (!nama || nama.trim() === '') {
      return NextResponse.json({ success: false, error: 'Kolom Nama Lengkap wajib diisi.' }, { status: 400 });
    }

    // 3. Eksekusi pembaruan data secara atomic ke PostgreSQL
    const userTerupdate = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        nama: nama.trim(),
        email: email ? email.trim() : null,
        noTelepon: noTelepon ? noTelepon.trim() : null,
        alamat: alamat ? alamat.trim() : null
      }
    });

    return NextResponse.json({ 
      success: true,
      message: 'Profil Anda berhasil diperbarui!', 
      user: { nama: userTerupdate.nama } 
    }, { status: 200 });

  } catch (error: any) {
    console.error('API_UPDATE_PROFILE_ERROR:', error);
    return NextResponse.json({ success: false, error: 'Gagal memperbarui data ke dalam database.' }, { status: 500 });
  }
}