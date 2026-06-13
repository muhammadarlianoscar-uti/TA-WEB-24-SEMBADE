'use client';

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import Navbar from "./navbar"; // Memanggil Navbar di dalam lingkup Session

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {/* Struktur Layout Global */}
      <header>
        <div className="header-right">
          <span className="header-title">SmartDes</span>
        </div>
      </header>

      {/* Navbar dijamin aman dari error useSession karena berada di dalam SessionProvider */}
      <Navbar />
    
      <main className="w-full">
        {children}
      </main>
      
      <footer>Copyright &copy; SMARTDES 2026</footer>
    </SessionProvider>
  );
}