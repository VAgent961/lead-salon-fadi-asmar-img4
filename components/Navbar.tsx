'use client'

import Link from 'next/link'

interface NavbarProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Navbar({ isMenuOpen, toggleMenu }: NavbarProps) {
  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-heading font-bold text-brand-primary">
            Salon Fadi Asmar
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#hero" className="text-brand-primary hover:text-brand-secondary">
              Home
            </Link>
            <Link href="#about" className="text-brand-primary hover:text-brand-secondary">
              About
            </Link>
            <Link href="#services" className="text-brand-primary hover:text-brand-secondary">
              Services
            </Link>
            <Link href="#gallery" className="text-brand-primary hover:text-brand-secondary">
              Gallery
            </Link>
            <Link href="#location" className="text-brand-primary hover:text-brand-secondary">
              Location
            </Link>
          </div>
          <Link
            href="#location"
            className="bg-brand-secondary text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary active:scale-95"
          >
            Visit us in Chouf
          </Link>
          <button
            className="md:hidden text-brand-primary focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="#hero" className="text-brand-primary hover:text-brand-secondary py-2">
                Home
              </Link>
              <Link href="#about" className="text-brand-primary hover:text-brand-secondary py-2">
                About
              </Link>
              <Link href="#services" className="text-brand-primary hover:text-brand-secondary py-2">
                Services
              </Link>
              <Link href="#gallery" className="text-brand-primary hover:text-brand-secondary py-2">
                Gallery
              </Link>
              <Link href="#location" className="text-brand-primary hover:text-brand-secondary py-2">
                Location
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
