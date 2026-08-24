import React, { useState } from 'react';
import { CLINICAL_CASES } from '../data/clinicData';
import { Sparkles, Check, ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react';

interface BeforeAfterGalleryProps {
  onOpenBooking: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);

  const activeCase = CLINICAL_CASES[activeCaseIndex];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const offsetX = clientX - rect.left;
    const newPos = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(newPos);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  return (
    <section id="resultados" className="py-24 md:py-32 bg-[#FDFCFB] relative overflow-hidden border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-[#1A1A1A]/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#8C7E6A]"></span>
              <span className="text-[10px] tracking-[0.3em] text-[#8C7E6A] uppercase font-bold">
                Casos Clínicos Reais
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Resultados autênticos, naturais e <span className="italic text-[#8C7E6A]">biologicamente equilibrados</span>.
            </h2>
          </div>

          {/* Case Navigation Tabs */}
          <div className="flex items-center gap-2 border border-[#1A1A1A]/20 p-1 bg-white">
            {CLINICAL_CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                  activeCaseIndex === idx
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                Caso 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="bg-[#FFFFFF] border border-[#1A1A1A]/20 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Interactive Before / After Split View (7 Cols) */}
            <div className="lg:col-span-7">
              <div 
                className="relative h-[340px] sm:h-[440px] overflow-hidden cursor-ew-resize select-none border border-[#1A1A1A]/20 bg-[#E5E2DD]"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                id="before-after-slider-container"
              >
                {/* AFTER IMAGE (Full Base) */}
                <img
                  src={activeCase.afterImage}
                  alt="Resultado Final"
                  className="absolute inset-0 w-full h-full object-cover filter saturate-[0.85] contrast-[1.05] pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-[#1A1A1A] text-white text-[9px] uppercase font-bold px-3 py-1 tracking-widest">
                  Depois (Final)
                </div>

                {/* BEFORE IMAGE (Clipped on Left) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImage}
                    alt="Situação Inicial"
                    className="absolute inset-0 w-full h-full object-cover filter saturate-[0.85] contrast-[1.05] max-w-none pointer-events-none"
                    style={{ width: '100%', minWidth: '100%' }}
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-white text-[9px] uppercase font-bold px-3 py-1 tracking-widest">
                    Antes (Inicial)
                  </div>
                </div>

                {/* Split Handle Line */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border-2 border-white text-white flex items-center justify-center shadow-lg">
                    <div className="flex items-center gap-0.5">
                      <ChevronLeft className="w-3 h-3 text-[#8C7E6A]" />
                      <ChevronRight className="w-3 h-3 text-[#8C7E6A]" />
                    </div>
                  </div>
                </div>

                {/* Instruction helper tag */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#1A1A1A]/85 text-white/90 text-[9px] tracking-widest uppercase px-3 py-1 pointer-events-none">
                  Arraste para comparar
                </div>
              </div>
            </div>

            {/* Case Details & Narrative (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#E5E2DD] text-[#1A1A1A] text-[9px] uppercase tracking-widest font-bold">
                  {activeCase.category}
                </span>
                <span className="text-xs text-[#1A1A1A]/60 flex items-center gap-1 font-light">
                  <Clock className="w-3.5 h-3.5 text-[#8C7E6A]" />
                  {activeCase.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                {activeCase.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
                {activeCase.description}
              </p>

              {/* Procedures included */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] block">
                  Procedimentos Integrados:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCase.procedures.map((proc, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#FDFCFB] border border-[#1A1A1A]/15 text-xs text-[#1A1A1A]/80 font-light flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C7E6A]"></span>
                      {proc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Patient quote snippet */}
              {activeCase.testimonialSnippet && (
                <div className="p-4 bg-[#E5E2DD]/40 border-l-2 border-[#8C7E6A] text-xs text-[#1A1A1A]/80 italic leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  “{activeCase.testimonialSnippet}”
                </div>
              )}

              {/* CTA button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 border border-[#1A1A1A] bg-[#1A1A1A] hover:bg-black text-white text-[10px] uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Avaliar Meu Sorriso com a Dra. Elisa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C7E6A]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
