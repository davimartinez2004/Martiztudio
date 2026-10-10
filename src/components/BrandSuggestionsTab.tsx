import React, { useState } from 'react';
import { BRAND_SUGGESTIONS, REGISTRAR_GUIDE } from '../data/brandSuggestions';
import { BadgeConfig, BrandSuggestion } from '../types';
import { 
  Globe, 
  Sparkles, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  DollarSign, 
  HelpCircle,
  Lightbulb,
  Building2,
  UserCheck,
  Zap,
  TrendingUp,
  Copy
} from 'lucide-react';

interface BrandSuggestionsTabProps {
  currentConfig: BadgeConfig;
  onApplyBrand: (brand: BrandSuggestion, domain: string) => void;
}

export const BrandSuggestionsTab: React.FC<BrandSuggestionsTabProps> = ({ 
  currentConfig, 
  onApplyBrand 
}) => {
  const [filterVibe, setFilterVibe] = useState<string>('all');
  const [copiedDomain, setCopiedDomain] = useState<string | null>(null);

  // Custom domain explorer simulator
  const [customKeyword, setCustomKeyword] = useState('marti');
  const [customSuffix, setCustomSuffix] = useState('studio');

  const filteredBrands = filterVibe === 'all' 
    ? BRAND_SUGGESTIONS 
    : BRAND_SUGGESTIONS.filter(b => b.vibe === filterVibe);

  const handleCopyDomain = (domain: string) => {
    navigator.clipboard.writeText(domain);
    setCopiedDomain(domain);
    setTimeout(() => setCopiedDomain(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Hero Recommendation Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-neutral-900 to-neutral-950 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Check size={13} />
            <span>¡Excelente Elección! Dominio Confirmado: tineztudio.app</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Tinez Studio (<span className="text-emerald-400 font-mono">tineztudio.app</span>)
          </h2>

          <p className="text-neutral-300 text-sm leading-relaxed">
            Has elegido una combinación impecable. <strong>Tinez Studio</strong> suena moderno, contundente y con identidad de autor. Además, el TLD <strong>.app</strong> es gestionado por Google Registry y <em>exige HTTPS por defecto</em>, lo que transmite seguridad técnica absoluta a tus clientes. Comprarlo en <strong>Cloudflare</strong> es la mejor decisión: cero sobreprecios y renovación al costo exacto.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Check size={14} />
              <span>Registrador: Cloudflare Registrar (~$14-$15/año)</span>
            </div>
            <div className="flex items-center gap-1.5 text-indigo-400">
              <Check size={14} />
              <span>WHOIS Privacy & DNS Anycast Gratis</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <Check size={14} />
              <span>Alojamiento Gratis disponible en Cloudflare Pages</span>
            </div>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Cloudflare Quick Buy Action Card */}
      <div className="rounded-2xl border border-emerald-800/50 bg-gradient-to-r from-emerald-950/30 via-neutral-900 to-neutral-950 p-6 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">Paso a Paso en Cloudflare</span>
            <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
              Cómo comprar <span className="font-mono text-emerald-300">tineztudio.app</span> en Cloudflare Registrar
            </h3>
          </div>
          <a
            href="https://dash.cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-lg shadow-orange-600/20"
          >
            <span>Ir a Cloudflare Dashboard</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-1.5">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold flex items-center justify-center">1</span>
            <div className="font-semibold text-white">Crea tu cuenta</div>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Ingresa a <em>dash.cloudflare.com</em> con tu correo (puedes usar tu cuenta de Google) de forma gratuita.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-1.5">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold flex items-center justify-center">2</span>
            <div className="font-semibold text-white">Busca el dominio</div>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              En el menú izquierdo ve a <strong>Domain Registration &gt; Register Domains</strong> y busca <code>tineztudio.app</code>.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-1.5">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold flex items-center justify-center">3</span>
            <div className="font-semibold text-white">Finaliza la compra</div>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Pagarás solo la tarifa al costo de registro (~$14-$15/año). Sin cargos ocultos y con protección de datos WHOIS gratis.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-1.5">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold flex items-center justify-center">4</span>
            <div className="font-semibold text-white">Alojamiento Gratis</div>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              En la pestaña <strong>Compute &gt; Pages</strong> subes tu portafolio y lo conectas a <code>tineztudio.app</code> con 1 clic.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <span className="text-xs text-neutral-400 font-medium mr-2">Filtrar por estilo:</span>
        {[
          { id: 'all', label: 'Todos los Nombres' },
          { id: 'Personal Studio', label: 'Estudio Personal (Marti)' },
          { id: 'Agencia Corporativa', label: 'Agencia Corporativa' },
          { id: 'Conversión Rápida', label: 'Enfoque en Ventas' },
          { id: 'Tech Moderno', label: 'Tech & Minimal' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterVibe(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
              filterVibe === tab.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Brand Suggestions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredBrands.map((brand) => {
          const primaryDomain = brand.recommendedDomains.find(d => d.isPrimary) || brand.recommendedDomains[0];
          const isSelected = currentConfig.brandName === brand.name;

          return (
            <div
              key={brand.id}
              className={`rounded-2xl border transition-all p-5 flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-950/30 border-indigo-500 ring-2 ring-indigo-500/20'
                  : 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-bold text-white text-base shadow-md">
                      {brand.logoLetter}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white tracking-tight flex items-center gap-2">
                        {brand.name}
                        {isSelected && (
                          <span className="text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded-full font-semibold">
                            Activo
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-neutral-400">{brand.tagline}</p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {brand.vibe}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {brand.description}
                </p>

                {/* Domains List */}
                <div className="space-y-2 mb-4">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block">
                    Opciones de Dominio Disponibles:
                  </span>
                  
                  {brand.recommendedDomains.map((dom, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 text-xs transition-colors ${
                        dom.isPrimary 
                          ? 'bg-indigo-950/40 border-indigo-800/60 text-white' 
                          : 'bg-neutral-950/80 border-neutral-800 text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Globe size={14} className={dom.isPrimary ? 'text-indigo-400 shrink-0' : 'text-neutral-500 shrink-0'} />
                        <span className="font-mono font-semibold truncate">{dom.domain}</span>
                        {dom.isPrimary && (
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-medium shrink-0">
                            Mejor Opción
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-neutral-400 text-[11px]">{dom.avgPriceYear}</span>
                        <button
                          onClick={() => handleCopyDomain(dom.domain)}
                          className="p-1 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                          title="Copiar dominio"
                        >
                          {copiedDomain === dom.domain ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Watermark preview banner */}
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-400 flex items-center justify-between mb-4">
                  <span className="text-[11px]">Cómo se verá en la web:</span>
                  <span className="font-medium text-neutral-200 bg-neutral-900 px-2.5 py-1 rounded-lg border border-neutral-800">
                    {brand.watermarkSnippet}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onApplyBrand(brand, primaryDomain.domain)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25'
                }`}
              >
                {isSelected ? (
                  <>
                    <Check size={14} />
                    <span>Marca Actualmente Aplicada a tus Marcas de Agua</span>
                  </>
                ) : (
                  <>
                    <Zap size={14} />
                    <span>Usar &quot;{brand.name}&quot; y Dominio en mi Marca de Agua</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Guide: How and Where to Register your Domain */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-5">
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <Building2 size={18} className="text-indigo-400" />
          <span>Guía Paso a Paso: Dónde Comprar tu Dominio sin Pagar de Más</span>
        </div>

        <p className="text-xs text-neutral-300 leading-relaxed">
          Muchos registradores cobran $1 el primer año pero aumentan a $35 el segundo año con renovaciones sorpresa. Te recomendamos proveedores 100% transparentes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REGISTRAR_GUIDE.map((reg, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm text-white">{reg.name}</h4>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-medium">
                    {reg.badge}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {reg.pros}
                </p>
              </div>

              <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-1">
                <span>{reg.url}</span>
                <ExternalLink size={11} />
              </div>
            </div>
          ))}
        </div>

        {/* Top Recommendation Summary */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-neutral-950 to-neutral-950 border border-emerald-800/40 text-xs text-neutral-300 flex items-start gap-3">
          <ShieldCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-1">El veredicto final para tu caso:</strong>
            <p className="leading-relaxed">
              Si quieres la opción más sólida y profesional: registra <strong className="text-emerald-300">martistudio.dev</strong> en <em>Cloudflare Registrar</em> o <em>Google Registry / Porkbun</em> por ~$12/año. El dominio <code>.dev</code> le dice de inmediato a cualquier cliente que dominas el código y desarrollo moderno, mientras que &quot;Marti&quot; suena limpio, memorable y exclusivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
