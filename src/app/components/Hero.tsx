// app/components/Hero.tsx
'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/videofondohero.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradiente para mejorar legibilidad */}
        <div className="absolute inset-0 gradient-green opacity-60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-4xl mb-16"
      >        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-mda-sand/95 mb-8 text-shadow-light font-light"
        >
          Tu centro vacacional en la naturaleza — donde cada momento se convierte en un recuerdo inolvidable
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="#servicios" 
            className="btn-primary rounded-lg border-2 border-mda-sand text-mda-sand bg-transparent hover:bg-mda-sand hover:text-mda-olive text-lg px-6 py-2 font-semibold"
          >
            Reservar Ahora
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
