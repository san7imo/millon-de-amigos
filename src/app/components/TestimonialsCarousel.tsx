// app/components/TestimonialsCarousel.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Camila R.",
    text: "Desde que conocí el proyecto, me enamoré de la idea: un lugar para desconectar y compartir en familia. ¡Estoy deseando verlo hecho realidad!",
    role: "Afiliada fundadora"
  },
  {
    name: "Andrés L.",
    text: "La propuesta de Millón de Amigos transmite calidez y visión. Se nota el cariño con el que están diseñando cada detalle.",
    role: "Miembro en proceso de afiliación"
  },
  {
    name: "Laura G.",
    text: "Me emociona saber que habrá un espacio así, enfocado en naturaleza, bienestar y familia. Un concepto que hacía falta.",
    role: "Interesada en el club"
  },
  {
    name: "Felipe M.",
    text: "Lo que más me atrae es la combinación entre modernidad y entorno natural. Estoy convencido de que será un proyecto referente.",
    role: "Futuro afiliado"
  },
  {
    name: "María F.",
    text: "Desde el primer momento sentí que este proyecto representa algo más que un club: es una forma de vida, donde la naturaleza y la familia vuelven a ser prioridad.",
    role: "Empresaria local"
  },
  {
    name: "Ricardo S.",
    text: "Me emociona ver cómo cada detalle del diseño busca equilibrio con el entorno. Millón de Amigos está construyendo algo más que infraestructura: está creando comunidad.",
    role: "Arquitecto colaborador"
  },
  {
    name: "Lucía P.",
    text: "Decidí ser parte porque creo en la visión. Sé que cuando abra sus puertas será un lugar para desconectar del mundo y reconectar con uno mismo.",
    role: "Afiliada fundadora"
  },
  {
    name: "Carlos T.",
    text: "Lo que me convenció fue la transparencia del equipo y la proyección a futuro. Se nota que están creando algo sostenible, con propósito y alma.",
    role: "Inversionista y aliado"
  },
  {
    name: "Sofía R.",
    text: "Para mí, lo más bonito es pensar que mis hijos crecerán en contacto con la naturaleza. Es un proyecto con corazón, hecho para compartir momentos reales.",
    role: "Madre de familia"
  },
  {
    name: "Javier A.",
    text: "Veo en Millón de Amigos una oportunidad para tener un espacio de equilibrio: naturaleza, deporte y descanso. Es el tipo de lugar que todos necesitamos.",
    role: "Profesional joven"
  },
  {
    name: "Elena M.",
    text: "El concepto me fascinó desde el inicio. No es solo un club, es una experiencia que promueve bienestar físico, mental y emocional.",
    role: "Emprendedora de bienestar"
  },
  {
    name: "Tomás G.",
    text: "Me uní al proyecto porque confío en su visión humana. Me inspira ver que se construye paso a paso, con valores sólidos y una misión clara.",
    role: "Futuro afiliado"
  }
]

export default function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0) // Mantener el valor de x entre renders

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationFrame: number
    const speed = 0.5

    const animate = () => {
      if (!isPaused && carousel) {
        xRef.current -= speed
        if (Math.abs(xRef.current) >= carousel.scrollWidth / 2) {
          xRef.current = 0
        }
        carousel.style.transform = `translateX(${xRef.current}px)`
      }
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused])

  return (
    <section id='inspirando-juntos' className="py-16 bg-white overflow-hidden">
      <h2 className="text-5xl font-glowen font-semibold text-center text-mda-green mb-12">
        Historias que comienzan con un sueño
      </h2>
      <p className='text-center text-mda-green mb-2 mx-auto px-6'>
        Opiniones de personas que ya forman parte del proceso de desarrollo y afiliación del proyecto.
      </p>
      <p className='text-center text-mda-green mb-10 mx-auto px-6'>
        Las voces de quienes ya creen en este sueño nos inspiran a seguir construyendo un espacio donde la naturaleza, el bienestar y la comunidad se encuentran en armonía.
      </p>

      <div
        className="relative  flex space-x-6 px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={carouselRef} className="flex mb-20 space-x-6">
          {[...testimonials, ...testimonials].map((t, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="min-w-[320px] max-w-sm flex-shrink-0 bg-mda-green/10 border border-gray-200 rounded-2xl shadow-md p-6 relative"
            >
              <span className="absolute -top-4 -left-2 text-6xl text-mda-green opacity-20 select-none">
                
              </span>
              <p className="text-lg text-gray-700 italic mb-6 relative z-10">
                {t.text}
              </p>
              <div className="flex items-center space-x-4">
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
                <p className='text-center text-mda-green mb-10 mx-auto px-6'>
          Ellos también creen en este sueño que estamos construyendo juntos.
          </p>
    </section>
  )
}