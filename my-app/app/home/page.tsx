import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* ================= SECTION 1: HERO BANNER (PARALLAX + OVERLAY) ================= */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[80vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/bghome.webp')" }}
        ></div>
        
        {/* Gradient Overlay agar teks tetap terbaca */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-900/80 via-emerald-900/70 to-slate-50"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10 pt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
            Selamat Datang di <span className="text-emerald-400">SmartDes</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-emerald-50 mb-10 leading-relaxed drop-shadow-md">
            Mewujudkan tata kelola desa yang transparan, inovatif, dan terintegrasi melalui teknologi digital untuk kesejahteraan masyarakat.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/pelayanan" 
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Layanan Publik Terpadu
            </Link>
            <Link 
              href="/profil" 
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-emerald-300/30 backdrop-blur-sm transition-all duration-300"
            >
              Pelajari Profil Desa
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FITUR & LAYANAN (CARDS) ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-800">Layanan & Informasi Utama</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Pelayanan */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 border border-slate-100">
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Administrasi Online</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
              Urus surat pengantar, keterangan domisili, dan dokumen administrasi lainnya secara cepat tanpa perlu antre di balai desa.
            </p>
            <Link href="/pelayanan" className="text-emerald-600 font-semibold hover:text-emerald-800 flex items-center gap-1">
              Buat Surat <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Card 2: Potensi */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 border border-slate-100">
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Potensi & UMKM</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
              Jelajahi potensi wisata lokal, produk unggulan UMKM, dan hasil pertanian kebanggaan dari masyarakat desa kami.
            </p>
            <Link href="/potensi" className="text-emerald-600 font-semibold hover:text-emerald-800 flex items-center gap-1">
              Lihat Potensi <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Card 3: Berita */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 border border-slate-100">
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Berita & Informasi</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
              Dapatkan informasi terbaru mengenai kegiatan desa, pengumuman penting, dan transparansi dana alokasi desa.
            </p>
            <Link href="/berita" className="text-emerald-600 font-semibold hover:text-emerald-800 flex items-center gap-1">
              Baca Berita <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: GALERI FOTO (BENTO GRID MODERN) ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-emerald-800">Potret Keindahan Desa</h2>
            <div className="w-16 h-1 bg-emerald-500 mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl">Jelajahi sudut-sudut inspiratif, kegiatan warga, dan pesona alam yang menjadi kebanggaan kita bersama.</p>
          </div>
          <Link href="/potensi" className="text-emerald-600 font-medium hover:text-emerald-800 flex items-center gap-1 shrink-0">
            Lihat Semua Foto <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Foto 1 (Besar, menempati 2 kolom & 2 baris) */}
          <div className="group relative overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 shadow-md hover:shadow-xl transition-all duration-300 h-64 md:h-full">
            <Image src="/images/sawah.webp" alt="Pemandangan Desa" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            {/* Overlay & Teks Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">Alam</span>
              <h3 className="text-2xl font-bold text-white mb-2">Area Persawahan Terasering</h3>
              <p className="text-emerald-50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Hamparan hijau yang menjadi sumber utama komoditas agrikultur desa.</p>
            </div>
          </div>

          {/* Foto 2 (Landscape atas) */}
          <div className="group relative overflow-hidden rounded-2xl md:col-span-2 shadow-md hover:shadow-xl transition-all duration-300 h-48 md:h-full">
            <Image src="/images/panenraya.webp" alt="Kegiatan Warga" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white">Festival Panen Raya</h3>
              <p className="text-emerald-50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Tradisi tahunan wujud syukur masyarakat.</p>
            </div>
          </div>

          {/* Foto 3 (Kotak bawah kiri) */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-48 md:h-full">
            <Image src="/images/kerajinan.webp" alt="UMKM" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-bold text-white">Pusat Kerajinan</h3>
            </div>
          </div>

          {/* Foto 4 (Kotak bawah kanan) */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-48 md:h-full">
            <Image src="/images/balai.webp" alt="Infrastruktur" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-bold text-white">Balai Desa Modern</h3>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: STATISTIK SINGKAT ================= */}
      <section className="bg-emerald-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold text-emerald-600">3.500+</p>
            <p className="text-slate-600 font-medium mt-2">Penduduk</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-emerald-600">45</p>
            <p className="text-slate-600 font-medium mt-2">RT / RW</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-emerald-600">120+</p>
            <p className="text-slate-600 font-medium mt-2">UMKM Aktif</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-emerald-600">100%</p>
            <p className="text-slate-600 font-medium mt-2">Digitalisasi Desa</p>
          </div>
        </div>
      </section>

    </div>
  );
}