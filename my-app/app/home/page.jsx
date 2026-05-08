import Link from 'next/link';

export default function Home() {
  return (
    // Wrapper utama dengan background Putih Tulang dari tema Modern Nature
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* ================= SECTION 1: HERO BANNER ================= */}
      <section className="relative bg-gradient-to-br from-emerald-700 to-emerald-900 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dekorasi Lingkaran Abstrak di Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-emerald-400 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
            Selamat Datang di <span className="text-emerald-300">Desa Pintar</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-emerald-50 mb-10 leading-relaxed">
            Mewujudkan tata kelola desa yang transparan, inovatif, dan terintegrasi melalui teknologi digital untuk kesejahteraan masyarakat.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Tombol Primary */}
            <Link 
              href="/pelayanan" 
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Layanan Publik Terpadu
            </Link>
            {/* Tombol Secondary (Glassmorphism / Transparan) */}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-800">Layanan & Informasi Utama</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid CSS untuk membuat 3 kolom di layar besar, dan 1 kolom di HP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Pelayanan */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
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
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
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
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
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

      {/* ================= SECTION 3: STATISTIK SINGKAT ================= */}
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