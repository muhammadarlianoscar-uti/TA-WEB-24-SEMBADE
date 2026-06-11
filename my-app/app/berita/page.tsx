'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

// Menambahkan properti "captionFoto" untuk catatan pada foto
const beritaData = [
  {
    id: 1,
    title: "Gotong Royong Warga Desa Kersik Membersihkan Lingkungan",
    desc: "Warga Desa Kersik melakukan kegiatan gotong royong untuk menjaga kebersihan lingkungan dan meningkatkan kenyamanan masyarakat.",
    captionFoto: "Warga membersihkan selokan utama di RT 01.",
    image: "/images/gtngryng.webp",
    views: 120,
    date: "07 Mei 2026",

  },
  {
    id: 2,
    title: "Pelatihan Teknologi SmartDes untuk Pemuda Desa",
    desc: "Pemerintah desa mengadakan pelatihan teknologi digital dan smart village untuk meningkatkan kemampuan pemuda desa.",
    captionFoto: "Sesi praktik penggunaan aplikasi administrasi desa.",
    image: "/images/pelatihan.webp",
    views: 98,
    date: "05 Mei 2026",
  },
  {
    id: 3,
    title: "Peresmian Taman Hijau sebagai Ruang Publik Desa",
    desc: "Taman hijau baru resmi dibuka untuk masyarakat sebagai tempat rekreasi dan area edukasi lingkungan.",
    captionFoto: "Pemotongan pita peresmian taman oleh Kepala Desa.",
    image: "/images/tamanhijau.webp",
    views: 150,
    date: "03 Mei 2026",
  },
  {
    id: 4,
    title: "Peningkatan Jalan Desa untuk Akses Masyarakat",
    desc: "Pembangunan dan perbaikan jalan desa dilakukan untuk memperlancar aktivitas warga dan distribusi hasil pertanian.",
    captionFoto: "Proses pengecoran jalan poros desa tahap pertama.",
    image: "/images/peningkatanjalan.webp",
    views: 87,
    date: "01 Mei 2026",
  },
  {
    id: 5,
    title: "Festival Budaya Desa Kersik Berlangsung Meriah",
    desc: "Festival budaya tahunan menghadirkan berbagai pertunjukan seni tradisional dan bazar UMKM masyarakat desa.",
    captionFoto: "Pertunjukan tari tradisional oleh pemudi desa.",
    image: "/images/festivalbudaya.webp",
    views: 210,
    date: "28 April 2026",
  },
  {
    id: 6,
    title: "Program Penghijauan untuk Mendukung Smart City",
    desc: "Pemerintah desa bersama masyarakat melakukan penanaman pohon untuk menciptakan lingkungan yang lebih hijau dan sehat.",
    captionFoto: "Penanaman 500 bibit pohon mahoni di batas desa.",
    image: "/images/programpenghijuan.webp",
    views: 175,
    date: "25 April 2026",
  },
];

export default function Berita() {
  // State untuk menyimpan ID gambar-gambar yang sudah diklik/dilihat
  const [revealedImages, setRevealedImages] = useState<number[]>([]);

  // Fungsi untuk menampilkan atau menyembunyikan gambar
  const toggleImage = (id: number) => {
    if (revealedImages.includes(id)) {
      // Jika sudah terbuka, klik lagi untuk memburamkan kembali (opsional)
      setRevealedImages(revealedImages.filter(imageId => imageId !== id));
    } else {
      // Jika masih buram, buka fotonya
      setRevealedImages([...revealedImages, id]);
    }
  };

  {/* HEADER PAGE BERITA DESA */}
  return (

    // sebagai wadah utama halaman berita
    <main className="bg-slate-50 min-h-screen px-4 sm:px-6 py-12">
      
      {/* menenmpatkan seluruh isi header di tengah halaman*/}
      <div className="max-w-7xl mx-auto mb-12 text-center">

        {/* menampilkan nama halaman */}
        <h1 className="text-4xl font-extrabold text-emerald-700 tracking-tight">
          Berita Desa
        </h1>

        {/* sebagai pemisah visual antara judul dan deskripsi */}
        <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full mb-4"></div>

        {/* menjelaskan tujuan halaman berita */}
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Menyajikan informasi terbaru tentang peristiwa, kegiatan,
          dan artikel-artikel jurnalistik dari masyarakat.
        </p>
      </div>

      {/* SECTION DAFTAR GRID BERITA */}

      {/* mengatur tata letak card berita */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* mengambil seluruh data berita satu per satu */}
        {beritaData.map((item) => {

          // Cek apakah gambar ini masuk ke dalam daftar yang sudah dibuka
          const isRevealed = revealedImages.includes(item.id);

          return (

            // membuat satu card berita
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 flex flex-col overflow-hidden">

              {/* Menjadi tempat gambar berita */}
              <div 
                className="relative w-full h-56 overflow-hidden cursor-pointer group"

                // menjalankan fungsi togglelmage
                onClick={() => toggleImage(item.id)}

                // Menampilkan tooltip saat mouse diarahkan
                title="Klik untuk melihat/menutup foto">
                  
                {/*menampilkan gambar berita */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill

                  // efek blur
                  className={`object-cover transition-all duration-700 ease-in-out ${
                    isRevealed ? 'blur-none scale-100' : 'blur-xl scale-110'
                  }`}
                />

                {/* Overlay saat gambar MASIH BLUR */}
                {!isRevealed && (

                  // membuat lapisan di atas gambar
                  <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center z-10 transition-opacity">

                    {/* memberikan petunjuk bahwa gambar dapat dibuka */}
                    <span className="bg-white/90 text-emerald-800 px-5 py-2.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform">
                      

                      {/* Menampilkan Ikon mata */}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      Lihat Foto
                    </span>
                  </div>
                )}

                {/* Overlay CAPTION saat gambar SUDAH JELAS */}
                {isRevealed && (

                  // membuat kotak keterangan di bagian bawah gambar
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 pt-12 z-10 animate-fade-in">

                    {/* menampilkan isi caption */}
                    <p className="text-white text-sm font-medium leading-snug">

                      {/* memberikan identitas bahwa teks berikut adalah keterangan foto */}
                      <span className="text-emerald-400 font-bold mr-1">Catatan:</span> 
                        {item.captionFoto}

                      {/* menampilkan icon admin dan nama penulis berupa link */}
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </p>
                  </div>
                )}

                {/* menampilkan tanggal publikasi berita*/}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 z-20 shadow-sm">
                  {item.date}
                </div>
              </div>

              {/* menjadi wadah isi berita*/}
              <div className="p-6 flex flex-col flex-grow">

                {/* menampilkan judul berita */}
                <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 leading-snug">
                  {item.title}
                </h2>

                {/* menampilkan ringkasan berita */}
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {item.desc}
                </p>

                {/* menampilkan informasi tembahan */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                  <div className="mb-6">
                    <Link 
                    href={item.url || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline gap-1 transition-colors"
                  >
                    Baca Selengkapnya
                  </Link>
          
                </div>
              </div>
                  
                  {/* menampilkan jumlah orang yang melihat berita */}
                  <div className="flex items-center gap-1">

                    {/* menampilkan ikon mata */}
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                      {/* membuat bagian bola mata */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>

                    {/* jumlah view */}
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
