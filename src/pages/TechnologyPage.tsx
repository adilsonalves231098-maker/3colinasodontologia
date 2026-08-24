import React from 'react';
import { InteractiveDental3DViewer } from '../components/3d/InteractiveDental3DViewer';
import { TECH_HIGHLIGHTS, CLINIC_INFO, getWhatsAppBookingUrl } from '../data/clinicData';
import { 
  Zap, Scan, Eye, Cpu, ShieldCheck, ArrowRight, Sparkles, Check, 
  Activity, Layers, Monitor, Binary
} from 'lucide-react';

interface TechnologyPageProps {
  onOpenBooking: (treatmentTitle?: string) => void;
  onNavigatePage: (page: string) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({
  onOpenBooking,
  onNavigatePage,
}) => {
  return (
    <div className="pt-24 pb-24 bg-[#0B0F19] text-white min-h-screen">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#48C0BA]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest rounded-full mb-3">
          <Binary className="w-3.5 h-3.5 text-[#48C0BA]" />
          Laboratório Digital & Diagnóstico 3D
        </div>

        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
          Tecnologia 3D, Inteligência Clínica & Precisão Micrométrica
        </h1>
        
        <p className="mt-4 text-base sm:text-lg text-white/70 font-light max-w-3xl leading-relaxed">
          Substituímos o desconforto das moldagens em pasta por um ecossistema 100% digital. Da primeira foto óptica até a impressão 3D e planejamento com software ClinCheck®, cada milímetro é controlado para máxima previsibilidade.
        </p>
      </div>

      {/* Interactive 3D Scanner Studio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <InteractiveDental3DViewer
                height="460px"
                initialMode="scanner"
                showControls={true}
              />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#48C0BA] tracking-widest font-semibold">
                  Intraoral Optical Scanning
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-white mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                  iTero Element 5D Plus
                </h2>
                <p className="text-sm text-white/70 font-light mt-2 leading-relaxed">
                  O padrão ouro mundial em ortodontia digital. Captura em segundos a oclusão, desgaste dentário, movimentação progressiva e lesões cariosas interproximais através de luz infravermelha (NIRI).
                </p>
              </div>

              {/* Live Telemetry Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-teal-400">Precisão Óptica</span>
                  <p className="text-xl font-bold text-white mt-0.5">20 micras</p>
                  <span className="text-[10px] text-white/50">Fidelidade anatômica</span>
                </div>

                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-teal-400">Velocidade</span>
                  <p className="text-xl font-bold text-white mt-0.5">6.000 fotos/s</p>
                  <span className="text-[10px] text-white/50">Escaneamento total em 60s</span>
                </div>

                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-teal-400">Simulação Imediata</span>
                  <p className="text-xl font-bold text-white mt-0.5">Outcome Simulator</p>
                  <span className="text-[10px] text-white/50">Visualização do resultado</span>
                </div>

                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-teal-400">Detecção NIRI</span>
                  <p className="text-xl font-bold text-white mt-0.5">Zero Radiação</p>
                  <span className="text-[10px] text-white/50">Luz infravermelha segura</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking('Escaneamento 3D com iTero')}
                className="w-full py-4 px-6 bg-[#48C0BA] hover:bg-[#3db0aa] text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all"
              >
                <Scan className="w-4 h-4" />
                <span>Agendar Meu Escaneamento 3D</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Tech Highlights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase text-[#48C0BA] tracking-widest">
            Fluxo Digital Completo
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-white mt-1" style={{ fontFamily: 'Georgia, serif' }}>
            Do diagnóstico digital à impressão 3D
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_HIGHLIGHTS.map((tech) => (
            <div
              key={tech.id}
              className="bg-[#111827] border border-white/10 hover:border-teal-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-[#48C0BA]">
                  <Cpu className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-teal-400">
                    {tech.subtitle}
                  </span>
                  <h3 className="text-lg font-medium text-white mt-0.5">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-white/70 font-light mt-2 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <div>
                  <span className="text-base font-bold text-[#48C0BA] font-mono">{tech.metric}</span>
                  <p className="text-[10px] text-white/50">{tech.metricLabel}</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Contact Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-teal-950/60 to-slate-900 border border-teal-500/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl sm:text-3xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Experimente a odontologia sem moldagens antigas
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Agende sua consulta e veja a projeção 3D do seu sorriso em tempo real com a Dra. Elisa e equipe.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking('Avaliação de Tecnologia Digital 3D')}
            className="px-8 py-4 bg-[#48C0BA] hover:bg-[#3db0aa] text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center gap-2 shadow-xl whitespace-nowrap transition-all"
          >
            <span>Falar com o Concierge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
