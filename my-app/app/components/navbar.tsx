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
        className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full border border-green-600 transition"
      >
        {path_name}
      </Link>
    </nav>
  );
}