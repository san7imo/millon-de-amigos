// app/metadata.ts
import { Metadata } from 'next'

export const siteConfig = {
  name: 'Millón de Amigos',
  description: 'Centro vacacional en la naturaleza - Piscinas, eventos, actividades familiares y experiencias inolvidables en Medellín, Antioquia.',
  url: 'https://millondeamigos.com', // Replace with actual domain
  ogImage: '/images/og-image.jpg', // Add when available
  keywords: [
    'centro vacacional',
    'piscina Medellín', 
    'eventos familiares',
    'naturaleza Colombia',
    'turismo Antioquia',
    'recreación familiar',
    'hospedaje rural',
    'actividades al aire libre'
  ]
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
    },
  ],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add when available
    // google: 'google-verification-code',
  },
}