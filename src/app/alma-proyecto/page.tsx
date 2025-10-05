// app/components/AlmaDelProyecto.tsx
'use client'
import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function AlmaDelProyecto() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-[#4a5f3a] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Sección Hero con título */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-6xl font-glowen text-[#e8dcc4] mb-6 tracking-wide">
              Alma del Proyecto
            </h1>
          </div>

          {/* Contenedor Principal - Grid Mejorado */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-10">
            
            {/* Columna Izquierda - Imagen 1 */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ">
                <Image
                  src="/images/1.png"
                  alt="Mariela Torres Zambrano - Samanda"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decoración */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#e8dcc4]/10 rounded-full -z-10"></div>
            </div>

            {/* Columna Derecha - Contenido Biografía Parte 1 */}
            <div className="text-[#e8dcc4] space-y-6">
              <div className="inline-block px-6 py-2 bg-[#e8dcc4]/10 rounded-full mb-6">
                <span className="text-sm font-glowen font-semibold tracking-widest uppercase">Visión y Propósito</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-glowen leading-tight mb-8">
                Una vida dedicada al servicio y la transformación
              </h2>

              <div className="space-y-5 text-base md:text-lg leading-relaxed">
                <p className="text-[#e8dcc4]/90">
                  <span className="text-2xl font-glowen text-[#e8dcc4]">Mariela Torres Zambrano</span>, nacida en Bogotá y reconocida 
                  internacionalmente como Samanda, es una vidente, profesional 
                  y empresaria con más de cuatro décadas de experiencia. 
                  Desde su infancia manifestó dones especiales de intuición y 
                  clarividencia, los cuales más tarde consolidó con estudios en 
                  comunicación y parapsicología.
                </p>

                <p className="text-[#e8dcc4]/90">
                  Su historia está marcada por una profunda fe, especialmente en el Señor de los Milagros de 
                  Buga, y por una vocación de servicio que la ha llevado a orientar 
                  a miles de personas en asuntos familiares, laborales, amorosos 
                  y espirituales.
                </p>
              </div>
            </div>
          </div>

          {/* Separador Curvo Decorativo */}
          <div className="relative w-full h-10 my-10 lg:my-10">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 0 60 Q 300 0, 600 60 T 1200 60" 
                stroke="#e8dcc4" 
                strokeWidth="8" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Sección Invertida */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Columna Izquierda - Contenido Proyecto */}
            <div className="text-[#e8dcc4] space-y-6 order-2 lg:order-1">
              <div className="inline-block px-6 py-2 bg-[#e8dcc4]/10 rounded-full mb-6">
                <span className="text-sm font-glowen font-semibold tracking-widest uppercase">El Proyecto</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-glowen leading-tight mb-8">
                Country Club millón de amigos
              </h2>

              <div className="space-y-5 text-base md:text-lg leading-relaxed">
                <p className="text-[#e8dcc4]/90">
                  En su faceta más visionaria, Samanda lidera el proyecto Country Club Millón de 
                  Amigos, una iniciativa concebida en 2008 que hoy se encuentra en proceso 
                  de construcción. Este ambicioso complejo busca ofrecer un estilo de vida 
                  exclusivo, con espacios recreativos, deportivos y sociales de lujo.
                </p>

                <p className="text-[#e8dcc4]/90">
                  Diseñados para fomentar la unión familiar y el bienestar 
                  integral, Millón de Amigos aspira a convertirse en un referente de hospitalidad 
                  y tradición, donde lujo, calidez y esparcimiento se unen en un entorno 
                  seguro y acogedor.
                </p>
              </div>
            </div>

            {/* Columna Derecha - Imagen 2 */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ">
                <Image
                  src="/images/2.png"
                  alt="Mariela Torres Zambrano - Samanda"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decoración */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#e8dcc4]/10 rounded-full -z-10"></div>
            </div>

          </div>

          {/* Sección Final - Texto Completo Ancho */}
          <div className="max-w-5xl mx-auto text-center space-y-8 pt-12">
            <div className="inline-block px-6 py-2 bg-[#e8dcc4]/10 rounded-full mb-6">
              <span className="text-sm font-glowen font-semibold tracking-widest uppercase text-[#e8dcc4]">Legado y Compromiso</span>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#e8dcc4]/90">
              <p>
                De igual manera, ha incursionado en la industria musical 
                con la creación de <span className="text-[#e8dcc4] font-semibold">Samanda Records</span>, un sello discográfico 
                que nace con la misión de visibilizar talento y generar 
                oportunidades para artistas emergentes y consolidados. Con esta iniciativa, Samanda amplía su compromiso con 
                la cultura y las artes, integrando música, medios y espiritualidad 
                bajo una misma visión.
              </p>

              <p>
                A pesar de sus múltiples responsabilidades, 
                mantiene un equilibrio entre su 
                papel como empresaria, autora, guía 
                espiritual, esposa, madre e hija. Su vida 
                está guiada por la perseverancia, la fe 
                y la pasión de dejar un legado en cada 
                proyecto que emprende.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}