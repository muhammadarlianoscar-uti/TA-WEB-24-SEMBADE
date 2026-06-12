'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Tombol tidak akan muncul jika user berada di halaman utama (/)
  if (pathname === '/') return null;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-4">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[#84a800] hover:text-[#0f0092] font-semibold transition-all group"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200 group-hover:bg-green-600 group-hover:shadow-md">
          ←
        </span>
        Kembali
      </button>
    </div>
  );
}