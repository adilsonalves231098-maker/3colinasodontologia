import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Logo } from './Logo';
import { Sparkles, Shield, Heart } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FDFCFB] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Official Brand Emblem */}
        <div className="flex justify-center mb-2">
          <Logo size="lg" showText={false} />
        </div>

        <div className="inline-flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#48C0BA]"></span>
          <span className="text-[10px] tracking-[0.35em] text-[#48C0BA] uppercase font-bold">
            O Manifesto 3 Colinas
          </span>
          <span className="h-[1px] w-8 bg-[#48C0BA]"></span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-normal leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
          “Acreditamos que o sorriso autêntico não é uma fórmula padronizada, mas sim a expressão mais <span className="italic text-[#48C0BA]">harmônica e saudável</span> da sua própria história.”
        </h2>

        <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light max-w-2xl mx-auto leading-relaxed">
          Unimos a ciência do escaneamento digital 3D à sensibilidade artística da reabilitação biológica. Sem procedimentos invasivos desnecessários, sem promessas irresponsáveis e com respeito absoluto à sua anatomia e ao seu bem-estar.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-wider text-[#1A1A1A]/80 font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#48C0BA]"></span>
            <span>Sem moldes desconfortáveis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#48C0BA]"></span>
            <span>Planejamento facial digital</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#48C0BA]"></span>
            <span>Ambiente calmo e privativo</span>
          </div>
        </div>

      </div>
    </section>
  );
};

