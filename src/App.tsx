import React, { useState } from 'react';
import { BadgeConfig, BrandSuggestion } from './types';
import { BRAND_SUGGESTIONS } from './data/brandSuggestions';
import { WatermarkConfigurator } from './components/WatermarkConfigurator';
import { SiteMockupPreview } from './components/SiteMockupPreview';
import { CodeExportPanel } from './components/CodeExportPanel';
import { BrandSuggestionsTab } from './components/BrandSuggestionsTab';
import { PortfolioShowcaseTab } from './components/PortfolioShowcaseTab';
import { 
  Sparkles, 
  Globe, 
  Layers, 
  Code, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Laptop, 
  BookOpen, 
  ArrowRight,
  Flame,
  Lightbulb,
  Share2
} from 'lucide-react';

export default function App() {
  // Default configuration set to Tinez Studio & tineztudio.app
  const [config, setConfig] = useState<BadgeConfig>({
    brandName: 'Tinez Studio',
    subtitle: 'Estudio de Landing Pages & Desarrollo Web',
    prefix: 'Hecho por',
    portfolioUrl: 'https://tineztudio.app',
    style: 'floating-pill',
    position: 'bottom-right',
    theme: 'dark-glass',
    icon: 'sparkles',
    showVerified: true,
    showQr: true,
    opacityIdle: 0.75,
    hoverEffect: 'glow',
    customTagline: 'Landing pages de alto rendimiento diseñadas a medida por Tinez Studio.',
    whatsappContact: '+1234567890',
    availableForHire: true
  });

  const [activeMainTab, setActiveMainTab] = useState<'editor' | 'brands' | 'portfolio' | 'guide'>('editor');
  const [copiedLink, setCopiedLink] = useState(false);

  // Apply a brand suggestion with 1 click
  const handleApplyBrand = (brand: BrandSuggestion, domain: string) => {
    setConfig((prev) => ({
      ...prev,
      brandName: brand.name,
      subtitle: brand.tagline,
      portfolioUrl: `https://${domain}`,
      prefix: brand.name.includes('Marti') ? 'Hecho por' : 'Diseño web por'
    }));
    setActiveMainTab('editor');
  };

  const copyLiveLink = () => {
    navigator.clipboard.writeText(config.portfolioUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-indigo-950 via-neutral-900 to-indigo-950 border-b border-indigo-500/20 py-2 px-4 text-center text-xs text-indigo-200 flex items-center justify-center gap-2">
        <Sparkles size={13} className="text-amber-400 shrink-0" />
        <span>
          Diseñado para tus <strong>4 sitios web</strong>: Crea una marca de agua seria, discreta y profesional con dominio recomendado.
        </span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-neutral-950/85 backdrop-blur-xl border-b border-neutral-800/80 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-extrabold text-white text-base shadow-lg shadow-indigo-600/30">
            S
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">StudioMark</span>
              <span className="text-[10px] bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full font-semibold">
                v2.0
              </span>
            </div>
            <p className="text-[11px] text-neutral-400">Marca de Agua & Portafolio de Landing Pages</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center bg-neutral-900/90 p-1 rounded-xl border border-neutral-800 text-xs">
          <button
            onClick={() => setActiveMainTab('editor')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeMainTab === 'editor'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Laptop size={13} />
            <span>Diseñador & En Vivo</span>
          </button>

          <button
            onClick={() => setActiveMainTab('brands')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeMainTab === 'brands'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Flame size={13} className="text-amber-400" />
            <span>Nombres & Dominios</span>
          </button>

          <button
            onClick={() => setActiveMainTab('portfolio')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeMainTab === 'portfolio'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Layers size={13} />
            <span>Plantilla Portafolio</span>
          </button>

          <button
            onClick={() => setActiveMainTab('guide')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeMainTab === 'guide'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <BookOpen size={13} />
            <span>Guía de Instalación</span>
          </button>
        </nav>

        {/* Quick Active Brand Indicator */}
        <div className="hidden xl:flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs font-semibold text-white flex items-center justify-end gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{config.brandName}</span>
            </div>
            <a 
              href={config.portfolioUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-[11px] font-mono text-indigo-400 hover:underline"
            >
              {config.portfolioUrl.replace('https://', '')}
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* TAB 1: Editor & Live Preview */}
        {activeMainTab === 'editor' && (
          <div className="space-y-6">
            {/* Quick Presets Bar */}
            <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Lightbulb size={14} className="text-amber-400 shrink-0" />
                <span className="text-neutral-400 font-medium">Nombres sugeridos rápidos:</span>
                <div className="flex flex-wrap gap-1.5">
                  {BRAND_SUGGESTIONS.slice(0, 4).map((b) => (
                    <button
                      key={b.id}
                      onClick={() => handleApplyBrand(b, b.recommendedDomains[0].domain)}
                      className={`px-2.5 py-1 rounded-lg border transition-colors cursor-pointer text-xs ${
                        config.brandName === b.name
                          ? 'bg-indigo-600 border-indigo-500 text-white font-medium'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveMainTab('brands')}
                className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium transition-colors"
              >
                <span>Ver todos los dominios sugeridos</span>
                <ArrowRight size={12} />
              </button>
            </div>

            {/* Split layout: Configurator on left, Mockup on right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Configuration Controls (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <WatermarkConfigurator config={config} onChange={setConfig} />
              </div>

              {/* Right Column: Live Mockup on 4 sites (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <SiteMockupPreview config={config} />
              </div>
            </div>

            {/* Code Export Section */}
            <CodeExportPanel config={config} />
          </div>
        )}

        {/* TAB 2: Brands & Domain Suggestions */}
        {activeMainTab === 'brands' && (
          <BrandSuggestionsTab 
            currentConfig={config} 
            onApplyBrand={handleApplyBrand} 
          />
        )}

        {/* TAB 3: Portfolio Template */}
        {activeMainTab === 'portfolio' && (
          <PortfolioShowcaseTab config={config} />
        )}

        {/* TAB 4: Installation Guide */}
        {activeMainTab === 'guide' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="rounded-3xl bg-gradient-to-br from-indigo-950 via-neutral-900 to-neutral-950 border border-neutral-800 p-8 shadow-2xl">
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-2">
                Guía Práctica
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Cómo Instalar tu Marca de Agua en tus 4 Sitios Web
              </h2>
              <p className="text-neutral-300 text-sm mt-2 leading-relaxed">
                Una marca de agua profesional debe verse seria, nunca molestar la navegación del usuario y generar oportunidades de venta para tu propio estudio. Sigue estas buenas prácticas:
              </p>
            </div>

            {/* Recommendations & Etiquette */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-base text-white">Las 3 Reglas de Oro para un Estudio Serio</h3>
                <ul className="text-xs text-neutral-300 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>
                    <strong>Opacidad al 60%-75% en reposo:</strong> Debe fundirse de manera sutil con el fondo del sitio para respetar el protagonismo del cliente.
                  </li>
                  <li>
                    <strong>Ubicación inteligente:</strong> La esquina inferior derecha es el estándar universal (usado por Shopify, Webflow, Stripe). Deja 16px de margen para no tapar widgets de cookies o chat.
                  </li>
                  <li>
                    <strong>Apertura en nueva pestaña:</strong> Siempre incluye <code>target=&quot;_blank&quot; rel=&quot;noopener&quot;</code> para que el cliente que visita la web nunca abandone el sitio del negocio.
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                  💼
                </div>
                <h3 className="font-bold text-base text-white">¿Qué decirle a tus clientes?</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  En tus contratos o presupuestos incluye una cláusula estándar como esta:
                </p>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-[11px] text-neutral-400 italic">
                  &quot;El sitio web incluirá una firma de autor digital discreta en el pie de página acreditando el diseño y mantenimiento técnico por {config.brandName}.&quot;
                </div>
                <p className="text-[11px] text-neutral-400">
                  El 99% de los clientes lo aceptan con gusto porque transmite que el sitio tiene garantía y soporte activo.
                </p>
              </div>
            </div>

            {/* Step-by-step for platforms */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Pasos Detallados según la Tecnología de tus Sitios:</h3>

              <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-2">
                <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold">1</span>
                  En sitios WordPress (Elementor, Divi, Gutenberg)
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed pl-8">
                  Descarga el plugin gratuito <strong>WPCode (Insert Headers and Footers)</strong>. Crea un nuevo Snippet &gt; Selecciona &quot;HTML Snippet&quot; &gt; Ubicación: <em>Footer del sitio</em> &gt; Pega el código de la pestaña Diseñador &gt; Activar. ¡Listo en 30 segundos!
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-2">
                <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-xs font-bold">2</span>
                  En sitios HTML / CSS / JavaScript puros
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed pl-8">
                  Abre tu archivo <code>index.html</code> en tu editor de código. Ve hasta la última línea del archivo y justo antes de <code>&lt;/body&gt;</code> pega el código HTML generado. No requiere librerías externas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-2">
                <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-cyan-600/20 text-cyan-400 flex items-center justify-center text-xs font-bold">3</span>
                  En Webflow, Wix o Squarespace
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed pl-8">
                  Ve a la configuración del proyecto &gt; <em>Custom Code</em> &gt; <em>Footer Code</em>. Pega el código universal y publica el sitio.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950/80 px-4 sm:px-8 py-6 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-neutral-400 font-medium">StudioMark</span>
            <span>— Creado para desarrolladores y agencias web independientes.</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span>Marca activa: <strong className="text-white">{config.brandName}</strong></span>
            <span>•</span>
            <span>Dominio: <strong className="text-indigo-400 font-mono">{config.portfolioUrl.replace('https://', '')}</strong></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
