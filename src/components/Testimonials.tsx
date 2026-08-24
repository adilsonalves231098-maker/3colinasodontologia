import React from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-[#FDFCFB] relative overflow-hidden border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#8C7E6A]"></span>
            <span className="text-[10px] tracking-[0.3em] text-[#8C7E6A] uppercase font-bold">
              Prova Social & Confiança
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Histórias de quem confiou na abordagem da <span className="italic text-[#8C7E6A]">3 Colinas</span>.
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-light text-sm sm:text-base leading-relaxed">
            A verdadeira medida do nosso trabalho está na satisfação, na naturalidade do sorriso e na segurança sentida ao longo de todo o tratamento.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFFFFF] p-7 sm:p-8 border border-[#1A1A1A]/15 flex flex-col justify-between hover:border-[#1A1A1A] transition-colors"
            >
              <div className="space-y-4">
                {/* Rating & Treatment */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/10">
                  <div className="flex items-center gap-1 text-[#8C7E6A]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] tracking-widest uppercase font-bold text-[#1A1A1A] bg-[#E5E2DD] px-2.5 py-1">
                    {t.treatment}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug italic" style={{ fontFamily: 'Georgia, serif' }}>
                  “{t.quote}”
                </p>

                {/* Full story snippet */}
                <p className="text-xs text-[#1A1A1A]/70 font-light leading-relaxed">
                  {t.fullStory}
                </p>
              </div>

              {/* Patient signature */}
              <div className="pt-6 mt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-[#1A1A1A]">{t.patientName}</h4>
                  <p className="text-[10px] text-[#1A1A1A]/50 font-mono">{t.date}</p>
                </div>
                <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-[#1A1A1A] font-bold border border-[#1A1A1A]/15 px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C7E6A]"></span>
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
