"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

export default function Menu() {
    // buat variabel path
    const path_name = usePathname();
  return (
    //buat menu
    <nav className="mt-5 mx-10 flex flex-col sm:flex-row justify-start text-center">
      <Link
        href="/"
        className={`sm:bg-white md:bg-amber-300 bg-gray-300 hover:bg-red-700 text-red-700 hover:text-white px-[45px] 
        py-2.5 rounded-full cursor-pointer border-2 border-red-700 border sm:w-40 w-full`}
      >
        {path_name}
      </Link>

      <Link
        href="/berita"
        className={`bg-white hover:bg-red-700 text-red-700 hover:text-white px-[45px] 
        py-2.5 rounded-full cursor-pointer border-2 border-red-700 border sm:mx-2.5 sm:my-0 mx-0 my-2.5 sm:w-40 w-full`}
      >
        berita
      </Link>

      <Link
        href="/pelayanan"
        className={`bg-white hover:bg-red-700 text-red-700 hover:text-white px-[45px] 
        py-2.5 rounded-full cursor-pointer border-2 border-red-700 border sm:w-40 w-full`}
      >
        pelayanan
      </Link>
      <Link
        href="/pengaduan"
        className={`bg-white hover:bg-red-700 text-red-700 hover:text-white px-[45px] 
        py-2.5 rounded-full cursor-pointer border-2 border-red-700 border sm:w-40 w-full`}
      >
        pengaduan
      </Link>
      <Link
        href="/potensi"
        className={`bg-white hover:bg-red-700 text-red-700 hover:text-white px-[45px] 
        py-2.5 rounded-full cursor-pointer border-2 border-red-700 border sm:w-40 w-full`}
      >
        potensi
      </Link>
      <Link
        href="/profil"
        className={`bg-white hover:bg-red-700 text-red-700 hover:text-white px-[45px] 
        py-2.5 rounded-full cursor-pointer border-2 border-red-700 border sm:w-40 w-full`}
      >
        profil
      </Link>
    </nav>
  );
}