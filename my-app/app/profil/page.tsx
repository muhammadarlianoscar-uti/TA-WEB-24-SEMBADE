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
    </div>
  );
}