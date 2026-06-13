'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

export default function UserDropdown() {
  const { data: session, update: updateSession } = useSession();
  const router = useRouter();
  
  // State UI Controls
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);
  const [isOpenPasswordModal, setIsOpenPasswordModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // State Form Ubah Profil
  const [profileForm, setProfileForm] = useState({
    nama: '',
    email: '',
    noTelepon: '',
    alamat: ''
  });

  // State Form Ganti Password
  const [passwordForm, setPasswordForm] = useState({
    passwordLama: '',
    passwordBaru: '',
    konfirmasiPasswordBaru: ''
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ambil data profil paling mutakhir dari session/database
  useEffect(() => {
    if (session?.user) {
      setProfileForm({
        nama: session.user.name || '',
        email: session.user.email || '',
        noTelepon: (session.user as any).noTelepon || '',
        alamat: (session.user as any).alamat || ''
      });
    }
  }, [session]);

  // Auto-close dropdown ketika klik di luar area komponen
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpenDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!session?.user) return null;

  const user = session.user;
  const inisialHuruf = profileForm.nama ? profileForm.nama.charAt(0).toUpperCase() : 'U';

  // Handler Kirim Perubahan Profil Ke Database
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const res = await fetch('/api/user/update-profil', { // Disinkronkan ke rute update-profil
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileForm)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Terjadi kesalahan');

      // Update session client-side secara real-time tanpa refresh halaman
      await updateSession({
        ...session,
        user: {
          ...session.user,
          name: profileForm.nama,
          email: profileForm.email,
          noTelepon: profileForm.noTelepon,
          alamat: profileForm.alamat
        }
      });

      setMessage({ type: 'success', text: 'Profil berhasil diperbarui!' });
      setTimeout(() => {
        setIsOpenProfileModal(false);
        setMessage({ type: '', text: '' });
      }, 1500);
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  // Handler Kirim Password Baru
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    if (passwordForm.passwordBaru !== passwordForm.konfirmasiPasswordBaru) {
      setMessage({ type: 'error', text: 'Konfirmasi password baru tidak cocok!' });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/user/ubah-password', { // Disinkronkan ke rute ubah-password
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passwordLama: passwordForm.passwordLama,
          passwordBaru: passwordForm.passwordBaru
        })
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Gagal mengubah password');

      setMessage({ type: 'success', text: 'Password berhasil diubah!' });
      setPasswordForm({ passwordLama: '', passwordBaru: '', konfirmasiPasswordBaru: '' });
      setTimeout(() => {
        setIsOpenPasswordModal(false);
        setMessage({ type: '', text: '' });
      }, 1500);
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  // Helper untuk menutup modal dengan aman dan membersihkan pesan error
  const closeModals = () => {
    setIsOpenProfileModal(false);
    setIsOpenPasswordModal(false);
    setMessage({ type: '', text: '' });
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* 🔘 TRIGGER BUTTON (NAVBAR VIEW) */}
      <button
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className={`flex items-center gap-2.5 p-1.5 pr-3.5 rounded-full text-white transition-all duration-200 border text-xs font-semibold shadow-sm focus:outline-none ${
          isOpenDropdown
            ? 'bg-emerald-800 border-emerald-400/40 shadow-inner scale-95'
            : 'bg-emerald-700/30 hover:bg-emerald-700/60 border-emerald-400/20 active:scale-95'
        }`}
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-white to-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xs shadow-md shrink-0">
          {inisialHuruf}
        </div>
        <span className="max-w-[85px] sm:max-w-[120px] truncate tracking-wide">
          {profileForm.nama}
        </span>
        <svg
          className={`w-3 h-3 text-emerald-200/80 transition-transform duration-300 ${isOpenDropdown ? 'rotate-180 text-white' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* 🪟 DROPDOWN MENU BOX */}
      {isOpenDropdown && (
        <div className="absolute right-0 mt-3 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-100/80 p-3.5 z-50 text-slate-800 origin-top-right transition-all animate-in fade-in slide-in-from-top-2 duration-150">
          {/* HEADER DATA IDENTITAS */}
          <div className="flex items-center gap-3 p-2.5 bg-slate-50/70 rounded-xl border border-slate-100 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 font-extrabold text-sm flex items-center justify-center border border-emerald-200/50 shadow-sm shrink-0">
              {inisialHuruf}
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-xs text-slate-800 truncate tracking-wide">{profileForm.nama}</h4>
              <p className="text-[10px] font-mono text-slate-400 tracking-tight mt-0.5">NIK {(user as any).nik}</p>
            </div>
          </div>

          {/* LINK NAVIGASI & ACTION MODALS */}
          <div className="space-y-1">
            <Link 
              href="/pelayanan/riwayat"
              onClick={() => setIsOpenDropdown(false)}
              className="w-full flex items-center gap-3 text-left text-xs font-semibold p-2.5 text-slate-600 hover:bg-slate-50 hover:text-emerald-700 rounded-xl transition-all"
            >
              <span>📋</span> <span className="flex-1">Riwayat Pengajuan</span>
            </Link>

            <button
              onClick={() => { setIsOpenProfileModal(true); setIsOpenDropdown(false); setMessage({ type: '', text: '' }); }}
              className="w-full flex items-center gap-3 text-left text-xs font-semibold p-2.5 text-slate-600 hover:bg-slate-50 hover:text-emerald-700 rounded-xl transition-all"
            >
              <span>👤</span> <span className="flex-1">Ubah Data Pribadi</span>
            </button>

            <button
              onClick={() => { setIsOpenPasswordModal(true); setIsOpenDropdown(false); setMessage({ type: '', text: '' }); }}
              className="w-full flex items-center gap-3 text-left text-xs font-semibold p-2.5 text-slate-600 hover:bg-slate-50 hover:text-emerald-700 rounded-xl transition-all"
            >
              <span>🔒</span> <span className="flex-1">Ganti Password</span>
            </button>
          </div>

          <div className="my-2 border-t border-slate-100"></div>

          {/* LOGOUT SESSION */}
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-full flex items-center justify-center gap-2 bg-rose-50/60 hover:bg-rose-50 text-rose-600 hover:text-rose-700 font-bold text-xs py-2.5 rounded-xl border border-rose-100/50 transition-all active:scale-[0.98]"
          >
            <span>🚪</span> Keluar Sesi
          </button>
        </div>
      )}

      {/* 👤 MODAL POPUP: UBAH DATA PRIBADI */}
      {isOpenProfileModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-slate-700 animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-black text-xs text-slate-800 uppercase tracking-wide">👤 Kelola Formulir Data Pribadi</h3>
              <button onClick={closeModals} className="text-slate-400 hover:text-slate-600 font-bold text-sm">✕</button>
            </div>
            <form onSubmit={handleUpdateProfile} className="p-6 space-y-4 text-xs">
              {message.text && (
                <div className={`p-3 rounded-xl font-medium ${message.type === 'success' ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-rose-50 border border-rose-200 text-rose-800'}`}>
                  {message.text}
                </div>
              )}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Nomor Induk Kependudukan (NIK)</label>
                  <input type="text" value={(user as any).nik} disabled className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-400 font-mono focus:outline-none cursor-not-allowed" />
                </div>
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Username Akun</label>
                  <input type="text" value={(user as any).username} disabled className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-400 font-mono focus:outline-none cursor-not-allowed" />
                </div>
              </div>
              <div>
                <label className="block font-bold text-slate-500 mb-1">Nama Lengkap Pemohon (Wajib)</label>
                <input type="text" required value={profileForm.nama} onChange={(e) => setProfileForm({...profileForm, nama: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none font-semibold text-slate-800" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Alamat Email (Opsional)</label>
                  <input type="email" value={profileForm.email} onChange={(e) => setProfileForm({...profileForm, email: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-slate-500 mb-1">No Telepon/WhatsApp (Opsional)</label>
                  <input type="text" value={profileForm.noTelepon} onChange={(e) => setProfileForm({...profileForm, noTelepon: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block font-bold text-slate-500 mb-1">Alamat Domisili Lengkap (Opsional)</label>
                <textarea rows={2} value={profileForm.alamat} onChange={(e) => setProfileForm({...profileForm, alamat: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
              </div>
              <div className="flex gap-2 justify-end pt-2">
                <button type="button" onClick={closeModals} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold transition-all">Batal</button>
                <button type="submit" disabled={isLoading} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all disabled:opacity-50">
                  {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 🔒 MODAL POPUP: GANTI PASSWORD */}
      {isOpenPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-slate-700 animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-black text-xs text-slate-800 uppercase tracking-wide">🔒 Ganti Kata Sandi</h3>
              <button onClick={closeModals} className="text-slate-400 hover:text-slate-600 font-bold text-sm">✕</button>
            </div>
            <form onSubmit={handleChangePassword} className="p-6 space-y-4 text-xs">
              {message.text && (
                <div className={`p-3 rounded-xl font-medium ${message.type === 'success' ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-rose-50 border border-rose-200 text-rose-800'}`}>
                  {message.text}
                </div>
              )}
              <div>
                <label className="block font-bold text-slate-500 mb-1">Kata Sandi Saat Ini</label>
                <input type="password" required value={passwordForm.passwordLama} onChange={(e) => setPasswordForm({...passwordForm, passwordLama: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold text-slate-500 mb-1">Kata Sandi Baru</label>
                <input type="password" required value={passwordForm.passwordBaru} onChange={(e) => setPasswordForm({...passwordForm, passwordBaru: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold text-slate-500 mb-1">Konfirmasi Kata Sandi Baru</label>
                <input type="password" required value={passwordForm.konfirmasiPasswordBaru} onChange={(e) => setPasswordForm({...passwordForm, konfirmasiPasswordBaru: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none" />
              </div>
              <div className="flex gap-2 justify-end pt-2">
                <button type="button" onClick={closeModals} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold transition-all">Batal</button>
                <button type="submit" disabled={isLoading} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all disabled:opacity-50">
                  {isLoading ? 'Memproses...' : 'Ubah Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}