// app/components/Header.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineShoppingBag } from 'react-icons/hi'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-mda-green/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
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
                console.log('Error loading logo:', e)
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          {/* Right Section: Menu + CTA + Store */}
          <div className="flex items-center space-x-4">
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

            {/* Always Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors focus:outline-none focus:ring-0 ${
                isScrolled ? 'text-mda-sand' : 'text-mda-sand'
              }`}
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 py-4 bg-mda-sand/95 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-4">
              {['Inicio', 'Quiénes Somos', 'Experiencias', 'Galería', 'Tienda','Eventos','Blog','Alianzas', 'Contacto'].map((item, index) => {
                const href = index === 0 ? '#' : `#${item.toLowerCase().replace(' ', '-').replace('é', 'e').replace('í', 'i')}`
                return (
                  <a
                    key={item}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-mda-olive hover:text-mda-green font-medium py-2 border-b border-mda-olive/10 last:border-b-0 focus:outline-none focus:ring-0"
                  >
                    {item}
                  </a>
                )
              })}
              {/* CTA also inside mobile */}
<a
  href="#contact"
  onClick={() => setIsMobileMenuOpen(false)}
  className="btn-primary bg-mda-green text-mda-sand text-center mt-4 px-6 py-2 text-sm rounded-lg focus:outline-none focus:ring-0 w-auto self-center"
>
  Reservar Ahora
</a>

            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
