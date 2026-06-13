"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HalamanLupaPassword() {
  const router = useRouter();

  const [form, setForm] = useState({
    nik: "",
    noTelepon: "",
    passwordBaru: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
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

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Gagal mereset sandi");

      setStatus({
        type: "success",
        text: "Reset berhasil! Silakan login menggunakan kata sandi baru Anda.",
      });
      setTimeout(() => router.push("/login"), 2500);
    } catch (err: any) {
      setStatus({ type: "error", text: err.message });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-emerald-950 via-emerald-900 to-slate-900 flex items-center justify-center p-4 font-sans selection:bg-emerald-500 selection:text-white">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 p-8 sm:p-10 space-y-5 animate-in fade-in zoom-in-95 duration-300">
        
        {/* BRANDING & JUDUL */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mx-auto shadow-md shadow-emerald-900/20">
            S
          </div>
          <h2 className="text-xl font-black text-slate-800 tracking-tight mt-3">
            Atur Ulang Sandi
          </h2>
          <p className="text-xs text-slate-400 font-medium">
            Verifikasi identitas NIK dan Nomor Telepon terdaftar untuk memulihkan akses akun Anda
          </p>
        </div>

        {/* NOTIFIKASI STATUS */}
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

        {/* FORM REQUEST */}
        <form onSubmit={handleReset} className="space-y-4 text-xs">
          {/* Kolom NIK */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="block font-bold text-slate-500 uppercase text-[10px] tracking-wide">
                16 Digit NIK Warga
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
                placeholder="Masukkan NIK terdaftar"
                value={form.nik}
                onChange={(e) =>
                  setForm({ ...form, nik: e.target.value.replace(/\D/g, "") })
                }
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none font-mono text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Kolom No Telepon */}
          <div className="space-y-1.5">
            <label className="block font-bold text-slate-500 mb-1.5 uppercase text-[10px] tracking-wide">
              Nomor HP/WhatsApp Resmi
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-slate-400 text-sm">📞</span>
              <input
                type="text"
                required
                placeholder="Contoh: 08123456xxx"
                value={form.noTelepon}
                onChange={(e) => setForm({ ...form, noTelepon: e.target.value.replace(/\D/g, "") })}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Kolom Password Baru */}
          <div className="space-y-1.5 border-t border-slate-100 pt-3">
            <label className="block font-bold text-slate-500 mb-1.5 uppercase text-[10px] tracking-wide">
              Buat Kata Sandi Baru
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-slate-400 text-sm">🔒</span>
              <input
                type="password"
                required
                placeholder="Minimal 6+ Karakter Bebas"
                value={form.passwordBaru}
                onChange={(e) =>
                  setForm({ ...form, passwordBaru: e.target.value })
                }
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* BUTTON SUBMIT */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold py-3.5 rounded-2xl shadow-lg shadow-emerald-900/20 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed tracking-wider mt-2"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>MENYIMPAN SANDI BARU...</span>
              </div>
            ) : (
              "RESET KATA SANDI ↗"
            )}
          </button>
        </form>

        {/* FOOTER LINK BALIK KE LOGIN */}
        <div className="border-t border-slate-100 pt-4 text-center text-xs">
          <Link
            href="/login"
            className="inline-block font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 px-3 py-1.5 rounded-lg"
          >
            ← Kembali Ke Login
          </Link>
        </div>

      </div>
    </div>
  );
}