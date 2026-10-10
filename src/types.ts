export type BadgeStyle = 'floating-pill' | 'minimal-signature' | 'corner-ribbon' | 'verified-card' | 'monogram-stamp';

export type BadgePosition = 'bottom-right' | 'bottom-left' | 'bottom-center' | 'footer-bar';

export type BadgeTheme = 'dark-glass' | 'cyber-dark' | 'light-glass' | 'pure-minimal' | 'indigo-glow' | 'emerald-verified' | 'luxury-gold';

export interface BadgeConfig {
  brandName: string;
  subtitle: string;
  prefix: string; // "Hecho por", "Diseño web por", "Crafted with love by", "Sitio por"
  portfolioUrl: string;
  style: BadgeStyle;
  position: BadgePosition;
  theme: BadgeTheme;
  icon: 'sparkles' | 'code' | 'layers' | 'diamond' | 'shield-check' | 'terminal' | 'zap';
  showVerified: boolean;
  showQr: boolean;
  opacityIdle: number; // 0.3 to 1.0
  hoverEffect: 'glow' | 'lift' | 'expand' | 'none';
  customTagline: string;
  whatsappContact?: string;
  availableForHire: boolean;
}

export interface BrandSuggestion {
  id: string;
  name: string;
  tagline: string;
  vibe: 'Tech Moderno' | 'Boutique Minimalista' | 'Agencia Corporativa' | 'Conversión Rápida' | 'Personal Studio';
  score: number;
  description: string;
  recommendedDomains: {
    domain: string;
    tld: string;
    avgPriceYear: string;
    recommendedFor: string;
    isPrimary?: boolean;
  }[];
  watermarkSnippet: string;
  logoLetter: string;
}

export interface ClientProject {
  id: string;
  title: string;
  clientName: string;
  category: string;
  conversionStat: string;
  description: string;
  themeColor: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  tagline: string;
  features: string[];
}
