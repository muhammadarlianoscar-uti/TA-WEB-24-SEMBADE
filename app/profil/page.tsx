import Image from 'next/image';

export default function Profil() {
  return (
    // UTAMA: Pembungkus seluruh halaman profil.
    // bg-[#F1F5F9] = warna latar belakang abu-abu terang khusus (menggunakan kode HEX).
    // selection:bg-emerald-500 selection:text-white = mengubah warna sorotan teks (block text) menjadi hijau emerald dan teks putih saat diblok oleh user.
    // overflow-hidden = memotong komponen anak jika ukurannya melebihi batas layar (mencegah scroll horizontal bocor).
    <div className="relative min-h-screen bg-[#F1F5F9] text-slate-800 selection:bg-emerald-500 selection:text-white pb-24 overflow-hidden z-0">
      
      {/* ================= AMBIENT BACKGROUND ================= */}
      {/* Bagian efek bulatan abstrak (blob) transparan di latar belakang agar web terlihat estetik.
          pointer-events-none = membuat bulatan melayang ini tidak bisa diklik/mengganggu interaksi tombol.
          filter blur-[100px] = membiaskan pinggiran bulatan sejauh 100pixel agar halus seperti asap warna.
          mix-blend-multiply = teknik blending agar warnanya menyatu dengan warna dasar layout. */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Bulatan Hijau Muda di kiri atas */}
        <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        {/* Bulatan Toska di kanan tengah */}
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-teal-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        {/* Bulatan Hijau Terang di kiri bawah */}
        <div className="absolute bottom-[20%] left-[20%] w-[600px] h-[600px] bg-emerald-300/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
      </div>

      {/* ================= SECTION 1: HERO (GLASS HEADER) ================= */}
      {/* Hero section atas dengan kelengkungan di bawah (rounded-b-[3rem]) */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-sm">
        {/* Gambar background balai desa dengan efek zoom awal (scale-105) */}
        <div className="absolute inset-0 z-0 bg-[url('/images/balai.webp')] bg-cover bg-fixed bg-center transform scale-105"></div>
        {/* Overlay gelap 40% + backdrop-blur-[2px] untuk memberikan efek blur kaca tipis di atas gambar latar */}
        <div className="absolute inset-0 z-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        
        {/* Konten teks Hero */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-20 text-center">
          {/* Badge teks melayang kecil (Mengenal Lebih Dekat) */}
          <div className="inline-block mb-6 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <span className="text-emerald-50 text-sm font-medium tracking-widest uppercase">Mengenal Lebih Dekat</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Profil <span className="text-emerald-400">SmartDes</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
            Menelusuri jejak sejarah, visi masa depan, dan dedikasi kami dalam melayani masyarakat desa.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: SEJARAH ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Grid 12 Kolom: Kolom kiri memakan 5 jatah (md:col-span-5), kolom kanan memakan 7 jatah (md:col-span-7) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* SISI KIRI: Foto Sawah Sejarah Desa 
              rounded-t-[10rem] = Desain asimetris, bagian atas melengkung tajam mirip kubah, bagian bawah melengkung standar */}
          <div className="md:col-span-5 relative h-[500px] lg:h-[600px] rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl shadow-emerald-900/20">
            <Image 
              src="/images/sawah.webp" 
              alt="Sejarah Desa" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-1000" // Efek zoom super lambat (1 detik) saat di-hover
            />
          </div>

          {/* SISI KANAN: Teks Narasi Sejarah
              bg-white/40 backdrop-blur-xl = Kotak transparan putih tebal (efek Glassmorphism modern) */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-8 p-10 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Menjaga Tradisi,<br/>Merangkul <span className="text-emerald-600">Inovasi.</span></h2>
              {/* Garis pemisah gradasi, memudar dari hijau ke transparan */}
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full"></div>
            </div>
            
            {/* leading-loose = memberikan spasi jarak antar-baris kalimat yang longgar agar teks sejarah nyaman dibaca */}
            <div className="space-y-6 text-slate-700 font-medium leading-loose text-lg">
              <p>
                Desa SmartDes didirikan pada tahun 1920 oleh para leluhur yang bermata pencaharian sebagai petani tulen. Nama desa ini diambil dari filosofi masyarakat yang selalu mengedepankan kearifan lokal, kerukunan, dan semangat gotong royong yang mengakar kuat.
              </p>
              <p>
                Seiring berjalannya waktu dan pesatnya arus teknologi, kami tidak tinggal diam. Pada tahun 2023, desa kami resmi bertransformasi menjadi desa digital yang cerdas—menyederhanakan birokrasi dan membuka gerbang ekonomi baru tanpa pernah meninggalkan identitas budaya asli kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: VISI & MISI ================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Membagi 2 kolom sejajar: Kiri untuk Visi, Kanan untuk Misi */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* KARTU VISI 
                hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] = saat di-hover, bayangan kartu berubah warna menjadi hijau emerald transparan */}
            <div className="group p-10 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/60 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-500">
              {/* Tempat Emoji Mata (ikon Visi) */}
              <div className="w-14 h-14 bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-white group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Visi Utama</h3>
              {/* font-serif italic = menggunakan font jenis koran/buku jaman dulu yang miring khusus untuk penulisan kutipan Visi resmi */}
              <p className="text-xl text-slate-700 font-serif italic leading-relaxed">
                &quot;Terwujudnya desa mandiri, inovatif, dan sejahtera yang berlandaskan pemanfaatan teknologi tepat guna serta nilai-nilai keimanan yang kokoh.&quot;
              </p>
            </div>

            {/* KARTU MISI */}
            <div className="group p-10 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/60 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-500">
              {/* Tempat Emoji Target (ikon Misi) */}
              <div className="w-14 h-14 bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-white group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Misi Kami</h3>
              {/* List Misi */}
              <ul className="space-y-4 text-slate-700 font-medium text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-emerald-500 mt-1">✦</span>
                  Meningkatkan pelayanan publik berbasis digital yang cepat dan transparan.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-emerald-500 mt-1">✦</span>
                  Memberdayakan UMKM dan potensi ekonomi kreatif warga desa.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-emerald-500 mt-1">✦</span>
                  Menjaga kelestarian lingkungan dan melestarikan budaya lokal warisan leluhur.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: DEMOGRAFI & STATISTIK ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* bg-emerald-900/5 = Background hijau super transparan (hanya 5%).
            shadow-inner = Memberikan efek bayangan di bagian dalam kotak (membuat kotak terlihat melekuk ke dalam lantai web) */}
        <div className="p-10 rounded-3xl bg-emerald-900/5 backdrop-blur-lg border border-white/40 shadow-inner relative overflow-hidden">
          {/* grid-cols-2 md:grid-cols-4 = Membagi data menjadi 2 kolom di HP dan 4 kolom baris di PC */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <h4 className="text-4xl font-extrabold text-emerald-600 mb-2">1.565</h4>
              <p className="text-slate-600 font-medium">Jiwa Penduduk</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold text-emerald-600 mb-2">440</h4>
              <p className="text-slate-600 font-medium">Kepala Keluarga</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold text-emerald-600 mb-2">45</h4>
              <p className="text-slate-600 font-medium">Rukun Tetangga</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold text-emerald-600 mb-2">120+</h4>
              <p className="text-slate-600 font-medium">UMKM Binaan</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: PENGHARGAAN / PRESTASI ================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl font-bold text-slate-900">Prestasi Desa</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Perulangan Data Array (Looping .map) untuk mencetak 3 buah kartu prestasi secara otomatis tanpa menulis kode berulang kali */}
          {[
            { gelar: "Desa Digital Terbaik", tahun: "2024", desc: "Tingkat Provinsi" },
            { gelar: "Desa Mandiri Pangan", tahun: "2023", desc: "Penghargaan Nasional" },
            { gelar: "Inovasi Layanan Publik", tahun: "2023", desc: "Kementerian Desa" },
          ].map((item, index) => (
            // key={index} = wajib di Next.js/React sebagai penanda urutan unik dari hasil looping data
            <div key={index} className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 text-xl">🏆</div>
              <h4 className="font-bold text-slate-800 text-lg">{item.gelar}</h4>
              {/* &bull; = kode HTML untuk mencetak simbol titik bulat (•) tengah sebagai pemisah kata */}
              <p className="text-slate-500 text-sm font-medium mt-1">{item.desc} &bull; {item.tahun}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: STRUKTUR ORGANISASI (PERANGKAT DESA) ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <p className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3 drop-shadow-sm">Dedikasi Untuk Masyarakat</p>
          <h2 className="text-4xl font-bold text-slate-900">Perangkat Desa</h2>
        </div>

        {/* FOTO UTAMA: Kepala Desa (Dibuat terpisah di atas agar posisinya paling tinggi/sentral) */}
        <div className="flex justify-center mb-16 relative z-10">
          <div className="group text-center">
            {/* Bingkai foto bulat besar kades */}
            <div className="w-44 h-44 mx-auto mb-6 rounded-full p-2 bg-white/30 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 relative overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/50">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image src="/images/kades.webp" alt="Kepala Desa" fill className="object-cover transition-all duration-700" />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-1">Budi Santoso</h4>
            <p className="text-emerald-600 font-semibold tracking-wide bg-white/40 backdrop-blur-sm border border-white/50 inline-block px-4 py-1 rounded-full mt-2 shadow-sm">Kepala Desa</p>
          </div>
        </div>

        {/* FOTO BAWAHAN: Barisan Staff Perangkat Desa (Looping 4 orang sejajar) */}
        {/* sm:grid-cols-2 md:grid-cols-4 = di layar HP tegak (1 kolom), di layar HP miring (2 kolom), di PC (4 kolom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 relative z-10">
          {[
            { nama: 'Siti Aminah', jabatan: 'Sekretaris Desa' },
            { nama: 'Ahmad Faisal', jabatan: 'Kaur Keuangan' },
            { nama: 'Dewi Lestari', jabatan: 'Kaur Perencanaan' },
            { nama: 'Rahmat Hidayat', jabatan: 'Kasi Pemerintahan' },
          ].map((item, index) => (
            <div key={index} className="group text-center">
              {/* Bingkai foto staff berbentuk bulat */}
              <div className="w-32 h-32 mx-auto mb-5 rounded-full p-1.5 bg-white/30 backdrop-blur-md shadow-lg shadow-slate-200/20 border border-white/60 relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-white/60">
                {/* Avatar Cadangan Huruf: Mengambil huruf pertama dari nama staff (item.nama.charAt(0)) sebagai pengganti foto jika file gambar tidak dipasang */}
                <div className="w-full h-full rounded-full bg-emerald-50/50 flex items-center justify-center text-emerald-600 font-light text-3xl transition-colors duration-500">
                  {item.nama.charAt(0)}
                </div>
              </div>
              <h4 className="font-bold text-slate-800 text-lg mb-1">{item.nama}</h4>
              <p className="text-slate-600 text-sm font-medium">{item.jabatan}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 7: KONTAK & LOKASI ================= */}
      {/* Bagian penutup berupa kartu besar info alamat balai desa dengan tema warna hijau gelap kontras (bg-emerald-800) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl bg-emerald-800 backdrop-blur-xl shadow-2xl relative overflow-hidden text-center text-white">
          {/* Gambar balai desa samar transparan (opacity-10) di dalam kartu kontak sebagai hiasan latar */}
          <div className="absolute inset-0 z-0 bg-[url('/images/balai.webp')] bg-cover opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Kunjungi Balai Desa Kami</h2>
            <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
              Pintu balai desa kami selalu terbuka untuk masyarakat. Jangan ragu untuk datang jika Anda membutuhkan bantuan pelayanan administrasi atau sekadar berdiskusi.
            </p>
            
            {/* 3 Kotak Detail: Alamat, Jam Kerja, Sosmed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {/* Alamat */}
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="font-semibold text-emerald-300 mb-1">📍 Alamat</p>
                <p>Balinuraga, Kec. Way Panji, Kabupaten Lampung Selatan, Lampung</p>
              </div>
              {/* Jam Operasional (<br/> = perintah ganti baris baru/enter dalam teks HTML) */}
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="font-semibold text-emerald-300 mb-1">⏰ Jam Operasional</p>
                <p>Senin - Jumat<br/>08.00 - 15.00 WIB</p>
              </div>
              {/* Kontak */}
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="font-semibold text-emerald-300 mb-1">📞 Kontak</p>
                <p>WA: 0812-3456-7890<br/>halo@smartdes.id</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}