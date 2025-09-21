// app/page.tsx
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import TestimonialsCarousel from './components/TestimonialsCarousel'

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
        <section id="contact" className="py-20 bg-mda-green">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-heading text-mda-sand mb-6">
              ¡Contáctanos!
            </h2>
            <p className="text-mda-sand/90 mb-8 max-w-2xl mx-auto">
              Estamos listos para hacer de tu visita una experiencia inolvidable. 
              Escríbenos o llámanos para más información.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+573001234567" 
                className="btn-primary bg-mda-sand text-mda-green hover:bg-mda-sand/90"
              >
                📞 Llamar ahora
              </a>
    
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}