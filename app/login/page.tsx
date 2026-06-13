'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        username: formData.username,
        password: formData.password,
        redirect: false, // Mencegah reload halaman otomatis
      });

      if (res?.error) {
        setError('Username atau password salah!');
      } else {
        router.push('/home'); // Alihkan ke beranda jika login sukses
        router.refresh();
      }
    } catch (err) {
      setError('Terjadi kesalahan sistem. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-8 text-slate-700">
        
        {/* LOGO & JUDUL */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-emerald-700 tracking-wide">🏠 SMARTDES</h2>
          <p className="text-xs text-slate-400 mt-1">Silakan masuk untuk mengakses layanan digital desa</p>
        </div>

        {/* NOTIFIKASI ERROR */}
        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-medium">
            ⚠️ {error}
          </div>
        )}

        {/* FORM LOGIN */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-500 mb-1">Username Akun</label>
            <input
              type="text"
              required
              disabled={isLoading}
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none text-slate-800 font-medium"
              placeholder="Masukkan username Anda"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-500 mb-1">Kata Sandi</label>
            <input
              type="password"
              required
              disabled={isLoading}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none text-slate-800 font-medium"
              placeholder="••••••••"
            />
          </div>

          {/* 🔘 TOMBOL SUBMIT */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold transition-all disabled:opacity-50 active:scale-[0.99] tracking-wider mt-2"
          >
            {isLoading ? 'MEMPROSES MASUK...' : 'MASUK AKUN SEKARANG ↗'}
          </button>
        </form>

        {/* SEPARATOR BORDER */}
        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="flex-shrink mx-4 text-slate-300 font-bold text-[10px] tracking-widest">ATAU</span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>

        {/* LINK NAVIGASI DAFTAR */}
        <div className="text-center">
          <p className="text-slate-400 text-xs">
            Belum terdaftar sebagai warga digital?{' '}
            <Link href="login/register" className="text-emerald-600 hover:text-emerald-700 font-bold underline transition-colors">
              Buat Akun Baru
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}