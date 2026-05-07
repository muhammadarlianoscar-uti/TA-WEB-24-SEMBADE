import React from 'react'

const beritaData = [
  {
    id: 1,
    title: "Gotong Royong Warga Desa Kersik Membersihkan Lingkungan",
    desc: "Warga Desa Kersik melakukan kegiatan gotong royong untuk menjaga kebersihan lingkungan dan meningkatkan kenyamanan masyarakat.",
    image: "/images/berita1.jpg",
    views: 120,
    date: "07 Mei 2026",
  },
  {
    id: 2,
    title: "Pelatihan Teknologi SmartDes untuk Pemuda Desa",
    desc: "Pemerintah desa mengadakan pelatihan teknologi digital dan smart village untuk meningkatkan kemampuan pemuda desa.",
    image: "/images/berita2.jpg",
    views: 98,
    date: "05 Mei 2026",
  },
  {
    id: 3,
    title: "Peresmian Taman Hijau sebagai Ruang Publik Desa",
    desc: "Taman hijau baru resmi dibuka untuk masyarakat sebagai tempat rekreasi dan area edukasi lingkungan.",
    image: "/images/berita3.jpg",
    views: 150,
    date: "03 Mei 2026",
  },
  {
    id: 4,
    title: "Peningkatan Jalan Desa untuk Akses Masyarakat",
    desc: "Pembangunan dan perbaikan jalan desa dilakukan untuk memperlancar aktivitas warga dan distribusi hasil pertanian.",
    image: "/images/berita4.jpg",
    views: 87,
    date: "01 Mei 2026",
  },
  {
    id: 5,
    title: "Festival Budaya Desa Kersik Berlangsung Meriah",
    desc: "Festival budaya tahunan menghadirkan berbagai pertunjukan seni tradisional dan bazar UMKM masyarakat desa.",
    image: "/images/berita5.jpg",
    views: 210,
    date: "28 April 2026",
  },
  {
    id: 6,
    title: "Program Penghijauan untuk Mendukung Smart City",
    desc: "Pemerintah desa bersama masyarakat melakukan penanaman pohon untuk menciptakan lingkungan yang lebih hijau dan sehat.",
    image: "/images/berita6.jpg",
    views: 175,
    date: "25 April 2026",
  },
];


import Image from "next/image";

export default function berita() {
  return (
    <main className="bg-gray-100 min-h-screen px-6 py-10">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-green-600">
          Berita Desa
        </h1>
        <p className="text-gray-600 mt-2">
          Menyajikan informasi terbaru tentang peristiwa, berita terkini,
          dan artikel-artikel jurnalistik dari Desa Kersik
        </p>
      </div>

      {/* GRID BERITA */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {beritaData.map((item) => (
      <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
      <h2 className="text-lg font-bold text-green-600">
        {item.judul}
      </h2>
      <p className="text-gray-500 mt-2 text-sm">
        Informasi terbaru seputar desa.
      </p>

      {/* IMAGE */}
            <div className="relative w-full h-52">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

      {/* FOOTER CARD */}
            <div className="flex justify-between items-center mt-5 text-sm text-gray-500">
              <div>
                <p>administrator</p>
                 <p>Dilihat {item.views} kali</p>
                </div>
              </div>
            </div>
        ))}
      </div>

    </main>
  );
}



      