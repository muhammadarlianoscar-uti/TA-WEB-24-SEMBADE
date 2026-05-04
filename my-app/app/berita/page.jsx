import React from 'react'

const beritaData = [
  { id: 1, judul: "Pembangunan Jalan Desa" },
  { id: 2, judul: "Gotong Royong Warga" },
  { id: 3, judul: "Pelatihan UMKM" },
  { id: 4, judul: "Festival Desa" },
];

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
      className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
    >
      <h2 className="text-lg font-bold text-green-600">
        {item.judul}
      </h2>
      <p className="text-gray-500 mt-2 text-sm">
        Informasi terbaru seputar desa.
      </p>
    </div>
  ))}
</div>

    </main>
  );
}


      