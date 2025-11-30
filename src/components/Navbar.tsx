"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            {/* Logo placeholder - Aquí puedes agregar tu logo */}
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              SIASIS
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-purple-600 transition">
              Inicio
            </Link>
            <Link href="#caracteristicas" className="text-gray-700 hover:text-purple-600 transition">
              Características
            </Link>
            <Link href="#beneficios" className="text-gray-700 hover:text-purple-600 transition">
              Beneficios
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-purple-600 transition">
              Contacto
            </Link>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link 
              href="#inicio" 
              className="block text-gray-700 hover:text-purple-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="#caracteristicas" 
              className="block text-gray-700 hover:text-purple-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </Link>
            <Link 
              href="#beneficios" 
              className="block text-gray-700 hover:text-purple-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </Link>
            <Link 
              href="#contacto" 
              className="block text-gray-700 hover:text-purple-600 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
