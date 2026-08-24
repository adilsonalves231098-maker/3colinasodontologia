import React, { useState } from 'react';
import { TECH_HIGHLIGHTS } from '../data/clinicData';
import { Scan, Eye, Cpu, Check, ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface TechShowcaseProps {
  onOpenBooking: () => void;
}

export const DigitalTechShowcase: React.FC<TechShowcaseProps> = ({ onOpenBooking }) => {
  const [selectedTech, setSelectedTech] = useState(0);
  const [activeSimulationMode, setActiveSimulationMode] = useState<'initial' | 'projected'>('projected');

  const techIcons = [
    <Scan className="w-4 h-4" key="scan" />,
    <Layers className="w-4 h-4" key="layers" />,
    <ShieldCheck className="w-4 h-4" key="shield" />,
  ];

  return (
    <section id="tecnologia" className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#8C7E6A]"></span>
              <span className="text-[10px] tracking-[0.3em] text-[#8C7E6A] uppercase font-bold">
                Tecnologia de Precisão
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              A ciência digital a serviço do seu conforto e <span className="italic text-[#8C7E6A]">previsibilidade</span>.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
              Substituímos métodos invasivos e desconfortáveis por tecnologia tridimensional de alta definição. Você acompanha cada detalhe do planejamento antes de começar.
            </p>
          </div>
        </div>

        {/* Interactive Scanner & Workflow Showcase Card */}
        <div className="border border-white/20 p-6 sm:p-10 lg:p-12 bg-[#222222]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Tech Selector Tabs */}
            <div className="lg:col-span-5 space-y-4">
              <div className="pb-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C7E6A] font-bold">
                  Equipamentos & Protocolos Digitais
                </span>
              </div>

              {TECH_HIGHLIGHTS.map((tech, index) => {
                const isSelected = selectedTech === index;
                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTech(index)}
                    className={`w-full text-left p-5 transition-all duration-300 border flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[#1A1A1A] border-[#8C7E6A] text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                    id={`tech-selector-${index}`}
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center shrink-0 border transition-colors ${
                        isSelected
                          ? 'bg-[#8C7E6A] text-white border-[#8C7E6A]'
                          : 'bg-transparent text-white/70 border-white/20'
                      }`}
                    >
                      {techIcons[index]}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg text-white font-normal" style={{ fontFamily: 'Georgia, serif' }}>
                        {tech.name}
                      </h4>
                      <p className="text-xs text-white/60 mt-1 font-light">
                        {tech.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}

              <div className="pt-2">
                <div className="p-4 bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="text-2xl text-[#8C7E6A] font-normal" style={{ fontFamily: 'Georgia, serif' }}>
                    {TECH_HIGHLIGHTS[selectedTech].metric}
                  </div>
                  <div className="text-xs text-white/70 leading-tight font-light">
                    {TECH_HIGHLIGHTS[selectedTech].metricLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive 3D Scanner Simulation Screen */}
            <div className="lg:col-span-7">
              <div className="bg-[#141414] border border-white/20 p-6 relative overflow-hidden">
                
                {/* Simulated Screen Topbar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8C7E6A] animate-pulse"></span>
                    <span className="text-[#8C7E6A] uppercase tracking-widest text-[9px] font-bold">
                      iTero Digital Scanner 3D • Dra. Elisa Rocha
                    </span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/15 px-2.5 py-1 text-[10px] text-white/70 font-mono">
                    <Cpu className="w-3 h-3 text-[#8C7E6A]" />
                    <span>6.000 fps HD</span>
                  </div>
                </div>

                {/* Simulated Visual Comparison / Screen Frame */}
                <div className="mt-5 relative overflow-hidden bg-black/60 h-64 sm:h-80 border border-white/10 flex flex-col justify-between p-4">
                  <img
                    src={TECH_HIGHLIGHTS[selectedTech].image}
                    alt={TECH_HIGHLIGHTS[selectedTech].name}
                    className="absolute inset-0 w-full h-full object-cover opacity-35 filter contrast-125 saturate-[0.7]"
                  />
                  
                  {/* Digital Grid Subtle Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                  {/* Dynamic Simulation Tag */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-[#1A1A1A] border border-white/20 text-[9px] text-[#8C7E6A] uppercase tracking-widest font-bold">
                      Mapeamento Digital
                    </span>

                    {/* Interactive Toggle between Initial & Projected simulation */}
                    <div className="flex items-center gap-1 bg-black/80 p-1 border border-white/15">
                      <button
                        onClick={() => setActiveSimulationMode('initial')}
                        className={`px-3 py-1 text-[9px] uppercase tracking-wider font-bold transition-colors ${
                          activeSimulationMode === 'initial'
                            ? 'bg-[#8C7E6A] text-white'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Posição Inicial
                      </button>
                      <button
                        onClick={() => setActiveSimulationMode('projected')}
                        className={`px-3 py-1 text-[9px] uppercase tracking-wider font-bold transition-colors ${
                          activeSimulationMode === 'projected'
                            ? 'bg-white text-[#1A1A1A]'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Simulação 3D
                      </button>
                    </div>
                  </div>

                  {/* Info Overlay Box */}
                  <div className="relative z-10 bg-[#1A1A1A]/95 p-4 border border-white/15">
                    <p className="text-xs text-white/80 font-light leading-relaxed">
                      {TECH_HIGHLIGHTS[selectedTech].description}
                    </p>
                    <div className="mt-2.5 flex items-center gap-2 text-[11px] text-[#8C7E6A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C7E6A]"></span>
                      <span>{TECH_HIGHLIGHTS[selectedTech].patientBenefit}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA within tech card */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-white/60 font-light">
                    Deseja visualizar o escaneamento 3D do seu sorriso?
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white bg-white hover:bg-[#E5E2DD] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest transition-colors shadow-sm"
                  >
                    <span>Agendar Escaneamento 3D</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8C7E6A]" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
