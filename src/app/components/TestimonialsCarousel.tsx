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
      <h2 className="text-3xl font-bold text-center text-mda-green mb-12">
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
              whileHover={{ scale: 1.03 }}
              className="min-w-[320px] max-w-sm flex-shrink-0 bg-mda-green/10 border border-gray-200 rounded-2xl shadow-md p-6 relative"
            >
              {/* Comillas decorativas */}
              <span className="absolute -top-4 -left-2 text-6xl text-mda-green opacity-20 select-none">
                “
              </span>

              {/* Texto del testimonio */}
              <p className="text-lg text-gray-700 italic mb-6 relative z-10">
                “{t.text}”
              </p>

              {/* Info del autor */}
              <div className="flex items-center space-x-4">
                {/* Avatar circular (inicial del nombre) */}
                <div className="w-12 h-12 rounded-full bg-mda-green/20 flex items-center justify-center text-mda-green font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
