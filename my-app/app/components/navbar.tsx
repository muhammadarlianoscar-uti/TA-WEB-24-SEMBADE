"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

export default function Menu() {
    // buat variabel path
    const path_name = usePathname();
  return (
    // NAVBAR 
        <nav className="bg-green-400 p-4 flex gap-4 text-white relative z-50">
          <Link href="/home">Home</Link>
          <Link href="/profil">Profil</Link>
          <Link href="/pelayanan">Pelayanan</Link>
          <Link href="/potensi">Potensi</Link>
          <Link href="/berita">Berita</Link>
        </nav>
  );
}