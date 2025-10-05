// app/components/Gallery.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

// Imágenes reales de la galería
const galleryImages = [
  // --- Familia (incluye las de niños) ---
  { id: 1, title: 'Diversión Familiar', category: 'familia', image: '/images/gallery1-familia.jpg' },
  { id: 2, title: 'Momentos en Familia', category: 'familia', image: '/images/gallery2-familia.jpg' },
  { id: 3, title: 'Tiempo de Calidad', category: 'familia', image: '/images/gallery3-familia.jpg' },
  { id: 4, title: 'Reunión Familiar', category: 'familia', image: '/images/gallery4-familia.jpg' },
  { id: 5, title: 'Zona Infantil', category: 'familia', image: '/images/gallery5-niños.jpg' },
  { id: 6, title: 'Diversión para Niños', category: 'familia', image: '/images/gallery6-niños.jpg' },
  { id: 7, title: 'Entretenimiento Infantil', category: 'familia', image: '/images/gallery7-niños.jpg' },
  { id: 8, title: 'Familia Unida', category: 'familia', image: '/images/gallery8-familia.jpg' },
  { id: 11, title: 'Actividades Infantiles', category: 'familia', image: '/images/gallery11-niños.jpg' },

  // --- Piscina ---
  { id: 9, title: 'Piscina Principal', category: 'piscina', image: '/images/gallery9-piscina.jpg' },
  { id: 10, title: 'Área de Piscina', category: 'piscina', image: '/images/gallery10-piscina.jpg' },
  { id: 12, title: 'Zona de Relax', category: 'piscina', image: '/images/gallery12-piscina.jpg' },

  // --- Granja ---
  { id: 13, title: 'Vida en la Granja', category: 'granja', image: '/images/gallery13-granja.jpg' },
  { id: 18, title: 'Conexión Rural', category: 'granja', image: '/images/gallery18-granja.jpg' },
  { id: 19, title: 'Animales y Naturaleza', category: 'granja', image: '/images/gallery19-granja.jpg' },
  { id: 21, title: 'Experiencia Granjera', category: 'granja', image: '/images/gallery21-granja.jpg' },

  // --- Eventos ---
  { id: 14, title: 'Eventos Sociales', category: 'eventos', image: '/images/gallery14-eventos.jpg' },
  { id: 15, title: 'Celebraciones Especiales', category: 'eventos', image: '/images/gallery15-eventos.jpg' },
  { id: 17, title: 'Reuniones y Encuentros', category: 'eventos', image: '/images/gallery17-eventos.jpg' },

  // --- Spa ---
  { id: 16, title: 'Relajación Total', category: 'spa', image: '/images/gallery16-spa.jpg' },
  { id: 20, title: 'Cuidado y Bienestar', category: 'spa', image: '/images/gallery20-spa.jpg' },
  { id: 23, title: 'Experiencia Spa', category: 'spa', image: '/images/gallery23-spa.jpg' },
  { id: 24, title: 'Momentos de Paz', category: 'spa', image: '/images/gallery24-spa.jpeg' },

  // --- Deportes ---
  { id: 22, title: 'Zona Deportiva', category: 'deportes', image: '/images/gallery22-deportes.jpg' },
  { id: 25, title: 'Cancha Principal', category: 'deportes', image: '/images/gallery25-deportes.jpg' },
  { id: 26, title: 'Diversión Activa', category: 'deportes', image: '/images/gallery26-deportes.png' },
  { id: 27, title: 'Jornadas Deportivas', category: 'deportes', image: '/images/gallery27-deportes.jpg' }
]

const categories = [
  { id: 'all', name: 'Todas', count: galleryImages.length },
  { id: 'piscina', name: 'Piscina & Relax', count: galleryImages.filter(img => img.category === 'piscina').length },
  { id: 'familia', name: 'Actividades Familiares', count: galleryImages.filter(img => img.category === 'familia').length },
  { id: 'eventos', name: 'Eventos & Retiros', count: galleryImages.filter(img => img.category === 'eventos').length },
  { id: 'granja', name: 'Granja & Naturaleza', count: galleryImages.filter(img => img.category === 'granja').length },
  { id: 'deportes', name: 'Deportes & Aventuras', count: galleryImages.filter(img => img.category === 'deportes').length },
  { id: 'spa', name: 'Spa & Bienestar', count: galleryImages.filter(img => img.category === 'spa').length }
]


