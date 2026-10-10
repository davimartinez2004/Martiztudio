import React, { useState } from 'react';
import { BadgeConfig, ClientProject } from '../types';
import { WatermarkBadge } from './WatermarkBadge';
import { MOCK_CLIENT_SITES } from '../data/mockClientSites';
import { 
  Laptop, 
  Smartphone, 
  Tablet, 
  Sparkles, 
  Check, 
  ExternalLink,
  Shield, 
  Clock, 
  Star,
  Award,
  ChevronRight,
  RefreshCw,
  Eye
} from 'lucide-react';

interface SiteMockupPreviewProps {
  config: BadgeConfig;
}

export const SiteMockupPreview: React.FC<SiteMockupPreviewProps> = ({ config }) => {
  const [activeSiteIndex, setActiveSiteIndex] = useState(0);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [siteTheme, setSiteTheme] = useState<'dark' | 'light'>('dark');

  const currentSite: ClientProject = MOCK_CLIENT_SITES[activeSiteIndex];

  return (
    <div className="flex flex-col h-full bg-neutral-900/60 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">
      {/* Top Bar: Selector of the 4 sites & Device Preview */}
      <div className="p-3 bg-neutral-950/80 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3">
        {/* Sites tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
          <span className="text-xs text-neutral-400 font-medium mr-1.5 flex items-center gap-1">
            <Eye size={13} className="text-indigo-400" />
            Sitio Cliente:
          </span>
          {MOCK_CLIENT_SITES.map((site, idx) => (
            <button
              key={site.id}
              onClick={() => setActiveSiteIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeSiteIndex === idx
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
              <span>{site.title.split(' ')[0]}</span>
              <span className="text-[10px] opacity-60 hidden sm:inline">({site.category.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        {/* Viewport controls & theme */}
        <div className="flex items-center gap-2">
          {/* Theme switcher for client page */}
          <button
            onClick={() => setSiteTheme(siteTheme === 'dark' ? 'light' : 'dark')}
            className="px-2.5 py-1 text-xs rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors flex items-center gap-1"
            title="Alternar fondo claro/oscuro del sitio web de prueba"
          >
            <span>Fondo:</span>
            <span className="font-semibold text-white capitalize">{siteTheme === 'dark' ? 'Oscuro' : 'Claro'}</span>
          </button>

          {/* Device toggle */}
          <div className="flex items-center bg-neutral-800/80 rounded-lg p-0.5 border border-neutral-700/60">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-md transition-colors ${
                deviceMode === 'desktop' ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
              title="Vista de escritorio"
            >
              <Laptop size={14} />
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded-md transition-colors ${
                deviceMode === 'tablet' ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
              title="Vista de tablet"
            >
              <Tablet size={14} />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-md transition-colors ${
                deviceMode === 'mobile' ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
              title="Vista de móvil"
            >
              <Smartphone size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Browser address bar simulation */}
      <div className="bg-neutral-900 px-4 py-2 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-neutral-600 ml-1">|</span>
          <div className="bg-neutral-950 px-3 py-1 rounded-md text-[11px] font-mono text-neutral-300 flex items-center gap-1.5 border border-neutral-800 max-w-[280px] truncate">
            <span className="text-emerald-400">https://</span>
            <span>{currentSite.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</span>
          </div>
        </div>
        <div className="text-[11px] text-neutral-400 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          <span className="hidden sm:inline">Tu marca de agua está activa abajo</span>
        </div>
      </div>

      {/* Mockup Preview Area */}
      <div className="relative flex-1 bg-neutral-950 p-3 sm:p-6 flex items-center justify-center overflow-auto min-h-[460px]">
        {/* Device Container Frame */}
        <div 
          className={`relative transition-all duration-300 rounded-xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col ${
            deviceMode === 'desktop' 
              ? 'w-full max-w-4xl h-[580px]' 
              : deviceMode === 'tablet' 
              ? 'w-[580px] max-w-full h-[540px]' 
              : 'w-[360px] max-w-full h-[580px]'
          } ${
            siteTheme === 'dark' 
              ? 'bg-neutral-950 text-neutral-100' 
              : 'bg-white text-neutral-900'
          }`}
        >
          {/* Scrollable Website Body */}
          <div className="flex-1 overflow-y-auto relative scroll-smooth flex flex-col">
            {/* Mock Client Navigation Bar */}
            <div className={`p-4 border-b flex items-center justify-between sticky top-0 backdrop-blur-md z-20 ${
              siteTheme === 'dark' ? 'bg-neutral-950/80 border-neutral-800/80' : 'bg-white/80 border-neutral-200'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                  {currentSite.title.charAt(0)}
                </div>
                <span className="font-bold text-sm tracking-tight">{currentSite.title}</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-xs font-medium opacity-75">
                <span>Servicios</span>
                <span>Sobre Nosotros</span>
                <span>Testimonios</span>
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-white font-semibold">Contacto</span>
              </div>
            </div>

            {/* Mock Client Hero Section */}
            <div className="p-6 sm:p-10 flex-1 flex flex-col justify-center max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium self-center mb-4 border bg-indigo-500/10 border-indigo-500/20 text-indigo-400">
                <Sparkles size={12} />
                <span>{currentSite.tagline}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                {currentSite.heroHeadline}
              </h2>

              <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                siteTheme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                {currentSite.heroSubheadline}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2">
                  <span>{currentSite.ctaText}</span>
                  <ChevronRight size={14} />
                </button>
                <button className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-colors ${
                  siteTheme === 'dark' ? 'border-neutral-800 hover:bg-neutral-900 text-neutral-300' : 'border-neutral-300 hover:bg-neutral-100 text-neutral-700'
                }`}>
                  Ver Casos de Éxito
                </button>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left mt-4">
                {currentSite.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className={`p-3 rounded-xl border text-xs flex items-center gap-2 ${
                      siteTheme === 'dark' ? 'bg-neutral-900/50 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                    }`}
                  >
                    <Check size={14} className="text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Metric / Stat Banner */}
              <div className="mt-8 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center justify-center gap-2">
                <Award size={14} />
                <span>Resultado del sitio: <strong>{currentSite.conversionStat}</strong></span>
              </div>

              {/* Extra content to enable scroll */}
              <div className="mt-12 text-center text-xs opacity-40">
                <p>— Desliza hacia abajo para ver el pie de página —</p>
              </div>
            </div>

            {/* Mock Client Footer */}
            <div className={`mt-auto p-6 border-t ${
              siteTheme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-70">
                <span>© {new Date().getFullYear()} {currentSite.title}. Todos los derechos reservados.</span>
                <div className="flex gap-4">
                  <span>Aviso Legal</span>
                  <span>Privacidad</span>
                  <span>Cookies</span>
                </div>
              </div>

              {/* If watermark style is footer signature or footer bar position, it's rendered here */}
              {(config.style === 'minimal-signature' || config.position === 'footer-bar') && (
                <div className="mt-4 pt-4 border-t border-neutral-800/40">
                  <WatermarkBadge config={config} isInteractivePreview={true} />
                </div>
              )}
            </div>
          </div>

          {/* Floating Watermark Badge Overlay (if not integrated in footer) */}
          {config.style !== 'minimal-signature' && config.position !== 'footer-bar' && (
            <div className="pointer-events-auto">
              <WatermarkBadge config={config} isInteractivePreview={true} />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="p-2.5 bg-neutral-950 border-t border-neutral-800 text-center text-xs text-neutral-400 flex items-center justify-center gap-2">
        <Sparkles size={12} className="text-indigo-400" />
        <span>Haz clic o pasa el cursor sobre tu marca de agua arriba para probar cómo interactuarán los visitantes.</span>
      </div>
    </div>
  );
};
