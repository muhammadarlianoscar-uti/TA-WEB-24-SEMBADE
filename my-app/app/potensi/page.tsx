'use client';

// mengimporkan react dan hook usestate
import React, { useState } from 'react';

import Image from 'next/image';

// membuat komponen utama halaman potensi smatdes
export default function PotensiPage() {

  // STATE
  // menyimpan kategori yang sedang dipilih
  const [activeFilter, setActiveFilter] = useState('Semua');

  // DATA POTENSI
  // berisi daftar potensi desa yang akan di tampilkan 
  const potensiData = [

    {
      id: 1,
      title: "Pertanian Organik",
      category: "Pertanian",
      description: "Pemanfaatan lahan subur untuk komoditas organik.",
      image: "/images/pertanianorg.webp" // Memperbaiki koma yang hilang di baris deskripsi atas
    },

    {
      id: 2,
      title: "Pariwisata Alam",
      category: "Pariwisata",
      description: "Destinasi wisata pegunungan dan air terjun.",
      image: "/images/wisata.webp" // Menambahkan path gambar pariwisata
    },

    {
      id: 3,
      title: "Sentra UMKM",
      category: "UMKM",
      description: "Pusat kerajinan tangan dan kuliner desa.",
      image: "/images/umkm.webp" // Menambahkan path gambar UMKM
    },

  ];

  // KATEGORI FILTER
  // digunakan untuk membuat tombol filter secara dinamis
  const categories = [
    'Semua',
    'Pariwisata',
    'Pertanian',
    'UMKM'
  ];

  // FILTER DATA
  // jika kategori "Semua" dipilih 
  // maka tampilkan seluruh data.
  // jika tidak, tampilkan dayt sesuai kategori 
  const filteredData =
    activeFilter === 'Semua'
      ? potensiData
      : potensiData.filter(
          (item) => item.category === activeFilter
        );

  {/* HEADER */}
  return (
    
    <div className="min-h-screen bg-slate-50">

      {/* bagian pembuka halaman yang berisi judul dan deskripsi */}
      <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden shadow-sm">

        <div className="container mx-auto px-4 md:px-6">

          <div className="max-w-3xl mx-auto text-center space-y-6">

            {/* judul halaman */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">

              Potensi <span className="text-emerald-600">SmartDes</span>

            </h1>

            {/* deskripsi halaman nya */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">

              Menjelajahi kekayaan alam, budaya, dan inovasi masyarakat desa.

            </p>

          </div>

        </div>

      </section>

      {/* FILTER BUTTON */}
      {/* tombol untuk memilih kategori potensi*/}
      <section className="py-10">

        <div className="container mx-auto px-4 md:px-6">

          <div className="flex flex-wrap justify-center gap-4 py-10">

            {/* melakukan perulangan pada data kategori */}
            {categories.map((category) => (

              <button
                key={category}

                // ketika tombol ddi klik state activefilter akan berubah 
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300

                ${
                  //jika kategori aktif,tombol berwaran hijau 
                  activeFilter === category

                    ? 'bg-emerald-600 text-white'

                    // jika tidak aktif akan bewarna putih
                    : 'bg-white border border-slate-300 text-slate-700'
                }`}
              >

                {category}

              </button>

            ))}

          </div>

          {/* GRID CARD */}
          {/* menapilkann data yang sudah di filter */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredData.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >

                {/* IMAGE */}
                {/* UPDATE: Mengganti teks placeholder dengan komponen Image Next.js asli */}
                <div className="relative h-56 w-full overflow-hidden bg-emerald-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                {/* isi card */}
                <div className="p-6 flex flex-col flex-grow">

                  {/* judul potensi */}
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">

                    {item.title}

                  </h3>

                  {/* deskripsi potensi */}
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">

                    {item.description}

                  </p>

                  {/* label kategori */}
                  <div>
                    <span className="px-3 py-1 bg-emerald-100 rounded-full text-sm text-emerald-700 font-medium">

                      {item.category}

                    </span>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


{/* SECTION STATISTIK SMARTDES */}

{/* membuat section statistik */}
<section className="bg-emerald-600 py-16 text-white">
  
  {/* mengatur agar isi berada di tegah responsif */}
  <div className="container mx-auto px-4 md:px-6">
    
    {/* mengatur tata letak statistik */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      <div>
        <h2 className="text-5xl font-bold">24+</h2>
        <p>UMKM Aktif</p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">15ha</h2>
        <p>Lahan Pertanian</p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">3</h2>
        <p>Titik Wisata</p>
      </div>

      <div>
        <h2 className="text-5xl font-bold">100%</h2>
        <p>Support Digital</p>
      </div>

    </div>

  </div>

</section>


{/* SECTION MITRA  */}
<section className="py-8 bg-white border-b border-slate-100">

        {/* container agar isi berada di tengah halaman */}
        <div className="container mx-auto px-4 text-center">

          {/*Menampilkan judul bahwa SmartDes memiliki dukungan dan kerja sama dari berbagai pihak. */}
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Didukung & Bermitra Dengan</p>

          {/* Menampilkan daftar mitra secara horizontal. */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <h5 className="text-xl font-bold text-slate-700">KEMENDESA</h5>
            <h5 className="text-xl font-bold text-slate-700">Bank Daerah</h5>
            <h5 className="text-xl font-bold text-slate-700">BUMDes Maju</h5>
            <h5 className="text-xl font-bold text-slate-700">TechGov Partner</h5>
          </div>
        </div>
  </section>

  
  {/* SECTION TREN PERTUMBUHAN EKONOMI DESA */}

  {/* MEMBUAT SEBUAH SECTION BARU DENGANT TEMA GELAP */}
  <section className="py-16 bg-slate-800 text-white relative overflow-hidden">

        {/* Dekorasi lingkaran hijau transortasi di background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        {/* menempatkan seluruh isi section di tengah halaman. */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* mengatur layout menjadi responsif */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Tren Pertumbuhan Ekonomi Desa Terintegrasi
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Melalui digitalisasi UMKM dan pengelolaan pariwisata yang cerdas, pendapatan asli desa (PADes) mengalami peningkatan signifikan dalam 3 tahun terakhir.
              </p>

              {/* berfungsi menampilkan menfaat smartdes */}
              <ul className="space-y-4 pt-4">
                <li className="flex items-center text-emerald-400">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Peningkatan transaksi digital hingga 85%</span>
                </li>
                <li className="flex items-center text-emerald-400">

                  {/* menampilakn ikon cheklict */}
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Membuka 120+ lapangan kerja baru</span>
                </li>
              </ul>
            </div>
            
            {/* SECTION VISUALISASI PERTUMBUHAN PENDAPATAN */}
            {/* membuat kotak grafik */}
            <div className="lg:w-1/2 w-full max-w-md bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-300 mb-6">Grafik Tren Pendapatan Desa</h3>
              <div className="relative w-full h-52 flex flex-col justify-between">

                <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                {/* Garis Bantu Grid */}
                  <line x1="0" y1="120" x2="300" y2="120" stroke="#334155" strokeDasharray="4" />
                  <line x1="0" y1="75" x2="300" y2="75" stroke="#334155" strokeDasharray="4" />
                  <line x1="0" y1="30" x2="300" y2="30" stroke="#334155" strokeDasharray="4" />

                  {/* Batang 2024 */}
                  <rect x="35" y="85" width="30" height="35" fill="#475569" rx="4" className="hover:fill-emerald-500 transition-colors duration-300 cursor-pointer" />
                  <text x="50" y="75" textAnchor="middle" fill="#10b981" fontSize="10" className="font-bold">200Jt</text>
                  <text x="50" y="140" textAnchor="middle" fill="#94a3b8" fontSize="12">2024</text>

                  {/* Batang 2025 */}
                  <rect x="135" y="55" width="30" height="65" fill="#475569" rx="4" className="hover:fill-emerald-500 transition-colors duration-300 cursor-pointer" />
                  <text x="150" y="45" textAnchor="middle" fill="#10b981" fontSize="10" className="font-bold">450Jt</text>
                  <text x="150" y="140" textAnchor="middle" fill="#94a3b8" fontSize="12">2025</text>

                  {/* Batang 2026 */}
                  <rect x="235" y="20" width="30" height="100" fill="#10b981" rx="4" className="shadow-lg cursor-pointer" />
                  <text x="250" y="10" textAnchor="middle" fill="#34d399" fontSize="11" className="font-bold">800Jt</text>
                  <text x="250" y="140" textAnchor="middle" fill="#fff" fontSize="12" className="font-bold">2026</text>

                  {/* Garis Hubung Tren Ekonomi */}
                  <path d="M 50 100 L 150 75 L 250 35" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />

                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION PETA SEBARAN POTENSI SMARTDES */}

      {/* Membuat section baru untuk fitur pemetaan  */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">

          {/* mengatur tampilan menjadi dua bagian */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">

              {/* memberikan label bahwa section ini membahas section ini membahas pemetaan digital */}
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-bold tracking-wide uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                Pemetaan Digital
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                Peta Sebaran Potensi SmartDes
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dilengkapi dengan Geographic Information System (GIS) terintegrated, memudahkan investor dan wisatawan menemukan lokasi potensi unggulan desa kami secara real-time.
              </p>

              {/* sebagai tombol menuju halaman peta */}
              <button className="px-6 py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-colors shadow-md">
                Buka Peta Interaktif
              </button>
            </div>
            
            <div className="lg:w-1/2 w-full">

            {/* membuat area simulasi peta. */}
              <div className="bg-slate-100 rounded-3xl h-80 md:h-[400px] w-full relative overflow-hidden shadow-inner border border-slate-200/60 flex items-center justify-center">

              {/* membuat pola seperti grid pada peta */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4ade80 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                
                {/* mesimulasikan lokasi potensi desa */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-bounce"></div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                
                <p className="relative z-10 font-semibold text-slate-400 tracking-widest uppercase">Integrasi Peta Digital (Maps API)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* SECTION KOLABORASI DAN INVESTASI  */}

        {/* membuat section terakhir pada halaman */}
       <section className="pb-20 pt-16 bg-slate-50">

        {/* mengatur agar isi section berada di tengah dan responsif */}
        <div className="container mx-auto px-4 md:px-6">

          {/* membuat kotak utama yang berisi seluruh informasi CTA */}
          <div className="bg-white rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-sm border border-slate-200/60 relative overflow-hidden">

            {/* membuat efek dekorasi lingkaran blur*/}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-slate-100 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Tertarik Mengembangkan Potensi Desa Bersama Kami?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Pemerintah desa terbuka untuk berbagai bentuk kolaborasi, investasi, dan inovasi teknologi demi memajukan ekonomi masyarakat lokal.
              </p>

              {/* mengatur posisi tombol */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">

                {/* memberikan akses kepada pengguna untuk menghubungi pengelola desa */}
                <button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-all hover:-translate-y-1">
                  Hubungi Pengelola
                </button>

                {/* memberikan akses untuk mengundduh proposal desa */}
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 transition-all hover:-translate-y-1">
                  Unduh Proposal (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}