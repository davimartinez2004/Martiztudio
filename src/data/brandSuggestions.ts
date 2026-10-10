import { BrandSuggestion } from '../types';

export const BRAND_SUGGESTIONS: BrandSuggestion[] = [
  {
    id: 'tinez-studio',
    name: 'Tinez Studio',
    tagline: 'Landing Pages & Desarrollo Web de Alto Impacto',
    vibe: 'Personal Studio',
    score: 10.0,
    description: '¡Tu elección oficial! Derivado de tu apellido Martínez. Suena fresco, moderno y con mucha personalidad de estudio tech. La extensión .app (de Google Registry) exige HTTPS nativo y le otorga máxima seguridad y prestigio tecnológico.',
    recommendedDomains: [
      { domain: 'tineztudio.app', tld: '.app', avgPriceYear: '~$14/año', recommendedFor: '🏆 TU DOMINIO OFICIAL (Comprar en Cloudflare)', isPrimary: true },
      { domain: 'tinezstudio.com', tld: '.com', avgPriceYear: '~$10/año', recommendedFor: 'Alternativa tradicional con "s"' },
      { domain: 'tinez.dev', tld: '.dev', avgPriceYear: '~$12/año', recommendedFor: 'Alternativa corta .dev' },
    ],
    watermarkSnippet: 'Hecho por Tinez Studio ↗',
    logoLetter: 'T'
  },
  {
    id: 'marti-studio',
    name: 'Marti Studio',
    tagline: 'Landing Pages de Alto Rendimiento',
    vibe: 'Personal Studio',
    score: 9.8,
    description: 'Basado en tu apellido "Martínez". Suena internacional, exclusivo y cercano. Muy común entre los mejores diseñadores de Silicon Valley y Europa.',
    recommendedDomains: [
      { domain: 'martistudio.dev', tld: '.dev', avgPriceYear: '$12/año', recommendedFor: '⭐ Recomendación para desarrolladores web' },
      { domain: 'marti.studio', tld: '.studio', avgPriceYear: '$22/año', recommendedFor: 'Super estético y directo al grano' },
      { domain: 'martistudioweb.com', tld: '.com', avgPriceYear: '$10/año', recommendedFor: 'Ideal si buscas estrictamente extensión .com' },
    ],
    watermarkSnippet: 'Desarrollado por Marti Studio ↗',
    logoLetter: 'M'
  },
  {
    id: 'nexo-landing',
    name: 'Nexo Web Lab',
    tagline: 'Conectando Marcas con Clientes Reales',
    vibe: 'Agencia Corporativa',
    score: 9.6,
    description: '"Nexo" transmite unión, conexión y profesionalismo sólido. Suena como una agencia establecida de consultoría digital seria que cobra presupuestos premium.',
    recommendedDomains: [
      { domain: 'nexoweblab.com', tld: '.com', avgPriceYear: '$11/año', recommendedFor: '⭐ Nombre corporativo en .com global', isPrimary: true },
      { domain: 'nexolab.design', tld: '.design', avgPriceYear: '$35/año', recommendedFor: 'Enfocado en diseño UI/UX de alto calibre' },
      { domain: 'nexostudio.dev', tld: '.dev', avgPriceYear: '$12/año', recommendedFor: 'Rápido, seguro (HTTPS nativo) y moderno' },
    ],
    watermarkSnippet: 'Crafted by Nexo Web Lab • Sitio Verificado',
    logoLetter: 'N'
  },
  {
    id: 'veloce-web',
    name: 'Veloce Studio',
    tagline: 'Landing Pages Ultra Rápidas y Optimizadas',
    vibe: 'Conversión Rápida',
    score: 9.5,
    description: 'Derivado del italiano "Veloce" (rápido). Ideal para vender landing pages donde la velocidad de carga y conversión de ventas es la promesa principal.',
    recommendedDomains: [
      { domain: 'velocestudio.co', tld: '.co', avgPriceYear: '$14/año', recommendedFor: 'Moderno para startups y tech', isPrimary: true },
      { domain: 'veloceweb.design', tld: '.design', avgPriceYear: '$30/año', recommendedFor: 'Especializado en diseño estético' },
      { domain: 'velocelandings.com', tld: '.com', avgPriceYear: '$10/año', recommendedFor: 'Directo y excelente para SEO orgánico' },
    ],
    watermarkSnippet: '⚡ Creado por Veloce Studio',
    logoLetter: 'V'
  },
  {
    id: 'davi-martinez-design',
    name: 'Davi Martinez • Web & Code',
    tagline: 'Diseño Web Estratégico y Landing Pages',
    vibe: 'Boutique Minimalista',
    score: 9.7,
    description: 'Marca personal directa. Los clientes valoran saber exactamente quién lidera su proyecto, transmitiendo confianza y trato directo sin intermediarios.',
    recommendedDomains: [
      { domain: 'davimartinez.com', tld: '.com', avgPriceYear: '$10/año', recommendedFor: '⭐ El dominio definitivo de marca personal', isPrimary: true },
      { domain: 'davimartinez.dev', tld: '.dev', avgPriceYear: '$12/año', recommendedFor: 'Perfecto para perfil técnico y visual' },
      { domain: 'davidesign.co', tld: '.co', avgPriceYear: '$15/año', recommendedFor: 'Corto y memorable para tarjetas' },
    ],
    watermarkSnippet: 'Diseñado por Davi Martínez ↗',
    logoLetter: 'D'
  },
  {
    id: 'lumina-craft',
    name: 'Lumina Digital',
    tagline: 'Presencia Digital que Brilla y Convierte',
    vibe: 'Tech Moderno',
    score: 9.4,
    description: '"Lumina" evoca claridad, pulcritud, iluminación de producto. Proyecta estética limpia, sitios minimalistas tipo Apple o Linear.',
    recommendedDomains: [
      { domain: 'luminadigital.studio', tld: '.studio', avgPriceYear: '$20/año', recommendedFor: 'Súper chic y memorable' },
      { domain: 'luminaweblab.com', tld: '.com', avgPriceYear: '$10/año', recommendedFor: 'Versión .com segura y disponible' },
      { domain: 'lumina.dev', tld: '.dev', avgPriceYear: '$12/año', recommendedFor: 'Minimalista' },
    ],
    watermarkSnippet: 'Construido por Lumina Digital',
    logoLetter: 'L'
  },
  {
    id: 'foco-studio',
    name: 'Foco Landing Studio',
    tagline: 'Landing Pages con Enfoque en Conversión',
    vibe: 'Conversión Rápida',
    score: 9.3,
    description: '"Foco" (enfoque, atención, claridad). Transmite que no haces páginas genéricas, sino máquinas de ventas enfocadas en generar leads.',
    recommendedDomains: [
      { domain: 'focolanding.com', tld: '.com', avgPriceYear: '$10/año', recommendedFor: 'Comercial, claro y fácil de recordar', isPrimary: true },
      { domain: 'focostudio.design', tld: '.design', avgPriceYear: '$32/año', recommendedFor: 'Diseño de alta gama' },
      { domain: 'focoweb.co', tld: '.co', avgPriceYear: '$14/año', recommendedFor: 'Corto y ágil' },
    ],
    watermarkSnippet: 'Desarrollo web por Foco Studio',
    logoLetter: 'F'
  }
];

export const REGISTRAR_GUIDE = [
  {
    name: 'Cloudflare Registrar',
    pros: 'Vende dominios a precio de costo (sin comisiones infladas), renovación siempre al mismo precio, DNS más rápido del mundo y protección contra DDoS gratis.',
    url: 'cloudflare.com/products/registrar',
    badge: 'Recomendado por desarrolladores'
  },
  {
    name: 'Porkbun',
    pros: 'Precios económicos transparentes, interfaz limpia, WHOIS Privacy gratis y soporte excelente.',
    url: 'porkbun.com',
    badge: 'Mejor precio / calidad'
  },
  {
    name: 'Namecheap',
    pros: 'Muy popular, acepta múltiples métodos de pago, panel amigable para principiantes.',
    url: 'namecheap.com',
    badge: 'Fácil de usar'
  }
];
