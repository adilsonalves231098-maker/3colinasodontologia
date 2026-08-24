import React from 'react';
import { CLINIC_SPACES } from '../data/clinicData';
import { Coffee, VolumeX, Sparkles, Clock, ShieldCheck, Heart } from 'lucide-react';

export const ClinicSpaces: React.FC = () => {
  const amenities = [
    { icon: <VolumeX className="w-3.5 h-3.5" />, text: "Isolamento acústico e fones anti-ruído" },
    { icon: <Clock className="w-3.5 h-3.5" />, text: "Pontualidade e 1 paciente por horário" },
    { icon: <Coffee className="w-3.5 h-3.5" />, text: "Café especial e infusões selecionadas" },
    { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Rigor máximo de esterilização e biossegurança" },
  ];

  return (
    <section id="estrutura" className="py-24 md:py-32 bg-[#FDFCFB] relative border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#8C7E6A]"></span>
            <span className="text-[10px] tracking-[0.3em] text-[#8C7E6A] uppercase font-bold">
              Ambiente & Estrutura
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Um refúgio de tranquilidade projetado para o seu <span className="italic text-[#8C7E6A]">bem-estar</span>.
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-light text-sm sm:text-base leading-relaxed">
            Eliminamos os estímulos frios e impessoais de consultórios comuns. Cada detalhe da 3 Colinas foi pensado para transmitir serenidade, privacidade e conforto.
          </p>
        </div>

        {/* Spaces Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_SPACES.map((space) => (
            <div
              key={space.id}
              className="bg-[#FFFFFF] border border-[#1A1A1A]/15 overflow-hidden transition-all duration-300 group hover:border-[#1A1A1A]"
            >
              <div className="relative h-64 overflow-hidden bg-[#E5E2DD] border-b border-[#1A1A1A]/10">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg text-white font-normal" style={{ fontFamily: 'Georgia, serif' }}>
                    {space.title}
                  </h4>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sensory Amenities Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#E5E2DD]/40 border border-[#1A1A1A]/15">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs text-[#1A1A1A]/80 font-medium">
                <div className="w-7 h-7 border border-[#1A1A1A]/20 bg-white text-[#1A1A1A] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
