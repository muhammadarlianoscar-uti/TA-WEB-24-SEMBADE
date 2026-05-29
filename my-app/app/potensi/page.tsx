'use client';

import React, { useState } from 'react';



export default function PotensiPage() {
const [activeFilter, setActiveFilter] = useState('Semua');
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
    </div>
  );
}