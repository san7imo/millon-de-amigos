// app/components/About.tsx
'use client'
import { motion } from 'framer-motion'

const stats = [
  { number: '15+', label: 'Años de experiencia' },
  { number: '50K+', label: 'Visitantes felices' },
  { number: '100%', label: 'Satisfacción garantizada' },
  { number: '24/7', label: 'Atención disponible' }
]

const values = [
  {
    title: 'Conexión Natural',
    description: 'Creemos en el poder sanador de la naturaleza y en la importancia de reconectarnos con ella.',
    icon: '🌱'
  },
  {
    title: 'Hospitalidad Auténtica',
    description: 'Cada huésped es parte de nuestra gran familia. Te recibiremos con los brazos abiertos.',
    icon: '🤝'
  },
  {
    title: 'Experiencias Memorables',
    description: 'Nos dedicamos a crear momentos únicos que permanecerán en tu corazón para siempre.',
    icon: '✨'
  }
]

export default function About() {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-mda-green mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-mda-olive/80 leading-relaxed">
              <p>
                <strong className="text-mda-green">Millón de Amigos</strong> nació del sueño de crear un espacio 
                donde las familias, amigos y visitantes pudieran reconectarse con la naturaleza y entre sí, 
                lejos del bullicio de la ciudad.
              </p>
              <p>
                Durante más de una década, hemos sido testigos de miles de sonrisas, celebraciones 
                inolvidables y momentos de paz que nuestros huéspedes han encontrado en este rincón 
                especial de la naturaleza.
              </p>
              <p>
                Ubicados en un entorno privilegiado, ofrecemos la combinación perfecta entre comodidad 
                moderna y belleza natural, creando el ambiente ideal para descansar, celebrar y crear 
                recuerdos que durarán toda la vida.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="#servicios"
                className="btn-primary bg-mda-green text-mda-sand hover:bg-mda-olive transition-colors inline-flex items-center"
              >
                Conoce nuestros servicios
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder image - replace with real image later */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white/20 text-6xl">
                🏞️
              </div>
              {/* Overlay for future real image */}
              <div className="absolute inset-0 bg-gradient-to-t from-mda-green/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-mda-sand/50"
            >
              <div className="text-2xl font-heading text-mda-green font-bold">15+</div>
              <div className="text-sm text-mda-olive/70">Años creando</div>
              <div className="text-sm text-mda-olive/70">experiencias únicas</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-mda-green mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-mda-olive/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-heading text-mda-green mb-4">
            Nuestros Valores
          </h3>
          <p className="text-mda-olive/80 max-w-2xl mx-auto">
            Los principios que nos guían y definen la experiencia que ofrecemos a cada visitante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6 rounded-xl bg-mda-sand/30 hover:bg-mda-sand/50 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-heading font-bold text-mda-green mb-3">
                {value.title}
              </h4>
              <p className="text-mda-olive/80 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}