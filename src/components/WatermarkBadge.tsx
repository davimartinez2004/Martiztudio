import React, { useState } from 'react';
import { BadgeConfig } from '../types';
import { 
  Sparkles, 
  Code2, 
  Layers, 
  Diamond, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight,
  MessageSquare,
  Globe,
  X
} from 'lucide-react';

interface WatermarkBadgeProps {
  config: BadgeConfig;
  isInteractivePreview?: boolean;
}

export const WatermarkBadge: React.FC<WatermarkBadgeProps> = ({ 
  config,
  isInteractivePreview = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Icon selector
  const renderIcon = () => {
    const size = 13;
    switch (config.icon) {
      case 'sparkles': return <Sparkles size={size} className="text-amber-400 shrink-0" />;
      case 'code': return <Code2 size={size} className="text-indigo-400 shrink-0" />;
      case 'layers': return <Layers size={size} className="text-cyan-400 shrink-0" />;
      case 'diamond': return <Diamond size={size} className="text-violet-400 shrink-0" />;
      case 'shield-check': return <ShieldCheck size={size} className="text-emerald-400 shrink-0" />;
      case 'terminal': return <Terminal size={size} className="text-emerald-400 shrink-0" />;
      case 'zap': return <Zap size={size} className="text-amber-400 shrink-0" />;
      default: return <Sparkles size={size} className="text-indigo-400 shrink-0" />;
    }
  };

  // Theme styling classes
  const getThemeStyles = () => {
    switch (config.theme) {
      case 'dark-glass':
        return 'bg-neutral-900/80 backdrop-blur-md text-neutral-200 border-neutral-800/80 hover:border-neutral-700 shadow-xl shadow-black/40 hover:text-white';
      case 'cyber-dark':
        return 'bg-black/90 backdrop-blur-lg text-neutral-200 border-indigo-500/30 hover:border-indigo-400/70 shadow-lg shadow-indigo-950/30 hover:shadow-indigo-500/20';
      case 'light-glass':
        return 'bg-white/85 backdrop-blur-md text-neutral-800 border-neutral-200/90 hover:border-neutral-300 shadow-lg shadow-black/5 hover:text-black';
      case 'pure-minimal':
        return 'bg-neutral-950/90 text-neutral-300 border-neutral-800 hover:border-neutral-600 shadow-md';
      case 'indigo-glow':
        return 'bg-indigo-950/80 backdrop-blur-md text-indigo-100 border-indigo-700/50 hover:border-indigo-500 shadow-lg shadow-indigo-950/50';
      case 'emerald-verified':
        return 'bg-neutral-900/90 backdrop-blur-md text-emerald-100 border-emerald-800/50 hover:border-emerald-600 shadow-lg shadow-emerald-950/30';
      case 'luxury-gold':
        return 'bg-neutral-950/90 backdrop-blur-md text-amber-100 border-amber-800/40 hover:border-amber-600/70 shadow-lg shadow-amber-950/30';
      default:
        return 'bg-neutral-900/80 backdrop-blur-md text-neutral-200 border-neutral-800';
    }
  };

  // Position positioning classes
  const getPositionClasses = () => {
    if (config.style === 'minimal-signature' || config.position === 'footer-bar') {
      return 'relative w-full';
    }
    switch (config.position) {
      case 'bottom-right':
        return 'fixed bottom-4 right-4 z-50';
      case 'bottom-left':
        return 'fixed bottom-4 left-4 z-50';
      case 'bottom-center':
        return 'fixed bottom-4 left-1/2 -translate-x-1/2 z-50';
      default:
        return 'fixed bottom-4 right-4 z-50';
    }
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(config.portfolioUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. Style: Minimal Footer Signature Bar
  if (config.style === 'minimal-signature') {
    return (
      <div 
        className="w-full py-3 px-4 border-t border-white/5 text-center text-xs flex flex-wrap items-center justify-between gap-3 transition-opacity duration-300 select-none"
        style={{ opacity: config.opacityIdle }}
      >
        <div className="flex items-center gap-2 text-neutral-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>© {new Date().getFullYear()} Todos los derechos reservados</span>
        </div>
        
        <a 
          href={isInteractivePreview ? undefined : config.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isInteractivePreview) {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all text-xs font-medium cursor-pointer ${getThemeStyles()}`}
        >
          {renderIcon()}
          <span className="opacity-75">{config.prefix}:</span>
          <span className="font-semibold tracking-tight">{config.brandName}</span>
          <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    );
  }

  // 2. Style: Corner Ribbon
  if (config.style === 'corner-ribbon') {
    return (
      <div className={getPositionClasses()}>
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex items-center gap-2 pl-3 pr-3.5 py-1.5 rounded-tl-xl border-t border-l cursor-pointer transition-all duration-300 select-none shadow-2xl ${getThemeStyles()}`}
          style={{ opacity: config.opacityIdle }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = String(config.opacityIdle); }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {renderIcon()}
            <span className="text-[11px] font-medium tracking-tight">
              {config.prefix} <strong className="font-semibold">{config.brandName}</strong>
            </span>
          </div>
          <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>

        {/* Modal Popover */}
        {isOpen && renderPopoverModal()}
      </div>
    );
  }

  // 3. Style: Monogram Stamp
  if (config.style === 'monogram-stamp') {
    return (
      <div className={getPositionClasses()}>
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex items-center gap-2 p-1.5 pl-2 pr-2.5 rounded-full border cursor-pointer transition-all duration-300 select-none ${getThemeStyles()}`}
          style={{ opacity: config.opacityIdle }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = String(config.opacityIdle); }}
        >
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-[11px] text-white">
            {config.brandName.charAt(0)}
          </div>
          <span className="text-[11px] font-medium tracking-tight hidden sm:inline-block">
            {config.brandName}
          </span>
          {config.showVerified && (
            <ShieldCheck size={12} className="text-emerald-400" />
          )}
        </div>

        {isOpen && renderPopoverModal()}
      </div>
    );
  }

  // 4. Default: Floating Pill or Verified Card (Sleek Glassmorphic Capsule)
  return (
    <div className={getPositionClasses()}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-all duration-300 select-none ${getThemeStyles()} ${
          config.hoverEffect === 'lift' ? 'hover:-translate-y-0.5' : ''
        } ${config.hoverEffect === 'glow' ? 'hover:shadow-indigo-500/25' : ''}`}
        style={{ opacity: config.opacityIdle }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
        onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.opacity = String(config.opacityIdle); }}
      >
        {/* Status Dot */}
        {config.availableForHire && (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        )}

        {/* Studio Icon */}
        {renderIcon()}

        {/* Text */}
        <span className="opacity-70 text-[11px] font-normal hidden sm:inline">
          {config.prefix}
        </span>
        <span className="font-semibold text-[11.5px] tracking-tight">
          {config.brandName}
        </span>

        {/* Verified icon */}
        {config.showVerified && (
          <span title="Diseño Verificado" className="inline-flex items-center">
            <ShieldCheck size={13} className="text-emerald-400" />
          </span>
        )}

        <ArrowUpRight 
          size={12} 
          className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
        />
      </div>

      {isOpen && renderPopoverModal()}
    </div>
  );

  // Expanded Popover / Card for serious credibility
  function renderPopoverModal() {
    return (
      <div className={`absolute bottom-11 ${config.position === 'bottom-left' ? 'left-0' : 'right-0'} w-80 max-w-[calc(100vw-2rem)] rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/80 p-4 text-white shadow-2xl shadow-black/80 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200`}>
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-inner">
              {config.brandName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-semibold text-sm leading-tight text-white">
                  {config.brandName}
                </h4>
                {config.showVerified && (
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.2 rounded-full border border-emerald-500/30 flex items-center gap-0.5 font-medium">
                    <CheckCircle2 size={10} /> Verificado
                  </span>
                )}
              </div>
              <p className="text-[11px] text-neutral-400 leading-tight mt-0.5">
                {config.subtitle || 'Estudio de Landing Pages'}
              </p>
            </div>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        {/* Content body */}
        <div className="py-3 text-xs text-neutral-300 space-y-2.5">
          <p className="text-neutral-400 leading-relaxed text-[11.5px]">
            {config.customTagline || 'Este sitio web fue diseñado a medida con arquitectura moderna, alta velocidad de carga y optimización para captar clientes.'}
          </p>

          {config.availableForHire && (
            <div className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible para nuevos proyectos web</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
          <a
            href={config.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors shadow-lg shadow-indigo-600/20"
          >
            <Globe size={13} />
            <span>Ver Portafolio de Sitios Web</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>

          <div className="flex items-center gap-2">
            {config.whatsappContact ? (
              <a
                href={`https://wa.me/${config.whatsappContact.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(config.brandName)},%20vi%20tu%20marca%20en%20un%20sitio%20web%20y%20quiero%20cotizar%20una%20landing%20page`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs transition-colors"
              >
                <MessageSquare size={12} className="text-emerald-400" />
                <span>Contactar</span>
              </a>
            ) : null}

            <button
              onClick={handleCopyLink}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs transition-colors"
            >
              {copied ? <CheckCircle2 size={12} className="text-emerald-400" /> : <ExternalLink size={12} />}
              <span>{copied ? '¡Copiado!' : 'Copiar URL'}</span>
            </button>
          </div>
        </div>

        <div className="mt-2.5 text-center">
          <span className="text-[10px] text-neutral-500">
            {config.portfolioUrl.replace(/^https?:\/\//, '')}
          </span>
        </div>
      </div>
    );
  }
};
