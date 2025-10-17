// app/layout.tsx
import './globals.css'
import Script from 'next/script'
import React from 'react'
import { Playfair_Display, Inter } from 'next/font/google'
import { metadata } from './metadata'
import { RadioProvider } from './providers/RadioProvider'
import RadioPlayer from './components/RadioPlayer'

// Export metadata for Next.js
export { metadata }

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '700']
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Tailwind Play CDN + configuración inline (colores y fontFamily) */}
        <Script id="tailwind-config" strategy="beforeInteractive">
          {`
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'mda-green': '#1E3F2E',
                    'mda-olive': '#35372C',
                    'mda-sand': '#F2DBB2'
                  },
                  fontFamily: {
                    heading: ['var(--font-heading)', 'serif'],
                    body: ['var(--font-body)', 'sans-serif']
                  }
                }
              }
            }
          `}
        </Script>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        
        {/* Schema.org structured data for local business */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": "Millón de Amigos",
              "description": "Centro vacacional en la naturaleza - Piscinas, eventos, actividades familiares y experiencias inolvidables",
              "url": "https://millondeamigos.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "addressCountry": "CO"
              },
              "telephone": "+573001234567",
              "email": "info@millondeamigos.com",
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Piscina" },
                { "@type": "LocationFeatureSpecification", "name": "Eventos" },
                { "@type": "LocationFeatureSpecification", "name": "Actividades familiares" },
                { "@type": "LocationFeatureSpecification", "name": "Naturaleza" }
              ],
              "priceRange": "$"
            })
          }}
        />
      </head>
      <body className={`antialiased bg-mda-sand text-mda-olive ${inter.className}`}>
        <RadioProvider>
          <RadioPlayer />
        {children}
        </RadioProvider>
      </body>
    </html>
  )
}