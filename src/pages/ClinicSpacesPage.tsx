import React, { useState } from 'react';
import { CLINIC_SPACES, CLINIC_INFO, getWhatsAppBookingUrl } from '../data/clinicData';
import { 
  Sparkles, ShieldCheck, Heart, VolumeX, Sun, Coffee, 
  ArrowRight, MessageSquare, Check, MapPin
} from 'lucide-react';

interface ClinicSpacesPageProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const ClinicSpacesPage: React.FC<ClinicSpacesPageProps> = ({ onOpenBooking }) => {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState<number>(0);
  const activeSpace = CLINIC_SPACES[activeSpaceIndex] || CLINIC_SPACES[0];

  return (
    <div className="pt-24 pb-24 bg-[#FDFCFB] text-[#1A1A1A] min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-[#48C0BA] uppercase tracking-widest mb-2">
          <span className="h-[1px] w-6 bg-[#48C0BA]"></span>
          <span>Arquitetura Sensorial & Conforto</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
          Um Ambiente Planejado para o Seu Bem-Estar
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/70 font-light max-w-3xl leading-relaxed">
          Substituímos o frio ambiente hospitalar por uma atmosfera calma, com isolamento acústico, luz suave, aromaterapia e tecnologia integrada para que sua experiência seja leve do início ao fim.
        </p>
      </div>

      {/* Main Interactive Space Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F8F7F4] border border-[#1A1A1A]/10 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          {/* Main Space Photo with interactive badges */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-lg border border-white/60">
            <img
              src={activeSpace.image}
              alt={activeSpace.title}
              className="w-full h-[400px] sm:h-[500px] object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 bg-[#48C0BA] text-slate-950 text-[10px] uppercase tracking-widest font-black rounded-full inline-block mb-2">
                {activeSpace.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal" style={{ fontFamily: 'Georgia, serif' }}>
                {activeSpace.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light mt-1 max-w-xl leading-relaxed">
                {activeSpace.description}
              </p>
            </div>
          </div>

          {/* Space Selector list */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase text-[#8C7E6A] tracking-widest font-bold">
              Explorar Ambientes da Clínica
            </span>
            
            <div className="space-y-3">
              {CLINIC_SPACES.map((space, idx) => (
                <button
                  type="button"
                  key={space.id}
                  onClick={() => setActiveSpaceIndex(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex items-start gap-4 ${
                    activeSpaceIndex === idx
                      ? 'bg-white border-[#48C0BA] shadow-md'
                      : 'bg-white/50 border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 hover:bg-white'
                  }`}
                >
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1">
                    <span className="text-[10px] font-mono text-[#8C7E6A] uppercase font-bold">
                      {space.tag}
                    </span>
                    <h4 className="text-sm font-semibold text-[#1A1A1A]">
                      {space.title}
                    </h4>
                    <p className="text-xs text-[#1A1A1A]/60 line-clamp-1 mt-0.5">
                      {space.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking('Visita e Consulta na Clínica')}
                className="w-full py-4 px-6 bg-[#1A1A1A] hover:bg-black text-white text-xs uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#48C0BA]" />
                <span>Agendar Consulta e Conhecer o Espaço</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Sensory Philosophy Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-[#F4F2EE] rounded-2xl border border-[#1A1A1A]/10 space-y-4">
            <VolumeX className="w-6 h-6 text-[#8C7E6A]" />
            <h3 className="text-lg font-medium text-[#1A1A1A]">Conforto Acústico</h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
              Tratamento acústico de paredes e portas para silenciar ruídos de motores e proporcionar um ambiente relaxante.
            </p>
          </div>

          <div className="p-8 bg-[#F4F2EE] rounded-2xl border border-[#1A1A1A]/10 space-y-4">
            <Sun className="w-6 h-6 text-[#8C7E6A]" />
            <h3 className="text-lg font-medium text-[#1A1A1A]">Iluminação Circadiana</h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
              Luz indireta e temperatura de cor ajustada que previne ofuscamento visual e induz sensação de tranquilidade.
            </p>
          </div>

          <div className="p-8 bg-[#F4F2EE] rounded-2xl border border-[#1A1A1A]/10 space-y-4">
            <ShieldCheck className="w-6 h-6 text-[#8C7E6A]" />
            <h3 className="text-lg font-medium text-[#1A1A1A]">Biossegurança Hospitalar</h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
              Central de esterilização automatizada com monitoramento biológico rigoroso e materiais 100% esterilizados ou descartáveis.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
