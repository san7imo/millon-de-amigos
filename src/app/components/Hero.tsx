// app/components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* fondo (usa /public/images/hero.jpg si la colocas) */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero.jpg" 
          alt="Hero Millón de Amigos" 
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* overlay verde sutil */}
        <div className="absolute inset-0 bg-mda-green/75 mix-blend-multiply"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-heading text-mda-sand leading-tight">
          Millón de Amigos
        </h1>
        <p className="mt-4 text-lg md:text-xl text-mda-sand/90">
          Un centro vacacional inmersivo — conecta con la naturaleza, disfruta tranquilo.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a 
            href="#contact" 
            className="btn-primary bg-mda-sand text-mda-olive hover:scale-105 transition-transform"
          >
            Reservar
          </a>
          <a 
            href="#services" 
            className="btn-primary border border-mda-sand text-mda-sand/95 bg-transparent hover:bg-mda-sand/10 transition"
          >
            Ver servicios
          </a>
        </div>
      </motion.div>
    </section>
  )
}