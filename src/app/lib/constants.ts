// app/lib/constants.ts

// Contact Information
export const CONTACT_INFO = {
  phone: '+573001234567',
  email: 'info@millondeamigos.com',
  whatsapp: 'https://wa.me/34608529493',
  address: {
    city: 'Medellín',
    state: 'Antioquia',
    country: 'Colombia',
    full: 'Medellín, Antioquia, Colombia'
  }
} as const

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/millondeamigos',
  instagram: 'https://instagram.com/millondeamigos',
  tiktok: 'https://tiktok.com/@millondeamigos',
  youtube: 'https://youtube.com/@millondeamigos'
} as const

// Navigation Menu
export const NAV_ITEMS = [
  { name: 'Inicio', href: '#', id: 'inicio' },
  { name: 'Quiénes Somos', href: '#quienes-somos', id: 'about' },
  { name: 'Servicios', href: '#servicios', id: 'services' },
  { name: 'Galería', href: '#galeria', id: 'gallery' },
  { name: 'Contacto', href: '#contact', id: 'contact' }
] as const

// Color Palette
export const COLORS = {
  primary: '#1E3F2E',    // mda-green
  secondary: '#35372C',  // mda-olive  
  accent: '#F2DBB2',     // mda-sand
} as const

// Animation Settings
export const ANIMATION_CONFIG = {
  // Common durations
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.9
  },
  // Common easings
  easing: {
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeInOut: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55]
  },
  // Stagger delays
  stagger: {
    items: 0.1,
    cards: 0.2,
    sections: 0.3
  }
} as const

// Business Hours (for future use)
export const BUSINESS_HOURS = {
  monday: { open: '08:00', close: '18:00', closed: false },
  tuesday: { open: '08:00', close: '18:00', closed: false },
  wednesday: { open: '08:00', close: '18:00', closed: false },
  thursday: { open: '08:00', close: '18:00', closed: false },
  friday: { open: '08:00', close: '20:00', closed: false },
  saturday: { open: '07:00', close: '20:00', closed: false },
  sunday: { open: '07:00', close: '18:00', closed: false }
} as const

// Placeholder content that can be easily replaced
export const PLACEHOLDER_CONTENT = {
  hero: {
    title: 'Millón de Amigos',
    subtitle: 'Un centro vacacional inmersivo — conecta con la naturaleza, disfruta tranquilo.'
  },
  about: {
    title: 'Nuestra Historia',
    description: 'Durante más de una década, hemos sido testigos de miles de sonrisas, celebraciones inolvidables y momentos de paz que nuestros huéspedes han encontrado en este rincón especial de la naturaleza.'
  },
  cta: {
    primary: 'Reservar Ahora',
    secondary: 'Ver Servicios',
    contact: 'Contáctanos'
  }
} as const

// Image paths (to be replaced with real images)
export const IMAGE_PATHS = {
  hero: '/images/hero.jpg',
  about: '/images/about.jpg',
  logo: '/images/logo.png',
  ogImage: '/images/og-image.jpg',
  services: {
    pool: '/images/services/pool.jpg',
    events: '/images/services/events.jpg',
    family: '/images/services/family.jpg',
    nature: '/images/services/nature.jpg',
    sports: '/images/services/sports.jpg',
    spa: '/images/services/spa.jpg'
  },
  gallery: {
    // These will be populated with real images later
    placeholder: '/images/gallery/placeholder.jpg'
  }
} as const