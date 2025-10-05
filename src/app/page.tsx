// app/page.tsx
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import { FaWhatsapp, FaMailBulk} from 'react-icons/fa'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <TestimonialsCarousel />
                {/* Temporary Contact Section - will be replaced with full component later */}
        <section id="contacto" className="py-20 bg-mda-green">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-glowen font-semibold text-mda-sand mb-4">
              Queremos construir contigo este sueño
            </h2>
            <p className="text-mda-sand/90 mb-8 max-w-2xl mx-auto">
            Tu mensaje será atendido personalmente por nuestro equipo.
            </p>
            <p className="text-mda-sand/90 mb-8 max-w-2xl mx-auto">
            Estamos disponibles para resolver tus dudas y contarte más sobre el desarrollo de Millón de Amigos. Escríbenos y se parte de esta experiencia desde sus primeros pasos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/34608529493" 
                className="btn-primary rounded-lg font-glowen bg-mda-accent text-mda-green hover:bg-mda-sand/90"
              >
              <FaWhatsapp className="inline-block mr-2" />
              Whatsapp
              </a>
              <a 
                href="mailto:info@millondeamigos.com"
                className="btn-primary font-glowen rounded-lg bg-mda-accent text-mda-green"
              >
               <FaMailBulk className='inline-block'></FaMailBulk> Escribenos por correo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}