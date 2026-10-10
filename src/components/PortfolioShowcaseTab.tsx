import React, { useState } from 'react';
import { BadgeConfig } from '../types';
import { MOCK_CLIENT_SITES } from '../data/mockClientSites';
import { 
  Globe, 
  Sparkles, 
  ArrowUpRight, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Phone, 
  MessageSquare,
  Award,
  Layers,
  Code2,
  Sliders,
  Share2,
  Copy,
  Check
} from 'lucide-react';

interface PortfolioShowcaseTabProps {
  config: BadgeConfig;
}

export const PortfolioShowcaseTab: React.FC<PortfolioShowcaseTabProps> = ({ config }) => {
  const [copiedShare, setCopiedShare] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const handleCopyPortfolioUrl = () => {
    navigator.clipboard.writeText(config.portfolioUrl);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Portfolio Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border border-neutral-800 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Estudio Web de Alta Conversión • Disponible para Nuevos Proyectos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {config.brandName}
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            {config.subtitle} • Diseñamos páginas de aterrizaje que no solo se ven elegantes, sino que convierten visitas en clientes de pago para empresas y profesionales.
          </p>

          {/* Social Proof & Portfolio domain banner */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyPortfolioUrl}
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Globe size={13} className="text-indigo-400" />
              <span>{config.portfolioUrl}</span>
              {copiedShare ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} className="opacity-50" />}
            </button>

            {config.whatsappContact && (
              <a
                href={`https://wa.me/${config.whatsappContact.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(config.brandName)},%20quiero%20cotizar%20una%20landing%20page`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-colors"
              >
                <MessageSquare size={13} />
                <span>Hablar por WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Projects Showcase: The 4 Sites */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers size={18} className="text-indigo-400" />
              <span>Casos de Estudio & Landing Pages Desarrolladas ({MOCK_CLIENT_SITES.length})</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Tus clientes verán esta vitrina cuando hagan clic en la marca de agua de cualquiera de tus sitios.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-xl border border-neutral-800 text-xs">
            <span className="text-neutral-400 px-2">Filtro:</span>
            {['all', 'Salud', 'SaaS', 'Gastronomía', 'Inmobiliaria'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedTag === cat 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat === 'all' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* The 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_CLIENT_SITES.map((site, index) => (
            <div
              key={site.id}
              className="group rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-all p-6 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl"
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs flex items-center justify-center">
                      0{index + 1}
                    </span>
                    <div>
                      <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider block">
                        {site.category}
                      </span>
                      <h3 className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">
                        {site.title}
                      </h3>
                    </div>
                  </div>

                  <span className="p-2 rounded-xl bg-neutral-800/80 text-neutral-400 group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                {/* Hero preview card */}
                <div className={`p-4 rounded-xl bg-gradient-to-br ${site.themeColor} border border-neutral-800/80 mb-4`}>
                  <p className="text-xs font-semibold text-white/90 line-clamp-1 mb-1">
                    &quot;{site.heroHeadline}&quot;
                  </p>
                  <p className="text-[11px] text-neutral-300 line-clamp-2">
                    {site.heroSubheadline}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400">Cliente: <strong className="text-white">{site.clientName}</strong></span>
                    <span className="text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/50">
                      ✓ En producción
                    </span>
                  </div>
                </div>

                {/* Impact metric */}
                <div className="mb-4 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                  <Award size={14} className="shrink-0 text-emerald-400" />
                  <span><strong>Impacto:</strong> {site.conversionStat}</span>
                </div>

                {/* Features chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {site.features.map((feat, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 text-[11px]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Agency watermark badge reminder */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <ShieldCheck size={13} className="text-indigo-400" />
                  <span>Lleva tu marca: <strong>{config.brandName}</strong></span>
                </span>

                <span className="text-indigo-400 hover:text-indigo-300 font-medium text-[11px] flex items-center gap-1">
                  Ver Detalles ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services / How you work with clients */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 space-y-6">
        <div className="max-w-xl">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Metodología de Trabajo</span>
          <h3 className="text-xl font-bold text-white tracking-tight mt-1">
            Por Qué los Clientes Confían en {config.brandName}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
              <Zap size={16} />
            </div>
            <h4 className="font-semibold text-sm text-white">Velocidad & Conversión</h4>
            <p className="text-neutral-400 leading-relaxed text-[11.5px]">
              Estructura pensada para retener al usuario, con tiempos de carga inferiores a 1 segundo y botones de llamada a la acción optimizados.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
              <ShieldCheck size={16} />
            </div>
            <h4 className="font-semibold text-sm text-white">Diseño Exclusivo y Serio</h4>
            <p className="text-neutral-400 leading-relaxed text-[11.5px]">
              Sin plantillas genéricas. Cada proyecto se diseña a medida respetando la identidad del cliente con estándares visuales premium.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
              <CheckCircle2 size={16} />
            </div>
            <h4 className="font-semibold text-sm text-white">Integración & Analítica</h4>
            <p className="text-neutral-400 leading-relaxed text-[11.5px]">
              Conexión directa con WhatsApp Business, CRM, formularios y píxeles de Facebook / Google Ads para medir cada cliente potencial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
