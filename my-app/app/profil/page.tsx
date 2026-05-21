import Image from 'next/image';

export default function Profil() {
  return (
    <div className="relative min-h-screen bg-[#F1F5F9] text-slate-800 selection:bg-emerald-500 selection:text-white pb-24 overflow-hidden z-0">
      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-teal-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[600px] h-[600px] bg-emerald-300/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
      </div>

      {/* ================= SECTION 1: HERO (GLASS HEADER) ================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-sm">
        <div className="absolute inset-0 z-0 bg-[url('/images/balai.webp')] bg-cover bg-fixed bg-center transform scale-105"></div>
        <div className="absolute inset-0 z-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-20 text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="md:col-span-5 relative h-[500px] lg:h-[600px] rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl shadow-emerald-900/20">
            <Image 
              src="/images/sawah.webp" 
              alt="Sejarah Desa" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>

          <div className="md:col-span-7 flex flex-col justify-center space-y-8 p-10 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Menjaga Tradisi,<br/>Merangkul <span className="text-emerald-600">Inovasi.</span></h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full"></div>
            </div>
            
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group p-10 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/60 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-500">
              <div className="w-14 h-14 bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-white group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Visi Utama</h3>
             <p className="text-xl text-slate-700 font-serif italic leading-relaxed">
                &quot;Terwujudnya desa mandiri, inovatif, dan sejahtera yang berlandaskan pemanfaatan teknologi tepat guna serta nilai-nilai keimanan yang kokoh.&quot;
              </p>
            </div>

            <div className="group p-10 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/60 hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-500">
              <div className="w-14 h-14 bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-white group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Misi Kami</h3>
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

      {/* ================= SECTION 4: DEMOGRAFI & STATISTIK (BARU) ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-10 rounded-3xl bg-emerald-900/5 backdrop-blur-lg border border-white/40 shadow-inner relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <h4 className="text-4xl font-extrabold text-emerald-600 mb-2">1.565</h4>
              <p className="text-slate-600 font-medium">Jiwa Penduduk</p>
            </div>
           
          </div>
        </div>
      </section>
      
    </div>
  );
}