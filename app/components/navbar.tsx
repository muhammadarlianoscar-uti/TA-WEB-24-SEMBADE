'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import UserDropdown from './UserDropdown'; // Impor komponen dropdown yang sudah kita buat

export default function Navbar() {
  const path_name = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession(); // Ambil data status login dari NextAuth

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Profil', href: '/profil' },
    { name: 'Pelayanan', href: '/pelayanan' },
    { name: 'Potensi', href: '/potensi' },
    { name: 'Berita', href: '/berita' },
  ];

  return (
    <nav className="sticky top-[80px] z-40 bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">

          {/* 📱 SISI KIRI MOBILE: Tombol Hamburger & Kondisi User */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-emerald-400/50 p-2 rounded-md focus:outline-none transition-colors mr-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* 💻 BAGIAN TENGAH: Menu Navigasi Desktop */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-2">
            {navLinks.map((link) => {
              const isActive = path_name === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-700/80 text-white shadow-inner'
                      : 'text-emerald-50 hover:bg-emerald-400/30 hover:text-white' 
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* 💻 SISI KANAN DESKTOP: Menampilkan Dropdown User jika Sudah Login */}
          <div className="hidden md:flex items-center justify-end w-48 ml-auto">
            {session ? (
              <UserDropdown />
            ) : (
              <Link 
                href="/login" 
                className="px-4 py-1.5 border border-emerald-300/40 text-xs font-bold bg-white text-emerald-700 hover:bg-emerald-50 rounded-full shadow-sm transition-all active:scale-95"
              >
                Masuk Akun
              </Link>
            )}
          </div>

          {/* 📱 TRIGGER TAMPILAN PROFIL KANAN PADA VERSI MOBILE */}
          <div className="md:hidden flex items-center">
            {session && <UserDropdown />}
          </div>

        </div>
      </div>

      {/* 📱 DROP DOWN MENU MOBILE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-emerald-600 shadow-inner">
          {navLinks.map((link) => {
            const isActive = path_name === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-800 text-white'
                    : 'text-emerald-50 hover:bg-emerald-500 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Jika Belum Login pada Tampilan Mobile, Tombol Login Muncul di List Paling Bawah */}
          {!session && (
            <div className="pt-2 border-t border-emerald-500/40">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block text-center px-3 py-2.5 rounded-md text-base font-bold bg-white text-emerald-700 shadow-sm"
              >
                Masuk Akun
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}