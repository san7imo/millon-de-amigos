// app/components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineShoppingBag } from 'react-icons/hi'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'El Club', href: '/#quienes-somos' },
    { label: 'Eventos & Celebraciones', href: '/#servicios' },
    { label: 'Magazine', href: '/revista' },
    { label: 'Galería', href: '/#galeria' },
    { label: 'Blog', href: '/#blog' },
    { label: 'Tienda', href: '/tienda' },
    { label: 'Inspirando Juntos', href: '/#inspirando-juntos' },
    { label: 'Contacto', href: '/#contacto' },
    { label: 'Alma del proyecto', href: '/alma-proyecto' },

  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled ? 'bg-mda-olive/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Millón de Amigos Logo"
              width={150}
              height={32}
              className="object-contain"
              priority
              onError={(e) => {
                console.error('Error loading logo:', e)
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 relative">
            {/* Store Icon */}
            <a
              href="/tienda"
              className={`p-2 rounded-md transition-colors focus:outline-none focus:ring-0 ${
                isScrolled ? 'text-mda-sand' : 'text-mda-sand'
              }`}
              aria-label="Ir a la tienda"
            >
              <HiOutlineShoppingBag className="w-6 h-6" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-0 ${
                isScrolled ? 'text-mda-sand' : 'text-mda-sand'
              }`}
              aria-label="Abrir menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile Menu (Dropdown) */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  key="mobile-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute top-full right-0 mt-3 py-3 px-4 bg-mda-olive rounded-xl shadow-xl w-max z-[70]"
                >
                  <div className="flex flex-col space-y-2 text-white text-sm font-medium">
                    {menuItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="hover:text-mda-green transition-colors focus:outline-none focus:ring-0"
                      >
                        {item.label}
                      </a>
                    ))}
                    {/* CTA: Reservar Ahora */}
                    <a
                      href="#reserva"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-mda-green text-mda-sand text-center mt-2 px-5 py-2 rounded-lg text-sm font-semibold focus:outline-none focus:ring-0"
                    >
                      Reserva Ahora
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}