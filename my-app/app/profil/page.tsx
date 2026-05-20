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
    </div>
  );
}