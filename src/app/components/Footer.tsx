// app/components/Footer.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaMapMarkerAlt, FaMobile, FaEnvelope, FaYoutube } from 'react-icons/fa'

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FaFacebookF, color: 'hover:bg-transparent' },
  { name: 'Instagram', href: '#', icon: FaInstagram, color: 'hover:bg-transparent' },
  { name: 'TikTok', href: '#', icon: FaTiktok, color: 'hover:bg-transparent' },
  { name: 'YouTube', href: '#', icon: FaYoutube, color: 'hover:bg-transparent' },
]

const quickLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'El Club', href: '#el-club' },
    { label: 'Eventos & Celebraciones', href: '#eventos' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Noticias / Blog', href: '#blog' },
    { label: 'Tienda', href: '/tienda' },
    { label: 'Inspirando Juntos', href: '#inspirando-juntos' },
    { label: 'Contacto', href: '#contacto' },
]

const services = [
  { name: 'Piscina & Relax', href: '#servicios' },
  { name: 'Eventos Especiales', href: '#servicios' },
  { name: 'Actividades Familiares', href: '#servicios' },
  { name: 'Hospedaje', href: '#contact' },
  { name: 'Catering', href: '#contact' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mda-olive text-mda-sand">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Image 
              src="/images/logo.png" 
              alt="Millón de Amigos Logo" 
              width={150} 
              height={100} 
              className="object-contain mb-4"
              priority
            />
            <p className="text-mda-sand/80 mb-6 leading-relaxed">
              Proyecto en desarrollo que nace con la visión de crear un espacio donde la naturaleza, la familia y el bienestar se encuentren en armonía. Muy pronto, cada visita se convertirá en un recuerdo inolvidable.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-mda-sand/80" />
                <span className="text-mda-sand/80">Paseo Santa Maria de la Cabeza 4, Local 1</span>
              </div>
              <div className="flex items-center">
                <FaMobile className="mr-3 text-mda-sand/80" />
                <a href="tel:+34608529493" className="text-mda-sand/80 hover:text-mda-sand transition-colors">
                  +34 654 169 480
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-mda-sand/80" />
                <a href="mailto:info@millondeamigos.com" className="text-mda-sand/80 hover:text-mda-sand transition-colors">
                  info@millondeamigos.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold font-glowen mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-mda-sand/80 hover:text-mda-sand transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-glowen font-semibold mb-4">Experiencias</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-mda-sand/80 hover:text-mda-sand transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-glowen font-semibold mb-4">Síguenos</h4>
            <div className="flex flex-wrap gap-1 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-transparent ${social.color} rounded-full flex items-center justify-center transition-all duration-200 group transform hover:scale-110`}
                    title={social.name}
                  >
                    <IconComponent className="w-4 h-4 text-mda-sand" />
                  </a>
                )
              })}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <p className="text-sm text-mda-sand/80 mb-3">
               Sé parte del inicio de este sueño. Suscríbete para recibir noticias del proyecto.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 text-sm bg-mda-sand/20 border border-mda-sand/30 rounded-l-md focus:outline-none focus:border-mda-sand text-mda-sand placeholder-mda-sand/60"
                />
                <button className="px-4 py-2 bg-mda-sand text-mda-olive text-sm font-semibold rounded-r-md hover:bg-mda-sand/90 transition-colors">
                  Suscribirme
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8"></div>

{/* Bottom Section */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="flex flex-col md:flex-row justify-between items-center gap-4"
>
  <div className="text-sm text-mda-sand/70">
    © {currentYear} Millón de Amigos. Todos los derechos reservados.
  </div>
  <div className="flex gap-6 text-sm">
    <a href="#" className="text-mda-sand/70 hover:text-mda-sand transition-colors">
      Política de Privacidad
    </a>
    <a href="#" className="text-mda-sand/70 hover:text-mda-sand transition-colors">
      Términos y Condiciones
    </a>
    <a href="#" className="text-mda-sand/70 hover:text-mda-sand transition-colors">
      Política de Cookies
    </a>
  </div>
</motion.div>

{/* Credits Line */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="mt-3 pt-6 border-t border-mda-sand/20 text-center text-xs text-mda-sand/70"
>
  Desarrollado por{" "}
  <a
    href="http://ascaniopub.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-mda-sand transition-colors font-semibold"
  >
    Ascanio Publishing
  </a>
</motion.div>


      </div>

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://wa.me/34654169480?text=Hola%21%20%F0%9F%91%8B%20Quiero%20hacer%20una%20reserva%20en%20el%20Centro%20Vacacional%20Mill%C3%B3n%20de%20Amigos."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-mda-green backdrop-blur-md hover:bg-mda-green 
rounded-full flex items-center justify-center 
shadow-lg hover:shadow-xl transition-all duration-300 
group animate-pulse hover:animate-none"

          title="Contactar por WhatsApp"
        >
          <FaWhatsapp className="text-4xl text-mda-white group-hover:scale-110 transition-transform" />
        </a>
      </motion.div>
    </footer>
  )
}