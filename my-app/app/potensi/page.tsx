'use client';

import React, { useState } from 'react';



export default function PotensiPage() {
const [activeFilter, setActiveFilter] = useState('Semua');
const potensiData = [ 
  { 
    id: 1, title: "Pertanian Organik",
    category: "Pertanian",
    description: "Pemanfaatan lahan subur untuk komoditas organik." 
  }, 
  
  { id: 2,
    title: "Pariwisata Alam",
    category: "Pariwisata", 
    description: "Destinasi wisata pegunungan dan air terjun." 
  }, 
  
  { id: 3,
    title: "Sentra UMKM",
    category: "UMKM",
    description: "Pusat kerajinan tangan dan kuliner desa." 
    } 
  ];
const categories = ['Semua', 'Pariwisata', 'Pertanian', 'UMKM'];
const filteredData = activeFilter === 'Semua' ? potensiData : potensiData.filter( (item) => item.category === activeFilter );


  return (
    <div className="min-h-screen bg-slate-50">
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
      <section className="py-10">

      <div className="flex flex-wrap justify-center gap-4 py-10">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full

            ${
              activeFilter === category

                ? 'bg-emerald-600 text-white'

                : 'bg-white border border-slate-300'
            }`}
          >

            {category}

          </button>

        ))}

      </div>

    </section>

  </div>

);
}