// app/components/Services.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Piscina & Relax',
    description: 'Disfruta de nuestras piscinas con agua cristalina, zonas de descanso y áreas verdes para relajarte completamente.',
    features: ['Piscina principal', 'Zona infantil', 'Jacuzzi', 'Áreas de sombra'],
    icon: '🏊‍♂️'
  },
  {
    id: 2,
    title: 'Actividades Familiares',
    description: 'Espacios diseñados para que toda la familia disfrute: desde los más pequeños hasta los abuelos.',
    features: ['Parque infantil', 'Canchas deportivas', 'Zona de juegos', 'Senderos naturales'],
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 3,
    title: 'Eventos & Retiros',
    description: 'El lugar perfecto para celebraciones especiales, reuniones corporativas y retiros espirituales.',
    features: ['Salones de eventos', 'Catering disponible', 'Hospedaje', 'Espacios al aire libre'],
    icon: '🎉'
  },
  {
    id: 4,
    title: 'Granja & Naturaleza',
    description: 'Conecta con la naturaleza en nuestra granja interactiva y senderos ecológicos.',
    features: ['Animales de granja', 'Huerto orgánico', 'Senderos naturales', 'Avistamiento de aves'],
    icon: '🌿'
  },
  {
    id: 5,
    title: 'Deportes & Aventura',
    description: 'Para los más aventureros: actividades deportivas y de aventura en contacto con la naturaleza.',
    features: ['Canopy', 'Escalada', 'Ciclomontañismo', 'Deportes acuáticos'],
    icon: '🏃‍♂️'
  },
  {
    id: 6,
    title: 'Spa & Bienestar',
    description: 'Renueva tu energía con nuestros tratamientos de relajación y terapias naturales.',
    features: ['Masajes terapéuticos', 'Terapias naturales', 'Yoga y meditación', 'Sauna'],
    icon: '🧘‍♀️'
  }
]

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-mda-sand to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-mda-green mb-6">
            Nuestras Experiencias
          </h2>
          <p className="text-lg text-mda-olive/80 max-w-3xl mx-auto">
            Descubre todo lo que tenemos preparado para hacer de tu visita una experiencia inolvidable. 
            Desde relajación total hasta aventuras emocionantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'easeOut' 
              }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className={`
                p-8 rounded-2xl shadow-lg transition-all duration-300 h-full
                ${hoveredCard === service.id 
                  ? 'bg-mda-green shadow-2xl transform -translate-y-2' 
                  : 'bg-mda-green backdrop-blur-sm shadow-md'
                }
              `}>
      

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-mda-sand mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-mda-sand mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-mda-sand">
                      <span className="w-2 h-2 bg-mda-sand rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                          {/* CTA */}
                <div className='flex justify-end'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" btn-primary bg-mda-sand text-mda-green hover:bg-mda-olive transition-colors"
                >
                  Más información
                </motion.button>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-mda-green rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-heading text-mda-sand mb-4">
              ¿Listo para vivir la experiencia?
            </h3>
            <p className="text-mda-sand/90 mb-8 max-w-2xl mx-auto">
              Reserva ahora y descubre por qué somos el destino favorito para descansar, 
              celebrar y conectar con la naturaleza.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-mda-sand text-mda-green hover:bg-mda-sand/90 font-bold text-base px-4 py-3"
            >
              Reservar Ahora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}