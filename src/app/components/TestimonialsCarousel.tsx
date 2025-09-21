// app/components/TestimonialsCarousel.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: "Camila R.", text: "Un lugar mágico, rodeado de naturaleza y tranquilidad. Fue el descanso perfecto.", role: "Visitante de Madrid" },
  { name: "Andrés L.", text: "La atención del personal es increíble, cada detalle estuvo pensado para que nos sintiéramos en casa.", role: "Huésped en familia" },
  { name: "Laura G.", text: "Me encantó la experiencia, desde la comida hasta las caminatas ecológicas. ¡Volveré pronto!", role: "Huesped frecuente" },
  { name: "Felipe M.", text: "Pasamos un fin de semana inolvidable, los niños disfrutaron muchísimo en la piscina y áreas verdes.", role: "Papá viajero" },
  { name: "Mariana S.", text: "Un lugar que combina naturaleza y confort. Lo recomiendo 100%.", role: "Visitante internacional" },
  { name: "Julián P.", text: "El sitio perfecto para desconectarse del ruido de la ciudad y reconectar con uno mismo.", role: "Escapada de relax" }
]

export default function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationFrame: number
    let x = 0
    const speed = 0.5 // velocidad del carrusel

    const animate = () => {
      if (!isPaused && carousel) {
        x -= speed
        if (Math.abs(x) >= carousel.scrollWidth / 2) {
          x = 0 // reset para bucle infinito
        }
        carousel.style.transform = `translateX(${x}px)`
      }
      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused])

  return (
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-mda-green mb-10">
        Testimonios de nuestros visitantes
      </h2>

      <div
        className="relative flex space-x-6 px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={carouselRef} className="flex space-x-6">
          {[...testimonials, ...testimonials].map((t, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] max-w-sm flex-shrink-0 bg-mda-green text-white rounded-2xl shadow-lg p-6"
            >
              <p className="text-lg italic mb-4">“{t.text}”</p>
              <h4 className="text-xl font-semibold">{t.name}</h4>
              <p className="text-sm opacity-90">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