export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const imagesToShow = showAll ? filteredImages : filteredImages.slice(0, 6)

  return (
    <section id="galeria" className="py-20 bg-withe">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-glowen font-semibold md:text-5xl text-mda-green mb-6">
            Galería de Experiencias
          </h2>
          <p className="text-lg text-mda-green max-w-3xl mx-auto">
            Un vistazo a los espacios y momentos que te esperan en Millón de Amigos. 
            Cada rincón está diseñado para crear recuerdos inolvidables.
          </p>
        </motion.div>
{/* Category Filter */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-50px' }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex flex-nowrap justify-center gap-2 mb-8 overflow-x-auto no-scrollbar"
>
  {categories.map((category, index) => (
    <motion.button
      key={category.id}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        setActiveCategory(category.id)
        setShowAll(false)
      }}
      className={`px-3 py-1.5 rounded-md text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
        activeCategory === category.id
          ? 'bg-mda-accent text-mda-gren shadow-lg'
          : 'bg-white/70 text-mda-olive hover:bg-mda-sand/10 border border-mda-sand/20'
      }`}
    >
      {category.name}
      <span className="ml-1 text-[11px] opacity-70">({category.count})</span>
    </motion.button>
  ))}
</motion.div>

        {/* Gallery Grid con Overlay */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imagesToShow.map((image, index) => (
              <motion.div
                key={`${activeCategory}-${image.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredImage(image.id)}
                onHoverEnd={() => setHoveredImage(null)}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  {/* Imagen real */}
                  <Image
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={300}
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ${
                      hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Content */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 ${
                      hoveredImage === image.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                    }`}
                  >
                    <h3 className="text-mda-sand font-glowen font-semibold text-lg mb-1 text-shadow">
                      {image.title}
                    </h3>
                    <p className="text-mda-sand/90 text-sm text-mda-sand capitalize font-medium">
                      {image.category}
                    </p>
                  </div>

                  {/* View Button */}
                  <div
                    className={`absolute top-4 right-4 transition-all duration-300 ${
                      hoveredImage === image.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                  >
                    <button className="w-10 h-10 bg-mda-sand/80 backdrop-blur-sm rounded-full flex items-center justify-center text-mda-olive hover:bg-mda-sand transition-colors shadow-lg">
                      <span className="text-sm font-bold">👁️</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Overlay Negro con Botón Ver Más */}
          {filteredImages.length > 6 && !showAll && (
            <div className="absolute left-0 right-0 bottom-0 -mx-6" style={{ top: 'calc(50% - 80px)' }}>
              {/* Overlay negro con degradado desde la segunda fila */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/80 pointer-events-none" />
              
              {/* Botón centrado sobre el overlay */}
              <div className="relative flex justify-center items-center top-20 h-full min-h-[200px]">
                <motion.button
                  onClick={() => setShowAll(!showAll)}
                  whileHover={{ y: 3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center gap-2 px-8 py-4 bg-transparent text-white hover:text-mda-sand transition-colors group z-10"
                >
                  {/* Flecha animada */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="text-4xl drop-shadow-lg"
                  >
                    ↓
                  </motion.div>
                  
                  {/* Texto */}
                  <span className="text-lg font-glowen drop-shadow-lg">
                    Click para ver más imágenes
                  </span>
                  
                  {/* Línea decorativa debajo */}
                  <div className="w-24 h-0.5 bg-white/50 group-hover:w-40 group-hover:bg-mda-sand transition-all duration-300" />
                </motion.button>
              </div>
            </div>
          )}
        </div>

        {/* Load More / Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-mda-olive/10 rounded-full text-mda-olive">
            <span className="text-sm">📸</span>
            <span className="text-sm font-medium">Más fotos próximamente</span>
          </div>
          <p className="text-mda-olive/60 text-sm mt-3">
            Estamos preparando más contenido visual para mostrar todo lo que tenemos para ti
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-mda-green backdrop-blur-sm  rounded-2xl p-8 md:p-12 border border-mda-sand/50">
            <h3 className="text-2xl md:text-3xl font-glowen font-semibold text-mda-sand mb-4">
              ¿Te gustó lo que viste?
            </h3>
            <p className="text-mda-sand mb-8 max-w-2xl mx-auto">
              Las fotos no le hacen justicia a la experiencia real. 
              Ven y vive cada momento en persona.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary rounded-lg bg-mda-accent text-mda-green hover:bg-mda-olive font-glowen text-lg px-4 py-2"
            >
              Planifica tu visita
            </motion.a>
                        <motion.a
              href="/revista"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary rounded-lg bg-mda-accent text-mda-green hover:bg-mda-olive font-glowen text-lg px-4 py-2"
            >
              Ver Magazine
            </motion.a>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}