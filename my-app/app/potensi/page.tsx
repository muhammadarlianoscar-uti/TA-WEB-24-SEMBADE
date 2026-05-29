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

    </div>

  );

}