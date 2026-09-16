import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Kernel School" className="h-8 object-contain" />
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-xl tracking-wide text-kernel-black">KERNEL</span>
          <span className="font-display font-bold text-xl tracking-wide text-kernel-black">SCHOOL</span>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-kernel-black">
        <a href="#programs" className="hover:text-kernel-blue transition-colors">Programs</a>
        <a href="#approach" className="hover:text-kernel-blue transition-colors">Approach</a>
        <a href="#campus" className="hover:text-kernel-blue transition-colors">Campus</a>
        <a href="#resources" className="hover:text-kernel-blue transition-colors">Resources</a>
        <a href="#about" className="hover:text-kernel-blue transition-colors">About</a>
      </div>

      {/* CTA & Mobile Toggle */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="bg-kernel-blue text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors">
          Join Waitlist
        </button>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 text-kernel-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-6 md:hidden z-50">
          <a href="#programs" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-kernel-black hover:text-kernel-blue transition-colors">Programs</a>
          <a href="#approach" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-kernel-black hover:text-kernel-blue transition-colors">Approach</a>
          <a href="#campus" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-kernel-black hover:text-kernel-blue transition-colors">Campus</a>
          <a href="#resources" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-kernel-black hover:text-kernel-blue transition-colors">Resources</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-kernel-black hover:text-kernel-blue transition-colors">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
