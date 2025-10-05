// app/components/About.tsx
'use client'
import { motion } from 'framer-motion'
import { GiPlantRoots } from "react-icons/gi";
import { MdHandshake } from "react-icons/md";
import { FaRegStar, FaAdjust } from "react-icons/fa";

const stats = [
  { number: 'En construcción', label: 'Próxima apertura, seguimos avanzando cada día' },
  { number: '50K+', label: 'Personas conectadas con nuestra visión' },
  { number: '100%', label: 'Comprometidos con tu bienestar y satisfacción' },
  { number: '24/7', label: 'Atención disponible para acompañarte en cada etapa' }
]

const values = [
  {
    title: 'Conexión Natural',
    description: 'Aqui decano el que esta, los otros si le modificamos y agregamos un cuarto valor',
    icon: <GiPlantRoots className="text-4xl text-mda-green " />
  },
  {
    title: 'Hospitalidad Auténtica',
    description: 'Cada huésped es parte de nuestra gran familia. Te recibiremos con los brazos abiertos.',
    icon: <MdHandshake className="text-4xl text-mda-green" />
  },
  {
    title: 'Experiencias Memorables',
    description: 'Creamos espacios y momentos únicos que permanecerán en tu memoria, combinando bienestar, tradición y un toque de exclusividad.',
    icon: <FaRegStar className="text-4xl text-mda-green" />
  },
    {
    title: 'Excelencia Sostenible',
    description: 'Trabajamos con responsabilidad y respeto por el entorno natural, construyendo un futuro en armonía.',
    icon: <FaAdjust className="text-4xl text-mda-green" />
  }
]

export default function About() {
  return (
    <>
      {/* Sección Historia + Stats */}
      <section id="quienes-somos" className="py-20 bg-mda-green">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-4xl md:text-5xl font-glowen font-semibold text-mda-sand mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-justify text-mda-sand leading-relaxed">
                <p>
                   Un sueño que crece junto a la naturaleza.
                </p>
                <p>
                  <strong className="text-mda-sand">Millón de Amigos</strong> nació del sueño de crear un espacio donde las familias, 
                  amigos y visitantes puedan reconectarse con la naturaleza y entre sí, lejos del bullicio de la ciudad.
                </p>
                <p>
                  Hoy, este proyecto toma forma como un country club en desarrollo, pensado para brindar bienestar, 
                  exclusividad y experiencias memorables en un entorno natural incomparable.
                </p>
                <p>
                  Muy pronto abriremos nuestras puertas para dar vida a momentos de alegría, celebración y 
                  serenidad en este rincón creado para disfrutar la esencia de la naturaleza.
                </p>
                <p>
                  Nos preparamos para ofrecer la combinación perfecta entre comodidad moderna y belleza natural, 
                  creando el lugar ideal para descansar, celebrar y vivir experiencias únicas.
                </p>
                <a href="/alma-proyecto" className='px-4 py-2 font-glowen text-lg rounded-lg btn-primary bg-mda-accent text-mda-green hover:bg-mda-olive transition-colors'>Alma del proyecto →</a>
              </div>
            </motion.div>

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                <video
                  src="/videos/nuestraHistoria.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mda-green/30 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating card - Ahora con mensaje de construcción */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-custom p-6 rounded-xl shadow-2xl border border-mda-sand/50"
              >
                <div className="text-xl md:text-2xl font-heading text-mda-green font-bold">Muy pronto</div>
                <div className="text-sm text-mda-olive/70">Estamos construyendo</div>
                <div className="text-sm text-mda-olive/70">un lugar único para ti</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 py-10"
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
                <div className="text-lg md:text-xl font-glowen font-heading font-bold text-mda-sand mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-glowen md:text-[18px] text-mda-sand">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
{/* Sección Valores */}
<section className="py-20 bg-mda-olive">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="p-8 md:p-12 text-center"
    >
      <h3 className="text-3xl md:text-4xl font-glowen font-semibold text-mda-sand mb-4">
        Nuestros Valores
      </h3>
      <p className="text-mda-sand max-w-2xl mx-auto">
        Los principios que nos inspiran y definen la experiencia que muy pronto compartiremos contigo.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.1, delay: index * 0.2 }}
          whileHover={{
            y: -8,
            boxShadow: '0 8px 20px rgba(47, 107, 50, 0.4)', // brillo verde suave
          }}
          className="text-center p-6 rounded-xl bg-mda-sand transition-all duration-300 cursor-default"
        >
          <div className="text-4xl flex justify-center items-center mb-4">{value.icon}</div>
          <h4 className="text-xl font-glowen font-bold text-mda-green mb-8">
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
    </>
  )
}
