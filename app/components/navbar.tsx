'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path_name = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Profil', href: '/profil' },
    { name: 'Pelayanan', href: '/pelayanan' },
    { name: 'Potensi', href: '/potensi' },
    { name: 'Berita', href: '/berita' },
  ];

  return (
    <nav className="sticky top-[80px] z-50 bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">


          {/* Bagian Tengah: Menu Desktop */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-2">
            {navLinks.map((link) => {
              const isActive = path_name === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive
                      // 2. Warna saat menu sedang aktif (Hijau gelap)
                      ? 'bg-emerald-700/80 text-white shadow-inner'
                      // 3. Warna default dan hover (Hijau transparan elegan)
                      : 'text-emerald-50 hover:bg-emerald-400/30 hover:text-white' 
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-emerald-400/50 p-2 rounded-md focus:outline-none transition-colors"
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

          {/* Spacer kanan (Menyeimbangkan logo di kiri agar posisi tengah absolut tidak bergeser) */}
          <div className="hidden md:block w-24"></div>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* 4. Background menu dropdown mobile */}
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
                    // 5. Warna menu mobile aktif vs tidak aktif
                    ? 'bg-emerald-800 text-white'
                    : 'text-emerald-50 hover:bg-emerald-500 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}