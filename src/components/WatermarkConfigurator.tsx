import React from 'react';
import { BadgeConfig, BadgePosition, BadgeStyle, BadgeTheme } from '../types';
import { 
  Sparkles, 
  Code2, 
  Layers, 
  Diamond, 
  ShieldCheck, 
  Terminal, 
  Zap,
  Sliders,
  Palette,
  Layout,
  Type,
  Eye,
  Phone,
  Link as LinkIcon
} from 'lucide-react';

interface WatermarkConfiguratorProps {
  config: BadgeConfig;
  onChange: (newConfig: BadgeConfig) => void;
}

export const WatermarkConfigurator: React.FC<WatermarkConfiguratorProps> = ({ config, onChange }) => {
  const update = (partial: Partial<BadgeConfig>) => {
    onChange({ ...config, ...partial });
  };

  const styleOptions: { id: BadgeStyle; title: string; desc: string }[] = [
    { id: 'floating-pill', title: 'Píldora Flotante', desc: 'Cápsula de cristal moderna en esquina' },
    { id: 'minimal-signature', title: 'Firma de Footer', desc: 'Discreta en la barra inferior del sitio' },
    { id: 'corner-ribbon', title: 'Pestaña de Esquina', desc: 'Etiqueta angular sutil en el borde' },
    { id: 'verified-card', title: 'Tarjeta Interactiva', desc: 'Con sello verificado y ventana modal' },
    { id: 'monogram-stamp', title: 'Sello Monograma', desc: 'Inicial minimalista con expansión al hover' },
  ];

  const themeOptions: { id: BadgeTheme; label: string; color: string }[] = [
    { id: 'dark-glass', label: 'Cristal Oscuro', color: 'bg-neutral-900 border-neutral-700' },
    { id: 'cyber-dark', label: 'Cyber Tech', color: 'bg-indigo-950 border-indigo-500' },
    { id: 'light-glass', label: 'Cristal Blanco', color: 'bg-white border-neutral-300 text-neutral-900' },
    { id: 'pure-minimal', label: 'Minimal Negro', color: 'bg-black border-neutral-800' },
    { id: 'emerald-verified', label: 'Esmeralda', color: 'bg-emerald-950 border-emerald-500' },
    { id: 'luxury-gold', label: 'Dorado / Lujo', color: 'bg-amber-950 border-amber-500' },
  ];

  const prefixOptions = [
    'Hecho por',
    'Diseño web por',
    'Crafted by',
    'Creado por',
    'Landing page por',
    'Desarrollo por'
  ];

  const iconOptions: { id: BadgeConfig['icon']; label: string; icon: any }[] = [
    { id: 'sparkles', label: 'Destello', icon: Sparkles },
    { id: 'code', label: 'Código', icon: Code2 },
    { id: 'layers', label: 'Capas', icon: Layers },
    { id: 'diamond', label: 'Diamante', icon: Diamond },
    { id: 'shield-check', label: 'Escudo', icon: ShieldCheck },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'zap', label: 'Rayo', icon: Zap },
  ];

  return (
    <div className="bg-neutral-900/80 rounded-2xl border border-neutral-800 p-5 space-y-6 text-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2 text-white font-semibold">
          <Sliders size={18} className="text-indigo-400" />
          <span>Personalizador de Marca de Agua</span>
        </div>
        <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          En Vivo
        </span>
      </div>

      {/* 1. Identity & Texts */}
      <div className="space-y-3">
        <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5 uppercase tracking-wider">
          <Type size={13} className="text-indigo-400" />
          1. Textos e Identidad
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] text-neutral-400 mb-1">Nombre de tu Estudio / Marca</label>
            <input
              type="text"
              value={config.brandName}
              onChange={(e) => update({ brandName: e.target.value })}
              placeholder="Ej: Marti Studio"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-xs focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] text-neutral-400 mb-1">Prefijo / Etiqueta</label>
            <select
              value={config.prefix}
              onChange={(e) => update({ prefix: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-xs focus:outline-none focus:border-indigo-500 transition-colors"
            >
              {prefixOptions.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] text-neutral-400 mb-1">Subtítulo / Especialidad</label>
            <input
              type="text"
              value={config.subtitle}
              onChange={(e) => update({ subtitle: e.target.value })}
              placeholder="Ej: Landing Pages de Alto Rendimiento"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-xs focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] text-neutral-400 mb-1 flex items-center gap-1">
              <LinkIcon size={11} className="text-indigo-400" />
              URL de tu Portafolio
            </label>
            <input
              type="text"
              value={config.portfolioUrl}
              onChange={(e) => update({ portfolioUrl: e.target.value })}
              placeholder="https://tineztudio.app"
              className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-xs focus:outline-none focus:border-indigo-500 transition-colors font-mono"
            />
          </div>
        </div>
      </div>

      {/* 2. Format & Style */}
      <div className="space-y-3">
        <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5 uppercase tracking-wider">
          <Layout size={13} className="text-indigo-400" />
          2. Formato Visual
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {styleOptions.map((st) => (
            <button
              key={st.id}
              onClick={() => update({ style: st.id })}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                config.style === st.id
                  ? 'bg-indigo-600/15 border-indigo-500 text-white shadow-sm'
                  : 'bg-neutral-950 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
              }`}
            >
              <div className="font-medium text-xs text-white">{st.title}</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{st.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Position & Theme */}
      <div className="space-y-3">
        <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5 uppercase tracking-wider">
          <Palette size={13} className="text-indigo-400" />
          3. Ubicación y Paleta
        </label>

        {/* Position */}
        <div>
          <label className="block text-[11px] text-neutral-400 mb-1.5">Posición en la pantalla:</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'bottom-right', label: 'Abajo Derecha' },
              { id: 'bottom-left', label: 'Abajo Izquierda' },
              { id: 'bottom-center', label: 'Centro Abajo' },
              { id: 'footer-bar', label: 'Barra de Footer' }
            ].map((pos) => (
              <button
                key={pos.id}
                onClick={() => update({ position: pos.id as BadgePosition })}
                className={`py-1.5 px-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer text-center ${
                  config.position === pos.id
                    ? 'bg-indigo-600 text-white border-indigo-500'
                    : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                {pos.label}
              </button>
            ))}
          </div>
        </div>

        {/* Theme */}
        <div>
          <label className="block text-[11px] text-neutral-400 mb-1.5">Estilo de color:</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {themeOptions.map((th) => (
              <button
                key={th.id}
                onClick={() => update({ theme: th.id })}
                className={`p-2 rounded-xl border text-xs flex items-center gap-2 transition-all cursor-pointer ${
                  config.theme === th.id
                    ? 'border-indigo-500 ring-2 ring-indigo-500/20 bg-neutral-800 text-white font-medium'
                    : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <span className={`w-3 h-3 rounded-full border ${th.color}`} />
                <span className="truncate">{th.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Icon & Subtle Opacity */}
      <div className="space-y-3">
        <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5 uppercase tracking-wider">
          <Eye size={13} className="text-indigo-400" />
          4. Icono & Discreción
        </label>

        {/* Icons */}
        <div>
          <label className="block text-[11px] text-neutral-400 mb-1.5">Icono miniatura:</label>
          <div className="flex flex-wrap gap-1.5">
            {iconOptions.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => update({ icon: item.id })}
                  className={`p-2 rounded-lg border flex items-center gap-1.5 text-xs transition-colors cursor-pointer ${
                    config.icon === item.id
                      ? 'bg-indigo-600 text-white border-indigo-500 font-medium'
                      : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                  }`}
                >
                  <IconComp size={13} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Opacity slider */}
        <div>
          <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
            <span>Opacidad en reposo (discreción):</span>
            <span className="text-white font-medium font-mono">{Math.round(config.opacityIdle * 100)}%</span>
          </div>
          <input
            type="range"
            min="0.3"
            max="1.0"
            step="0.05"
            value={config.opacityIdle}
            onChange={(e) => update({ opacityIdle: parseFloat(e.target.value) })}
            className="w-full accent-indigo-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
            <span>Ultra discreto (30%)</span>
            <span>Semi transparente (60%)</span>
            <span>Siempre visible (100%)</span>
          </div>
        </div>
      </div>

      {/* 5. Serious agency toggles */}
      <div className="space-y-2 pt-2 border-t border-neutral-800">
        <label className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
          Credenciales de seriedad
        </label>

        <label className="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:bg-neutral-900/60 transition-colors">
          <input
            type="checkbox"
            checked={config.showVerified}
            onChange={(e) => update({ showVerified: e.target.checked })}
            className="rounded accent-indigo-600 cursor-pointer"
          />
          <div className="flex-1">
            <span className="text-xs text-white font-medium flex items-center gap-1">
              <ShieldCheck size={13} className="text-emerald-400" />
              Sello &quot;Sitio Verificado por la Agencia&quot;
            </span>
            <p className="text-[11px] text-neutral-400">Genera máxima confianza en clientes y prospectos</p>
          </div>
        </label>

        <label className="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:bg-neutral-900/60 transition-colors">
          <input
            type="checkbox"
            checked={config.availableForHire}
            onChange={(e) => update({ availableForHire: e.target.checked })}
            className="rounded accent-indigo-600 cursor-pointer"
          />
          <div className="flex-1">
            <span className="text-xs text-white font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Indicador &quot;Disponible para nuevos proyectos&quot;
            </span>
            <p className="text-[11px] text-neutral-400">Atrae clientes potenciales que visiten los sitios de tus clientes</p>
          </div>
        </label>
      </div>
    </div>
  );
};
