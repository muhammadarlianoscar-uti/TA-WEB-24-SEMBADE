'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HalamanRegister() {
  const router = useRouter();

  // State Form & UI
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    // Validasi Panjang NIK di Frontend
    if (nik.length !== 16) {
      setError('Nomor Induk Kependudukan (NIK) harus tepat 16 digit.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, nik, username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Terjadi kesalahan saat mendaftar.');
        setIsLoading(false);
      } else {
        setSuccess('Registrasi berhasil! Mengalihkan ke halaman masuk...');

        // Reset Form
        setNama('');
        setNik('');
        setUsername('');
        setPassword('');

        // Pindah ke halaman login setelah 2 detik sukses
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      }
    } catch (err) {
      setError('Gagal terhubung ke server. Periksa koneksi internet Anda.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-emerald-950 via-emerald-900 to-slate-900 flex items-center justify-center p-4 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* KARTU REGISTRASI UTAMA */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 p-8 sm:p-10 space-y-6 animate-in fade-in zoom-in-95 duration-300">
        
        {/* LOGO & BRANDING */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl mx-auto shadow-md shadow-emerald-900/20">
            S
          </div>
          <h2 className="text-xl font-black text-slate-800 tracking-tight mt-3">
            Pendaftaran Warga
          </h2>
          <p className="text-xs text-slate-400 font-medium">
            Buat akun resmi untuk mengakses layanan administrasi desa
          </p>
        </div>

        {/* NOTIFIKASI ERROR / SUKSES */}
        {error && (
          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-xs text-rose-800 font-medium">
            <span className="text-sm shrink-0">⚠️</span>
            <p>{error}</p>
          </div>
        )}

        {success && (
          <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-2.5 text-xs text-emerald-800 font-medium">
            <span className="text-sm shrink-0">✅</span>
            <p>{success}</p>
          </div>
        )}

