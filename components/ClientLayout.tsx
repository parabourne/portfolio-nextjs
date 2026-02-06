"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg text-purple-700">Toğrul Abbasov</h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="#projects" className="hover:text-purple-600">Xidmətlər</a>
          <a href="#skills" className="hover:text-purple-600">Bacarıqlar</a>
          <a href="#contact" className="hover:text-purple-600">Əlaqə</a>
        </nav>

        <a
          href="#contact"
          className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition"
        >
          İşə Başlayaq
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-purple-700">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 flex flex-col items-center gap-6 py-6 text-gray-700">
          <a href="#projects" onClick={() => setOpen(false)}>Xidmətlər</a>
          <a href="#skills" onClick={() => setOpen(false)}>Bacarıqlar</a>
          <a href="#contact" onClick={() => setOpen(false)}>Əlaqə</a>
        </div>
      )}
    </header>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-28 max-w-6xl mx-auto px-6">{children}</main>
      <footer className="mt-40 border-t border-gray-200 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Toğrul Abbasov
      </footer>
    </>
  );
}
