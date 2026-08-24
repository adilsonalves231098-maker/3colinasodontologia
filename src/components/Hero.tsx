import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ArrowUpRight, Sparkles, Scan, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTech: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTech }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] pt-28 pb-20 md:pt-36 md:pb-28 flex items-center overflow-hidden bg-[#FDFCFB]"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#1A1A1A]/5 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-0 right-12 w-[1px] h-full bg-[#1A1A1A]/5 pointer-events-none hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Architectural Visual Frame (5 cols on lg or 6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative bg-[#E5E2DD] p-4 sm:p-6 lg:p-8 rounded-none border border-[#1A1A1A]/10">
              
              {/* Inner Framed Border with subtle white hairline */}
              <div className="border border-white/40 p-2 relative bg-gradient-to-tr from-[#D1CDC7] to-[#E5E2DD] overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src="/src/assets/images/dra_elisa_aligner_1787614197787.jpg"
                    alt="Dra. Elisa G. da Rocha - 3 Colinas Odontologia"
                    className="w-full h-[400px] sm:h-[480px] object-cover object-center filter saturate-[0.95] contrast-[1.02] hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent"></div>

                  {/* Architectural quote overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/80 mb-2">
                      Localizada em Florianópolis
                    </p>
                    <h2 className="text-white text-2xl sm:text-3xl leading-tight font-normal" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      Onde a arquitetura encontra a saúde.
                    </h2>
                  </div>
                </div>
              </div>

              {/* Editorial Vertical Sliders Accent on the side */}
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 flex flex-col space-y-2 hidden sm:flex">
                <div className="w-1 h-12 bg-[#1A1A1A]/15"></div>
                <div className="w-1 h-12 bg-[#1A1A1A]"></div>
                <div className="w-1 h-12 bg-[#1A1A1A]/15"></div>
              </div>

              {/* Floating Badge: Doctor Name */}
              <div className="absolute -bottom-4 -left-3 bg-[#FDFCFB] border border-[#1A1A1A] px-4 py-2.5 shadow-sm hidden sm:flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8C7E6A]"></span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-bold text-[#1A1A1A]">Dra. Elisa G. da Rocha</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#1A1A1A]/60 font-medium">Ortodontia Digital & Estética</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Copy & Typographic Hierarchy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-7">
            
            {/* Minimalist divider line & eyebrow */}
            <div>
              <span className="inline-block w-8 h-[1px] bg-[#8C7E6A] mb-4"></span>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#8C7E6A] font-bold">
                Ortodontia Digital • Estética Biológica
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight font-normal text-[#1A1A1A]" style={{ fontFamily: 'Georgia, serif' }}>
              Uma nova <br />
              perspectiva <br />
              <span className="italic text-[#8C7E6A]">clínica</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base leading-relaxed text-[#1A1A1A]/70 max-w-lg font-light">
              A 3 Colinas transcende a odontologia convencional. Unimos precisão técnica tridimensional, design minimalista e uma abordagem profundamente humana para redesenhar sorrisos e bem-estar.
            </p>

            {/* Numbered 01, 02, 03 Architectural Points */}
            <div className="space-y-4 pt-2 border-t border-[#1A1A1A]/10">
              
              <div className="flex items-start space-x-4 group cursor-pointer pt-2">
                <span className="text-[10px] font-bold text-[#1A1A1A]/30 group-hover:text-[#8C7E6A] transition-colors mt-0.5">01</span>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-0.5 text-[#1A1A1A] group-hover:text-[#8C7E6A] transition-colors">
                    Diagnóstico Digital 3D
                  </h3>
                  <p className="text-[11px] text-[#1A1A1A]/60 font-light leading-relaxed">
                    Escaneamento iTero milimétrico sem moldes desconfortáveis de gesso.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <span className="text-[10px] font-bold text-[#1A1A1A]/30 group-hover:text-[#8C7E6A] transition-colors mt-0.5">02</span>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-0.5 text-[#1A1A1A] group-hover:text-[#8C7E6A] transition-colors">
                    Estética Funcional & Alinhadores
                  </h3>
                  <p className="text-[11px] text-[#1A1A1A]/60 font-light leading-relaxed">
                    Harmonia biológica que respeita a personalidade e a saúde do seu sorriso.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <span className="text-[10px] font-bold text-[#1A1A1A]/30 group-hover:text-[#8C7E6A] transition-colors mt-0.5">03</span>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-0.5 text-[#1A1A1A] group-hover:text-[#8C7E6A] transition-colors">
                    Cuidado Imersivo & 1:1
                  </h3>
                  <p className="text-[11px] text-[#1A1A1A]/60 font-light leading-relaxed">
                    Ambiente silencioso, isolamento acústico e pontualidade rigorosa.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onOpenBooking}
                id="hero-primary-cta"
                className="border border-[#1A1A1A] bg-[#1A1A1A] text-white px-8 py-3.5 text-[10px] uppercase tracking-widest font-bold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Agendar Avaliação</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8C7E6A]" />
              </button>

              <button
                onClick={onExploreTech}
                id="hero-secondary-cta"
                className="border border-[#1A1A1A] px-7 py-3.5 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Ver Tecnologia 3D</span>
                <Sparkles className="w-3.5 h-3.5 text-[#8C7E6A]" />
              </button>
            </div>

            {/* Technical responsibility reference */}
            <div className="text-[10px] text-[#1A1A1A]/50 tracking-wider pt-2">
              Responsável Técnica: <strong className="text-[#1A1A1A] font-semibold">{CLINIC_INFO.technicalResponsible}</strong>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
