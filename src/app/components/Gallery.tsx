// app/components/Gallery.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

// Imágenes reales de la galería
const galleryImages = [
  {
    id: 1,
    title: 'Diversión Familiar',
    category: 'familia',
    image: '/images/gallery1-familia.jpg'
  },
  {
    id: 2,
    title: 'Momentos en Familia',
    category: 'familia',
    image: '/images/gallery2-familia.jpg'
  },
  {
    id: 3,
    title: 'Tiempo de Calidad',
    category: 'familia',
    image: '/images/gallery3-familia.jpg'
  },
  {
    id: 4,
    title: 'Reunión Familiar',
    category: 'familia',
    image: '/images/gallery4-familia.jpg'
  },
  {
    id: 5,
    title: 'Zona Infantil',
    category: 'niños',
    image: '/images/gallery5-niños.jpg'
  },
  {
    id: 6,
    title: 'Diversión para Niños',
    category: 'niños',
    image: '/images/gallery6-niños.jpg'
  },
  {
    id: 7,
    title: 'Entretenimiento Infantil',
    category: 'niños',
    image: '/images/gallery7-niños.jpg'
  },
  {
    id: 8,
    title: 'Familia Unida',
    category: 'familia',
    image: '/images/gallery8-familia.jpg'
  },
  {
    id: 9,
    title: 'Piscina Principal',
    category: 'piscina',
    image: '/images/gallery9-piscina.jpg'
  },
  {
    id: 10,
    title: 'Área de Piscina',
    category: 'piscina',
    image: '/images/gallery10-piscina.jpg'
  },
  {
    id: 11,
    title: 'Actividades Infantiles',
    category: 'niños',
    image: '/images/gallery11-niños.jpg'
  },
  {
    id: 12,
    title: 'Zona de Relax',
    category: 'piscina',
    image: '/images/gallery12-piscina.jpg'
  }
]

const categories = [
  { id: 'all', name: 'Todas', count: galleryImages.length },
  { id: 'familia', name: 'Familia', count: galleryImages.filter(img => img.category === 'familia').length },
  { id: 'piscina', name: 'Piscina', count: galleryImages.filter(img => img.category === 'piscina').length },
  { id: 'niños', name: 'Niños', count: galleryImages.filter(img => img.category === 'niños').length }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-white to-mda-sand/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-mda-green mb-6">
            Galería de Experiencias
          </h2>
          <p className="text-lg text-mda-olive/80 max-w-3xl mx-auto">
            Un vistazo a los espacios y momentos que te esperan en Millón de Amigos. 
            Cada rincón está diseñado para crear recuerdos inolvidables.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
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
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-mda-green text-mda-sand shadow-lg'
                  : 'bg-white/70 text-mda-olive hover:bg-mda-green/10 border border-mda-green/20'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${activeCategory}-${image.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
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
                <div className={`absolute inset-0 bg-gradient-to-t from-mda-green/70 via-mda-green/20 to-transparent transition-opacity duration-300 ${
                  hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Content */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 ${
                  hoveredImage === image.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  <h3 className="text-black font-heading font-semibold text-lg mb-1 text-shadow">
                    {image.title}
                  </h3>
                  <p className="text-mda-sand/90 text-sm text-black capitalize font-medium">
                    {image.category}
                  </p>
                </div>

                {/* View Button */}
                <div className={`absolute top-4 right-4 transition-all duration-300 ${
                  hoveredImage === image.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}>
                  <button className="w-10 h-10 bg-mda-sand/80 backdrop-blur-sm rounded-full flex items-center justify-center text-mda-olive hover:bg-mda-sand transition-colors shadow-lg">
                    <span className="text-sm font-bold">👁️</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-mda-sand/50">
            <h3 className="text-2xl md:text-3xl font-heading text-mda-green mb-4">
              ¿Te gustó lo que viste?
            </h3>
            <p className="text-mda-olive/80 mb-8 max-w-2xl mx-auto">
              Las fotos no le hacen justicia a la experiencia real. 
              Ven y vive cada momento en persona.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-mda-green text-mda-sand hover:bg-mda-olive font-bold text-lg px-8 py-4"
            >
              Planifica tu visita
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}