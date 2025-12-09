'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/imgs/logo.svg';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-segoe shadow-xl fixed top-0 left-0 right-0 w-full z-50 bg-green50">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <div className="flex items-center gap-6">
          <Image src={logo} alt="AdaptWrite Logo" width={50} height={50} />
          <h1 className="text-2xl md:text-3xl font-black text-green700">
            AdaptWrite
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#video"
                className="text-green900 hover:text-green700 font-medium transition-colors"
              >
                Vídeo
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="text-green900 hover:text-green700 font-medium transition-colors"
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#design"
                className="text-green900 hover:text-green700 font-medium transition-colors"
              >
                Design Sprint
              </a>
            </li>
            <li>
              <a
                href="#equipe"
                className="text-green900 hover:text-green700 font-medium transition-colors"
              >
                Nossa Equipe
              </a>
            </li>
            <li>
              <a
                href="#prototipos"
                className="text-green900 hover:text-green700 font-medium transition-colors"
              >
                Protótipos
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-green900" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-green50 border-t border-green200">
          <ul className="flex flex-col items-center gap-6 py-8">
            <li>
              <a
                href="#video"
                onClick={toggleMenu}
                className="text-green900 text-lg font-medium"
              >
                Vídeo
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={toggleMenu}
                className="text-green900 text-lg font-medium"
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#design"
                onClick={toggleMenu}
                className="text-green900 text-lg font-medium"
              >
                Design Sprint
              </a>
            </li>
            <li>
              <a
                href="#equipe"
                onClick={toggleMenu}
                className="text-green900 text-lg font-medium"
              >
                Nossa Equipe
              </a>
            </li>
            <li>
              <a
                href="#prototipos"
                onClick={toggleMenu}
                className="text-green900 text-lg font-medium"
              >
                Protótipos
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
