"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HalamanRegister() {
  const router = useRouter();

  const [form, setForm] = useState({
    nama: "",
    nik: "",
    username: "",
    password: "",
    konfirmasiPassword: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", text: "" });

    // Validasi Panjang NIK di Frontend
    if (form.nik.length !== 16) {
      setStatus({
        type: "error",
        text: "Nomor Induk Kependudukan (NIK) harus tepat 16 digit.",
      });
      setIsLoading(false);
      return;
    }

    // Validasi Kecocokan Password
    if (form.password !== form.konfirmasiPassword) {
      setStatus({
        type: "error",
        text: "Konfirmasi kata sandi baru tidak sesuai.",
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: form.nama,
          nik: form.nik,
          username: form.username.trim(),
          password: form.password,
        }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Gagal melakukan registrasi");

      setStatus({
        type: "success",
        text: "Akun kependudukan Anda berhasil dibuat! Mengalihkan ke login...",
      });
      setTimeout(() => router.push("/login"), 2000);
    } catch (err: any) {
      setStatus({ type: "error", text: err.message });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-emerald-950 via-emerald-900 to-slate-900 flex items-center justify-center p-4 font-sans selection:bg-emerald-500 selection:text-white">
      <div className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 p-8 sm:p-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
        
        {/* BRANDING LOGO & JUDUL */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mx-auto shadow-md shadow-emerald-900/20">
            S
          </div>
          <h2 className="text-xl font-black text-slate-800 tracking-tight mt-3">
            Form Registrasi Warga
          </h2>
          <p className="text-xs text-slate-400 font-medium max-w-sm mx-auto">
            Daftarkan NIK resmi Anda untuk mengakses sistem administrasi digital Sembade Desa
          </p>
        </div>

        {/* NOTIFIKASI */}
        {status.text && (
          <div
            className={`p-3.5 rounded-2xl text-xs font-medium border flex items-start gap-2.5 ${
              status.type === "success" 
                ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                : "bg-rose-50 border-rose-200 text-rose-800"
            }`}
          >
            <span className="text-sm shrink-0">{status.type === "success" ? "✅" : "⚠️"}</span>
            <p>{status.text}</p>
          </div>
        )}

        {/* FORM INPUT UTAMA */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-500 mb-1.5 uppercase text-[10px] tracking-wide">
              Nama Lengkap Sesuai KTP
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-slate-400 text-sm">📝</span>
              <input
                type="text"
                required
                placeholder="Contoh: Hendra Wijaya"
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none transition-all font-medium text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block font-bold text-slate-500 uppercase text-[10px] tracking-wide">
                  16 Digit NIK
                </label>
                <span className={`font-bold text-[9px] tracking-wider ${form.nik.length === 16 ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {form.nik.length}/16 DIGIT
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-slate-400 text-sm">🪪</span>
                <input
                  type="text"
                  required
                  maxLength={16}
                  placeholder="Masukkan NIK Anda"
                  value={form.nik}
                  onChange={(e) =>
                    setForm({ ...form, nik: e.target.value.replace(/\D/g, "") })
                  }
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none transition-all font-mono font-medium text-slate-800 placeholder-slate-400"
                />
              </div>
            </div>
            <div>
              <label className="block font-bold text-slate-500 mb-1.5 uppercase text-[10px] tracking-wide">
                Username Pilihan
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-slate-400 text-sm">👤</span>
                <input
                  type="text"
                  required
                  placeholder="Contoh: hendra_w"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none transition-all font-medium text-slate-800 placeholder-slate-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-500 mb-1.5 uppercase text-[10px] tracking-wide">
                Kata Sandi Akun
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-slate-400 text-sm">🔒</span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                />
              </div>
            </div>
            <div>
              <label className="block font-bold text-slate-500 mb-1.5 uppercase text-[10px] tracking-wide">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-slate-400 text-sm">🔒</span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={form.konfirmasiPassword}
                  onChange={(e) =>
                    setForm({ ...form, konfirmasiPassword: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold py-3.5 rounded-2xl shadow-lg shadow-emerald-900/20 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed tracking-wider mt-2"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>MEMPROSES PENDAFTARAN...</span>
              </div>
            ) : (
              "DAFTAR AKUN SEKARANG ↗"
            )}
          </button>
        </form>

        {/* RE-NAVIGASI FOOTER */}
        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="flex-shrink mx-4 text-[10px] text-slate-300 font-bold uppercase tracking-widest">Sudah Terdaftar</span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>

        <div className="text-center text-xs">
          <p className="text-slate-400 font-medium">
            Sudah memiliki akun resmi warga?{" "}
            <Link
              href="/login"
              className="font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 px-2.5 py-1 rounded-lg"
            >
              Masuk Aplikasi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}