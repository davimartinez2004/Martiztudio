import React, { useState } from 'react';
import { BadgeConfig } from '../types';
import { 
  Code, 
  Copy, 
  Check, 
  FileCode2, 
  Layers, 
  Sparkles,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface CodeExportPanelProps {
  config: BadgeConfig;
}

export const CodeExportPanel: React.FC<CodeExportPanelProps> = ({ config }) => {
  const [activeTab, setActiveTab] = useState<'html-css' | 'react' | 'script'>('html-css');
  const [copied, setCopied] = useState(false);

  // Position CSS mapping
  const getPositionCSS = () => {
    switch (config.position) {
      case 'bottom-left':
        return 'bottom: 16px; left: 16px;';
      case 'bottom-center':
        return 'bottom: 16px; left: 50%; transform: translateX(-50%);';
      case 'footer-bar':
        return 'position: relative; margin: 16px auto;';
      case 'bottom-right':
      default:
        return 'bottom: 16px; right: 16px;';
    }
  };

  // Generate pure HTML + inline CSS snippet
  const generateHTMLCode = () => {
    const isPill = config.style === 'floating-pill' || config.style === 'verified-card';
    const isFooter = config.style === 'minimal-signature' || config.position === 'footer-bar';

    if (isFooter) {
      return `<!-- ============================================== -->
<!-- MARCA DE AGUA EN FOOTER POR ${config.brandName.toUpperCase()} -->
<!-- Pega este bloque antes de </body> en tu sitio -->
<!-- ============================================== -->
<div class="sm-footer-credit" style="
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 12px;
  color: #9ca3af;
  opacity: ${config.opacityIdle};
  transition: opacity 0.25s ease;
" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='${config.opacityIdle}'">
  <span>© ${new Date().getFullYear()} Todos los derechos reservados</span>
  <span>•</span>
  <a href="${config.portfolioUrl}" target="_blank" rel="noopener" style="
    color: #e5e7eb;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 3px 10px;
    border-radius: 9999px;
  ">
    <span>${config.prefix}:</span>
    <span style="color: #6366f1;">${config.brandName}</span>
    <span style="font-size: 10px;">↗</span>
  </a>
</div>`;
    }

    return `<!-- ============================================== -->
<!-- MARCA DE AGUA DISCRETA POR ${config.brandName.toUpperCase()} -->
<!-- Pega este código justo antes de la etiqueta </body> -->
<!-- ============================================== -->
<a 
  href="${config.portfolioUrl}" 
  target="_blank" 
  rel="noopener"
  id="studio-watermark-badge"
  title="${config.prefix} ${config.brandName}"
  style="
    position: fixed;
    ${getPositionCSS()}
    z-index: 99999;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 9999px;
    background: rgba(15, 15, 20, 0.82);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #e5e7eb;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 12px;
    font-weight: 500;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
    opacity: ${config.opacityIdle};
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    user-select: none;
  "
  onmouseover="this.style.opacity='1'; this.style.transform='translateY(-2px)'; this.style.borderColor='rgba(99, 102, 241, 0.6)';"
  onmouseout="this.style.opacity='${config.opacityIdle}'; this.style.transform='none'; this.style.borderColor='rgba(255, 255, 255, 0.12)';"
>
  <!-- Punto indicador de estatus -->
  <span style="
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
  "></span>

  <span style="color: #9ca3af; font-size: 11px;">${config.prefix}</span>
  <strong style="color: #ffffff; font-weight: 600; letter-spacing: -0.2px;">${config.brandName}</strong>
  <span style="font-size: 11px; opacity: 0.7;">↗</span>
</a>`;
  };

  // Generate React / Tailwind component
  const generateReactCode = () => {
    return `import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const StudioWatermark: React.FC = () => {
  return (
    <a
      href="${config.portfolioUrl}"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed ${config.position === 'bottom-left' ? 'bottom-4 left-4' : config.position === 'bottom-center' ? 'bottom-4 left-1/2 -translate-x-1/2' : 'bottom-4 right-4'} z-50 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 backdrop-blur-md border border-neutral-800 hover:border-indigo-500/50 text-neutral-300 hover:text-white text-xs font-medium shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group select-none"
      style={{ opacity: ${config.opacityIdle} }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '${config.opacityIdle}'; }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>

      <span className="text-[11px] text-neutral-400 font-normal">${config.prefix}</span>
      <span className="font-semibold text-white tracking-tight">${config.brandName}</span>
      
      ${config.showVerified ? `<ShieldCheck size={13} className="text-emerald-400" />` : ''}
      <ExternalLink size={11} className="opacity-60 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};

export default StudioWatermark;`;
  };

  // Generate 1-line script tag for instant installation
  const generateScriptCode = () => {
    return `<!-- ============================================== -->
<!-- SCRIPT AUTOMÁTICO (Instalación en 1 Línea) -->
<!-- Copia y pega dentro del <head> o antes de </body> -->
<!-- ============================================== -->
<script>
(function() {
  var b = document.createElement('a');
  b.href = '${config.portfolioUrl}';
  b.target = '_blank';
  b.rel = 'noopener';
  b.innerHTML = '<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#10b981;margin-right:6px;box-shadow:0 0 6px #10b981;"></span><span style="color:#9ca3af;font-size:11px;margin-right:4px;">${config.prefix}</span><strong style="color:#fff;">${config.brandName}</strong> <span style="font-size:11px;opacity:.7;">↗</span>';
  b.style.cssText = 'position:fixed;${getPositionCSS()}z-index:99999;display:inline-flex;align-items:center;padding:6px 14px;border-radius:9999px;background:rgba(15,15,20,0.85);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.12);color:#e5e7eb;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:12px;opacity:${config.opacityIdle};transition:all .25s ease;box-shadow:0 10px 25px rgba(0,0,0,0.5);';
  b.onmouseover = function() { b.style.opacity = '1'; b.style.transform = 'translateY(-2px)'; };
  b.onmouseout = function() { b.style.opacity = '${config.opacityIdle}'; b.style.transform = 'none'; };
  document.body.appendChild(b);
})();
</script>`;
  };

  const getActiveCode = () => {
    switch (activeTab) {
      case 'html-css': return generateHTMLCode();
      case 'react': return generateReactCode();
      case 'script': return generateScriptCode();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-neutral-900/80 rounded-2xl border border-neutral-800 p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-800">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Code size={16} className="text-indigo-400" />
            <span>Código Listo para Tus 4 Sitios Web</span>
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Copia y pega en cualquiera de tus landing pages (WordPress, Webflow, React, HTML puro).
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
          <button
            onClick={() => setActiveTab('html-css')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'html-css' ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            HTML + CSS Universal
          </button>
          <button
            onClick={() => setActiveTab('react')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'react' ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            React / Tailwind
          </button>
          <button
            onClick={() => setActiveTab('script')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeTab === 'script' ? 'bg-indigo-600 text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Script 1-Línea
          </button>
        </div>
      </div>

      {/* Code Viewer */}
      <div className="relative">
        <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-mono overflow-x-auto max-h-[220px] leading-relaxed scrollbar-thin">
          <code>{getActiveCode()}</code>
        </pre>

        {/* Floating Copy Button */}
        <button
          onClick={handleCopy}
          className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg transition-all cursor-pointer ${
            copied
              ? 'bg-emerald-600 text-white shadow-emerald-600/30'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
          }`}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar Código'}</span>
        </button>
      </div>

      {/* Quick Guide for Platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
        <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
          <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>En WordPress</span>
          </div>
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            Ve a <em>Apariencia &gt; Editor de Archivos de Tema &gt; footer.php</em> o usa un plugin como <em>&quot;WPCode&quot;</em> e inserta el snippet en el Footer.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
          <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>En Webflow / Framer</span>
          </div>
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            Abre <em>Project Settings &gt; Custom Code &gt; Footer Code (Before &lt;/body&gt;)</em> y pega el código HTML/CSS directamente.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
          <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>En HTML / React</span>
          </div>
          <p className="text-neutral-400 text-[11px] leading-relaxed">
            Pégalo justo antes de la etiqueta de cierre <code>&lt;/body&gt;</code> en <code>index.html</code> o usa el componente React en tu Layout.
          </p>
        </div>
      </div>
    </div>
  );
};
