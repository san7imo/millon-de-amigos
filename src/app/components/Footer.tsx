// app/components/Footer.tsx
'use client'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'WhatsApp', href: 'https://wa.me/573001234567', icon: '💬' },
  { name: 'TikTok', href: '#', icon: '🎵' }
]

const quickLinks = [
  { name: 'Inicio', href: '#' },
  { name: 'Quiénes Somos', href: '#quienes-somos' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contact' }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">Millón de Amigos</h3>
            <p className="text-mda-sand/80 mb-6 leading-relaxed">
              Tu centro vacacional en la naturaleza. Donde cada momento se convierte 
              en un recuerdo inolvidable.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span className="text-mda-sand/80">Medellín, Antioquia, Colombia</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+573001234567" className="text-mda-sand/80 hover:text-mda-sand transition-colors">
                  +57 300 123 4567
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📧</span>
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
            <h4 className="text-lg font-heading font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-mda-sand/80 hover:text-mda-sand transition-colors duration-200 text-sm"
                  >
                    {link.name}
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
            <h4 className="text-lg font-heading font-semibold mb-4">Servicios</h4>
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
            <h4 className="text-lg font-heading font-semibold mb-4">Síguenos</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-mda-sand/20 hover:bg-mda-sand/30 rounded-full flex items-center justify-center transition-colors duration-200"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <p className="text-sm text-mda-sand/80 mb-3">
                Recibe ofertas especiales y noticias
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 text-sm bg-mda-sand/20 border border-mda-sand/30 rounded-l-md focus:outline-none focus:border-mda-sand text-mda-sand placeholder-mda-sand/60"
                />
                <button className="px-4 py-2 bg-mda-sand text-mda-olive text-sm font-semibold rounded-r-md hover:bg-mda-sand/90 transition-colors">
                  ✓
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-mda-sand/20 my-8"></div>

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
          </div>
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
          href="https://wa.me/573001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
          title="Contactar por WhatsApp"
        >
          <span className="text-2xl text-white group-hover:scale-110 transition-transform">💬</span>
        </a>
      </motion.div>
    </footer>
    )  }