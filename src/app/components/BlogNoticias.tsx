// app/components/BlogNoticias.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'

const noticias = [
  {
    id: 1,
    categoria: "Inauguración",
    titulo: "Millón de Amigos abrirá sus puertas en 2026",
    descripcion: "Estamos emocionados de anunciar que nuestro Country Club estará listo para recibir a sus primeros afiliados. Un sueño que se hace realidad.",
    fecha: "Fecha estimada: Enero 2026",
    imagen: "/images/noti.jpg",
    tag: "Próximamente",
    color: "bg-amber-500"
  },
  {
    id: 2,
    categoria: "Avances",
    titulo: "Construcción en fase avanzada",
    descripcion: "Los espacios recreativos y deportivos ya toman forma. Cada día estamos más cerca de ofrecer experiencias únicas en contacto con la naturaleza.",
    fecha: "Actualizado: Octubre 2025",
    imagen: "/images/nuestraHistoria.jpg",
    tag: "En progreso",
    color: "bg-blue-500"
  },
  {
    id: 3,
    categoria: "Afiliaciones",
    titulo: "Últimas oportunidades de membresía fundadora",
    descripcion: "Sé parte de los pioneros que darán vida a este proyecto. Beneficios exclusivos para afiliados fundadores.",
    fecha: "Disponible ahora",
    imagen: "/images/noticia1.png",
    tag: "Exclusivo",
    color: "bg-emerald-500"
  }
]

export default function BlogNoticias() {
  return (
    <section id='blog' className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
           
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-glowen text-mda-green mb-4"
          >
            Últimas Noticias
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Mantente informado sobre los avances del proyecto y novedades del club
          </motion.p>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Image */}
              <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden">
                <Image
                  src={noticias[0].imagen}
                  alt={noticias[0].titulo}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 ${noticias[0].color} text-white px-4 py-2 rounded-full text-sm font-semibold z-20`}>
                  {noticias[0].tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-mda-green font-semibold text-sm uppercase tracking-wider mb-3">
                  {noticias[0].categoria}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-glowen text-gray-900 mb-4 leading-tight">
                  {noticias[0].titulo}
                </h3>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {noticias[0].descripcion}
                </p>
                
                <div className="flex items-center text-gray-500 mb-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">{noticias[0].fecha}</span>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {noticias.slice(1).map((noticia, index) => (
            <motion.div
              key={noticia.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    width={600}
                    height={400}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 right-4 ${noticia.color} text-white px-3 py-1 rounded-full text-xs font-semibold z-20`}>
                    {noticia.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-mda-green font-semibold text-xs uppercase tracking-wider mb-2 block">
                    {noticia.categoria}
                  </span>
                  
                  <h4 className="text-xl font-glowen text-gray-900 mb-3 leading-tight group-hover:text-mda-green transition-colors">
                    {noticia.titulo}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {noticia.descripcion}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-xs">{noticia.fecha}</span>
                    </div>
              
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}