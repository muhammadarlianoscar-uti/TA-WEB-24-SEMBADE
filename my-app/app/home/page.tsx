import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    // UTAMA: Pembungkus seluruh halaman. 
    // min-h-screen = tinggi minimal 100% layar agar background tidak menggantung.
    // bg-slate-50 = warna latar belakang abu-abu sangat terang (anti-silau).
    // text-slate-800 = warna teks bawaan abu-abu gelap agar nyaman dibaca.
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* ================= SECTION 1: HERO BANNER (PARALLAX + OVERLAY) ================= */}
      {/* section relative = menjadi patokan koordinat untuk elemen gambar melayang di dalamnya */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[80vh]">
        
        {/* GAMBAR BACKGROUND: 
            absolute inset-0 = melayang dan dipaksa melebar penuh menutupi area section.
            bg-fixed = membuat gambar diam saat di-scroll (efek parallax pasif) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/bghome.webp')" }}
        ></div>
        
        {/* LAPISAN GELAP (OVERLAY):
            bg-gradient-to-b = membuat warna gradasi dari hijau gelap (atas) ke abu-abu terang (bawah).
            Tujuannya: Menimpa gambar background agar teks putih di atasnya tetap kontras dan terbaca jelas. */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-900/80 via-emerald-900/70 to-slate-50"></div>

        {/* KONTEN TEKS HERO:
            relative z-10 = menaikkan posisi teks ke lapisan paling atas agar tidak tertutup gambar/overlay */}
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-10">
          {/* drop-shadow-lg = memberikan bayangan hitam halus di belakang teks putih */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
            Selamat Datang di <span className="text-emerald-400">SmartDes</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-emerald-50 mb-10 leading-relaxed drop-shadow-md">
            Mewujudkan tata kelola desa yang transparan, inovatif, dan terintegrasi melalui teknologi digital untuk kesejahteraan masyarakat.
          </p>
          
          {/* TOMBOL CALL TO ACTION (CTA):
              flex-col sm:flex-row = di HP tombolnya bertumpuk vertikal, di laptop otomatis berjejer kesamping */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Tombol Utama (Hijau):
                hover:-translate-y-1 = saat kursor menyentuh, tombol akan bergeser ke atas 4pixel.
                transition-all duration-300 = membuat pergerakan geser tersebut halus selama 0.3 detik */}
            <Link 
              href="/pelayanan" 
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Layanan Publik Terpadu
            </Link>
            {/* Tombol Kedua (Transparan Blur):
                bg-white/10 = warna latar putih dengan transparansi 10%.
                backdrop-blur-sm = memberikan efek kaca buram pada background tombol */}
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
          {/* Garis dekorasi hijau kecil di bawah judul */}
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* LAYOUT KARTU:
            grid grid-cols-1 = tampilan dasar HP berupa 1 kolom (kartu tersusun ke bawah).
            md:grid-cols-3 = saat dibuka di tablet/PC, otomatis membelah jadi 3 kolom sejajar.
            gap-8 = memberi jarak/spasi antar kartu sebesar 32pixel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* KARTU 1: Administrasi 
              hover:shadow-xl = saat disentuh kursor, bayangan menebal (efek melayang).
              hover:-translate-y-2 = saat disentuh kursor, kartu naik ke atas 8pixel */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 border border-slate-100">
            {/* Pembungkus Icon SVG */}
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Administrasi Online</h3>
            {/* line-clamp-3 = memotong kalimat secara otomatis di baris ke-3 dan memberi tanda (...) jika kepanjangan */}
            <p className="text-slate-600 mb-6 line-clamp-3">
              Urus surat pengantar, keterangan domisili, dan dokumen administrasi lainnya secara cepat tanpa perlu antre di balai desa.
            </p>
            <Link href="/pelayanan" className="text-emerald-600 font-semibold hover:text-emerald-800 flex items-center gap-1">
              Buat Surat <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* KARTU 2: Potensi */}
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

          {/* KARTU 3: Berita */}
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
        {/* Bagian Judul Galeri (flex-col md:flex-row = sejajar ke samping jika di layar lebar) */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-emerald-800">Potret Keindahan Desa</h2>
            <div className="w-16 h-1 bg-emerald-500 mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl">Jelajahi sudut-sudut inspiratif, kegiatan warga, dan pesona alam yang menjadi kebanggaan kita bersama.</p>
          </div>
          {/* shrink-0 = mencegah tombol teks ini tertekan/menyusut ukurannya saat layar mengecil */}
          <Link href="/potensi" className="text-emerald-600 font-medium hover:text-emerald-800 flex items-center gap-1 shrink-0">
            Lihat Semua Foto <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* INDUK BENTO GRID:
            md:grid-cols-4 = membagi area galeri menjadi 4 kolom virtual di PC.
            md:grid-rows-2 = membagi area galeri menjadi 2 baris virtual di PC.
            md:h-[600px] = mengunci tinggi total galeri sebesar 600pixel di layar PC */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* FOTO 1 (BESAR):
              md:col-span-2 = mengambil jatah 2 kolom sekaligus.
              md:row-span-2 = mengambil jatah 2 baris sekaligus. 
              Efeknya: Foto ini menjadi kotak paling besar di sebelah kiri. */}
          <div className="group relative overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 shadow-md hover:shadow-xl transition-all duration-300 h-64 md:h-full">
            {/* fill & object-cover = membuat gambar otomatis penuh memenuhi kotak tanpa merusak rasio foto.
                group-hover:scale-110 = karena induknya bernama "group", saat kotak disentuh, gambar di dalamnya akan otomatis membesar perlahan (efek zoom lembut) */}
            <Image src="/images/sawah.webp" alt="Pemandangan Desa" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            
            {/* Gradasi gelap di bawah foto agar teks judul foto terbaca */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Teks Deskripsi Foto yang Muncul Saat Di-Hover:
                translate-y-4 group-hover:translate-y-0 = teks agak turun di awal, lalu bergeser naik saat di-hover.
                opacity-0 group-hover:opacity-100 = deskripsi disembunyikan, dan baru muncul pelan saat di-hover */}
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">Alam</span>
              <h3 className="text-2xl font-bold text-white mb-2">Area Persawahan Terasering</h3>
              <p className="text-emerald-50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Hamparan hijau yang menjadi sumber utama komoditas agrikultur desa.</p>
            </div>
          </div>

          {/* FOTO 2 (MEMANJANG SAMPING):
              md:col-span-2 = memakan jatah 2 kolom secara horizontal di baris atas sebelah kanan */}
          <div className="group relative overflow-hidden rounded-2xl md:col-span-2 shadow-md hover:shadow-xl transition-all duration-300 h-48 md:h-full">
            <Image src="/images/panenraya.webp" alt="Kegiatan Warga" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white">Festival Panen Raya</h3>
              <p className="text-emerald-50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Tradisi tahunan wujud syukur masyarakat.</p>
            </div>
          </div>

          {/* FOTO 3 (KOTAK KECIL BAWAH KIRI):
              Tidak memakai col-span, artinya otomatis mengambil sisa 1 kolom virtual */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-48 md:h-full">
            <Image src="/images/kerajinan.webp" alt="UMKM" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-bold text-white">Pusat Kerajinan</h3>
            </div>
          </div>

          {/* FOTO 4 (KOTAK KECIL BAWAH KANAN):
              Mengambil jatah sisa 1 kolom virtual paling akhir */}
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
      {/* bg-emerald-50 = latar belakang hijau sangat muda sebagai penutup halaman yang adem.
          border-t = garis pembatas tipis di bagian atas section */}
      <section className="bg-emerald-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-emerald-100">
        {/* grid-cols-2 md:grid-cols-4 = Di HP dibagi 2 kolom (2 baris), di laptop berjejer 4 kolom langsung */}
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
      
      {/* ================= SECTION 5: AGENDA KEGIATAN MENDATANG ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-emerald-800">Agenda Kegiatan Mendatang</h2>
            <div className="w-16 h-1 bg-emerald-500 mt-4 rounded-full"></div>
          </div>
          <Link href="/agenda" className="text-emerald-600 font-semibold hover:text-emerald-800 text-sm">
            Lihat Semua Jadwal &rarr;
          </Link>
        </div>

        <div className="space-y-6">
          {/* Kegiatan 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-center font-bold min-w-[80px] w-full sm:w-auto">
              <span className="block text-2xl leading-none">15</span>
              <span className="text-xs uppercase tracking-wider block mt-1">Juni</span>
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Musyawarah</span>
              <h3 className="text-xl font-bold text-slate-800 mt-2 mb-1">Rapat Koordinasi Pembangunan Desa (Musrenbang)</h3>
              <p className="text-slate-500 text-sm flex items-center gap-4">
                <span>⏰ 09:00 WIB - Selesai</span>
                <span>📍 Balai Pertemuan Utama</span>
              </p>
            </div>
            <button className="text-sm font-semibold border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 py-2 px-5 rounded-xl transition-colors w-full sm:w-auto">Detail</button>
          </div>

    
        </div>
      </section>

    </div>
  );
}