'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C9A84C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-[#0A1628]">Propaly<span className="text-[#C9A84C]">.</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#properties" className="text-gray-600 hover:text-[#C9A84C] font-medium text-sm">Properties</Link>
            <Link href="#services" className="text-gray-600 hover:text-[#C9A84C] font-medium text-sm">Services</Link>
            <Link href="#about" className="text-gray-600 hover:text-[#C9A84C] font-medium text-sm">About</Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#C9A84C] font-medium text-sm">Contact</Link>
          </div>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-all">
            WhatsApp Us
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-3">
            <Link href="#properties" className="block text-gray-600 py-2">Properties</Link>
            <Link href="#services" className="block text-gray-600 py-2">Services</Link>
            <Link href="#contact" className="block text-gray-600 py-2">Contact</Link>
            <a href="https://wa.me/919999999999" target="_blank" className="block text-center bg-[#25D366] text-white font-semibold py-3 rounded-lg">WhatsApp Us</a>
          </div>
        )}
      </div>
    </nav>
  );
}