'use client';

import React, { useState } from 'react';

export default function PotensiPage() {

  // STATE
  const [activeFilter, setActiveFilter] = useState('Semua');

  // DATA POTENSI
  const potensiData = [

    {
      id: 1,
      title: "Pertanian Organik",
      category: "Pertanian",
      description: "Pemanfaatan lahan subur untuk komoditas organik."
    },

    {
      id: 2,
      title: "Pariwisata Alam",
      category: "Pariwisata",
      description: "Destinasi wisata pegunungan dan air terjun."
    },

    {
      id: 3,
      title: "Sentra UMKM",
      category: "UMKM",
      description: "Pusat kerajinan tangan dan kuliner desa."
    }

  ];

  // KATEGORI FILTER
  const categories = [
    'Semua',
    'Pariwisata',
    'Pertanian',
    'UMKM'
  ];

  // FILTER DATA
  const filteredData =
    activeFilter === 'Semua'
      ? potensiData
      : potensiData.filter(
          (item) => item.category === activeFilter
        );

  return (

    <div className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden shadow-sm">

        <div className="container mx-auto px-4 md:px-6">

          <div className="max-w-3xl mx-auto text-center space-y-6">

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">

              Potensi <span className="text-emerald-600">SmartDes</span>

            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">

              Menjelajahi kekayaan alam, budaya, dan inovasi masyarakat desa.

            </p>

          </div>

        </div>

      </section>

      {/* FILTER BUTTON */}
      <section className="py-10">

        <div className="container mx-auto px-4 md:px-6">

          <div className="flex flex-wrap justify-center gap-4 py-10">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300

                ${
                  activeFilter === category

                    ? 'bg-emerald-600 text-white'

                    : 'bg-white border border-slate-300 text-slate-700'
                }`}
              >

                {category}

              </button>

            ))}

          </div>

          {/* GRID CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredData.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >

                {/* IMAGE */}
                <div className="h-56 bg-emerald-50 flex items-center justify-center">

                  <span className="text-emerald-300 text-lg font-semibold">

                    Gambar: {item.title}

                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-3 text-slate-800">

                    {item.title}

                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">

                    {item.description}

                  </p>

                  <span className="px-3 py-1 bg-emerald-100 rounded-full text-sm text-emerald-700 font-medium">

                    {item.category}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="bg-emerald-600 py-16 text-white">

  <div className="container mx-auto px-4 md:px-6">

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

<section className="py-8 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Didukung & Bermitra Dengan</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <h5 className="text-xl font-bold text-slate-700">KEMENDESA</h5>
            <h5 className="text-xl font-bold text-slate-700">Bank Daerah</h5>
            <h5 className="text-xl font-bold text-slate-700">BUMDes Maju</h5>
            <h5 className="text-xl font-bold text-slate-700">TechGov Partner</h5>
          </div>
        </div>
  </section>

  <section className="py-16 bg-slate-800 text-white relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Tren Pertumbuhan Ekonomi Desa Terintegrasi
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Melalui digitalisasi UMKM dan pengelolaan pariwisata yang cerdas, pendapatan asli desa (PADes) mengalami peningkatan signifikan dalam 3 tahun terakhir.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center text-emerald-400">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Peningkatan transaksi digital hingga 85%</span>
                </li>
                <li className="flex items-center text-emerald-400">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Membuka 120+ lapangan kerja baru</span>
                </li>
              </ul>
            </div>
            
            {/* Simple CSS Bar Chart UI */}
            <div className="lg:w-1/2 w-full max-w-md bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-300 mb-8">Grafik Pendapatan (Visual)</h3>
              <div className="flex items-end justify-between h-48 gap-2">
                {/* Batang 1 */}
                <div className="w-1/3 flex flex-col items-center group">
                  <span className="text-emerald-400 text-xs font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Rp 200Jt</span>
                  <div className="w-full bg-slate-700 hover:bg-emerald-500 transition-colors duration-500 rounded-t-md h-[40%] relative"></div>
                  <span className="text-slate-400 text-sm mt-3">2024</span>
                </div>
                {/* Batang 2 */}
                <div className="w-1/3 flex flex-col items-center group">
                  <span className="text-emerald-400 text-xs font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Rp 450Jt</span>
                  <div className="w-full bg-slate-700 hover:bg-emerald-500 transition-colors duration-500 rounded-t-md h-[70%] relative"></div>
                  <span className="text-slate-400 text-sm mt-3">2025</span>
                </div>
                {/* Batang 3 */}
                <div className="w-1/3 flex flex-col items-center group">
                  <span className="text-emerald-400 text-xs font-bold mb-2 opacity-100 transition-opacity">Rp 800Jt</span>
                  <div className="w-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] rounded-t-md h-[100%] relative"></div>
                  <span className="text-white font-bold text-sm mt-3">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">

  <div className="container mx-auto px-4 md:px-6">

    <div className="bg-slate-100 rounded-3xl h-96 flex items-center justify-center">

      <p className="text-slate-500 text-xl font-semibold">

        Integrasi Peta Digital

      </p>

    </div>

  </div>

</section>
    </div>


  );

}