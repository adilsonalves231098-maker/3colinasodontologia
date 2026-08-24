import React, { useState } from 'react';
import { PILLARS_DATA } from '../data/clinicData';
import { Scan, Sparkles, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ThreePillarsProps {
  onOpenBooking: () => void;
}

export const ThreePillarsConcept: React.FC<ThreePillarsProps> = ({ onOpenBooking }) => {
  const [activePillar, setActivePillar] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scan':
        return <Scan className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const pillarVisuals = [
    {
      title: "Diagnóstico Digital Tridimensional",
      tag: "Tecnologia iTero 3D",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85",
      benefits: [
        "Escaneamento intraoral de 6.000 fotos/segundo",
        "Visualização instantânea do antes/depois simulado",
        "Eliminação total do desconforto com moldes de pasta"
      ]
    },
    {
      title: "Preservação da Biologia & Estética Natural",
      tag: "Proporção Áurea",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=85",
      benefits: [
        "Sorrisos com luminosidade e translucidez real",
        "Mínimo ou nenhum desgaste da estrutura dental sadia",
        "Harmonia personalizada com a dinâmica do seu rosto"
      ]
    },
    {
      title: "Cuidado Individualizado & Sem Ansiedade",
      tag: "Hospitalidade Boutique",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85",
      benefits: [
        "Consultas com tempo exclusivo e sem salas de espera lotadas",
        "Ambiente planejado para relaxamento e acolhimento",
        "Explicação minuciosa e transparente de cada decisão"
      ]
    }
  ];

  return (
    <section id="conceito" className="py-24 md:py-32 bg-[#FDFCFB] relative overflow-hidden border-b border-[#1A1A1A]/10">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#8C7E6A]"></span>
            <span className="text-[10px] tracking-[0.3em] text-[#8C7E6A] uppercase font-bold">
              O Conceito das 3 Colinas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Três pilares para redefinir a sua <span className="italic text-[#8C7E6A]">experiência clínica</span>.
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-light text-sm sm:text-base leading-relaxed">
            Não somos uma franquia de tratamentos padronizados. Construímos a 3 Colinas sobre o equilíbrio entre tecnologia digital tridimensional, estética biológica autêntica e um acolhimento genuinamente humano.
          </p>
        </div>

        {/* Interactive 3 Pillars Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Pillar Selector Cards (Left) */}
          <div className="lg:col-span-6 space-y-4">
            {PILLARS_DATA.map((pillar, idx) => {
              const isActive = activePillar === idx;
              return (
                <div
                  key={pillar.number}
                  onClick={() => setActivePillar(idx)}
                  className={`p-6 sm:p-7 cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#FFFFFF] border-[#1A1A1A] shadow-sm'
                      : 'bg-[#E5E2DD]/40 border-[#1A1A1A]/10 hover:bg-[#E5E2DD]/80 hover:border-[#1A1A1A]/30'
                  }`}
                  id={`pillar-card-${idx}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 flex items-center justify-center transition-colors border ${
                          isActive
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                            : 'bg-transparent text-[#1A1A1A] border-[#1A1A1A]/20'
                        }`}
                      >
                        {getIcon(pillar.icon)}
                      </div>
                      <div>
                        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#8C7E6A]">
                          Pilar 0{pillar.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-normal text-[#1A1A1A]" style={{ fontFamily: 'Georgia, serif' }}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold tracking-widest ${isActive ? 'text-[#8C7E6A]' : 'text-[#1A1A1A]/30'}`}>
                      0{idx + 1}/03
                    </span>
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>

                  {isActive && (
                    <div className="mt-4 pt-3.5 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs text-[#1A1A1A] font-semibold animate-fade-in uppercase tracking-wider">
                      <span>{pillar.detail}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8C7E6A]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Pillar Detail Visual (Right) */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="bg-[#E5E2DD] p-7 sm:p-8 border border-[#1A1A1A]/20 shadow-sm relative overflow-hidden">
              
              {/* Inner White Frame Border */}
              <div className="border border-white/60 p-6 sm:p-7 bg-[#FDFCFB] relative">

                {/* Tag & Step */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#8C7E6A]">
                    {pillarVisuals[activePillar].tag}
                  </span>
                  <span className="text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest">
                    Pilar 0{PILLARS_DATA[activePillar].number} de 03
                  </span>
                </div>

                {/* Visual Image */}
                <div className="my-5 border border-[#1A1A1A]/10 h-52 sm:h-60 relative overflow-hidden bg-[#D1CDC7]">
                  <img
                    src={pillarVisuals[activePillar].image}
                    alt={pillarVisuals[activePillar].title}
                    className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.05] hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[11px] text-white/90 font-light">
                      Supervisão direta da Dra. Elisa G. da Rocha.
                    </p>
                  </div>
                </div>

                {/* Title & Key Benefits */}
                <div className="space-y-4">
                  <h4 className="text-xl sm:text-2xl font-normal text-[#1A1A1A]" style={{ fontFamily: 'Georgia, serif' }}>
                    {pillarVisuals[activePillar].title}
                  </h4>

                  <div className="space-y-2 pt-1">
                    {pillarVisuals[activePillar].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/70 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C7E6A] shrink-0 mt-1.5"></span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3.5 border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-black text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Conhecer Esta Abordagem</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8C7E6A]" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
