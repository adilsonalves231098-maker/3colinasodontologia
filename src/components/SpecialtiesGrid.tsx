import React, { useState } from 'react';
import { TREATMENTS, INSTAGRAM_HIGHLIGHTS } from '../data/clinicData';
import { Treatment } from '../types';
import { ArrowUpRight, Check, Clock, Sparkles, X, ChevronRight, ArrowRight } from 'lucide-react';

interface SpecialtiesGridProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const SpecialtiesGrid: React.FC<SpecialtiesGridProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'invisalign', label: 'Invisalign®' },
    { id: 'preenchimento', label: 'Preenchimento' },
    { id: 'tox-botulinica', label: 'Tox. Botulínica' },
    { id: 'clareamento', label: 'Clareamento' },
    { id: 'protese', label: 'Prótese' },
    { id: 'profilaxia', label: 'Profilaxia' },
  ];

  const handleHighlightClick = (highlight: typeof INSTAGRAM_HIGHLIGHTS[0]) => {
    if (highlight.id === 'destaques') {
      const el = document.getElementById('espaco') || document.getElementById('corpo-clinico');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setSelectedCategory(highlight.id);
    const matched = TREATMENTS.find(t => t.category === highlight.id || t.id === highlight.targetId);
    if (matched) {
      const card = document.getElementById(`treatment-card-${matched.id}`);
      card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const filteredTreatments = selectedCategory === 'todos'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-[#FDFCFB] relative border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#48C0BA]"></span>
            <span className="text-[10px] tracking-[0.3em] text-[#48C0BA] uppercase font-bold">
              Serviços & Procedimentos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Tratamentos planejados com <span className="italic text-[#48C0BA]">precisão digital</span> e visão biológica.
          </h2>
          <p className="mt-3 text-[#1A1A1A]/70 font-light text-sm sm:text-base leading-relaxed">
            Conheça os procedimentos especializados da 3 Colinas Odontologia com a Dra. Elisa G. da Rocha e equipe integrada.
          </p>
        </div>

        {/* Instagram Highlights Interactive Circles Carousel */}
        <div className="mb-12 p-6 sm:p-8 bg-[#1A1A1A] border border-[#1A1A1A] shadow-md text-white">
          <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#48C0BA] animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/90">
                Destaques Clínicos • Toque para Explorar
              </span>
            </div>
            <span className="text-[10px] text-white/50 tracking-wider hidden sm:inline-block">
              @3colinasodontologia
            </span>
          </div>

          {/* Highlights Row */}
          <div className="flex items-start gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2">
            {INSTAGRAM_HIGHLIGHTS.map((item) => {
              const isActive = selectedCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleHighlightClick(item)}
                  className="flex flex-col items-center group shrink-0 focus:outline-none transition-transform duration-200 active:scale-95"
                  title={`Ver detalhes de ${item.title}`}
                >
                  {/* Circular Ring Container */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] transition-all duration-300 flex items-center justify-center ${
                    isActive 
                      ? 'bg-gradient-to-tr from-[#48C0BA] via-white to-[#48C0BA] ring-2 ring-[#48C0BA] scale-105' 
                      : 'bg-gradient-to-tr from-white/30 via-[#48C0BA]/70 to-white/40 group-hover:scale-105'
                  }`}>
                    <div className="w-full h-full rounded-full bg-[#FFFFFF] flex items-center justify-center p-1 overflow-hidden shadow-inner">
                      {item.iconType === 'team-photo' && item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover rounded-full filter contrast-[1.1]"
                        />
                      ) : (
                        /* Tooth with golden/champagne circle ring matching user's highlight icons */
                        <svg viewBox="0 0 80 80" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Inner golden/amber ring */}
                          <circle cx="40" cy="40" r="32" stroke="#D4AF37" strokeWidth="1.8" className="opacity-90" />
                          {/* Stylized Tooth Icon */}
                          <path 
                            d="M 28 32 C 28 26, 33 24, 40 24 C 47 24, 52 26, 52 32 C 52 38, 54 44, 52 52 C 50 55, 46 56, 44 48 C 42 44, 41 45, 40 45 C 39 45, 38 44, 36 48 C 34 56, 30 55, 28 52 C 26 44, 28 38, 28 32 Z" 
                            stroke="#B39226" 
                            strokeWidth="1.8" 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Label */}
                  <span className={`mt-2 text-[11px] sm:text-xs tracking-tight transition-colors truncate max-w-[80px] sm:max-w-[90px] text-center ${
                    isActive ? 'font-bold text-[#48C0BA]' : 'font-normal text-white/90 group-hover:text-white'
                  }`}>
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 pb-6 overflow-x-auto no-scrollbar mb-10 border-b border-[#1A1A1A]/10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-transparent text-[#1A1A1A]/70 border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 hover:text-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment, index) => (
            <div
              key={treatment.id}
              className="group bg-[#FFFFFF] border border-[#1A1A1A]/15 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:border-[#1A1A1A] hover:shadow-md"
              id={`treatment-card-${treatment.id}`}
            >
              {/* Card Image Frame */}
              <div>
                <div className="relative h-60 overflow-hidden bg-[#E5E2DD] border-b border-[#1A1A1A]/10">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[9px] tracking-widest uppercase font-bold bg-[#1A1A1A] text-white">
                      {treatment.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#48C0BA]">
                    Procedimento 0{index + 1}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-normal text-[#1A1A1A] leading-snug group-hover:text-[#48C0BA] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                    {treatment.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
                    {treatment.summary}
                  </p>

                  <div className="pt-2">
                    <ul className="space-y-1.5 text-xs text-[#1A1A1A]/80 font-light">
                      {treatment.highlights.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#48C0BA] shrink-0 mt-1.5"></span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalTreatment(treatment)}
                  className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#48C0BA] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver Detalhes</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#48C0BA]" />
                </button>

                <button
                  onClick={() => onOpenBooking(treatment.title)}
                  className="w-8 h-8 border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
                  title="Agendar este serviço"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Treatment Modal / Drawer */}
      {activeModalTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FDFCFB] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#1A1A1A] relative p-6 sm:p-9 text-[#1A1A1A]">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalTreatment(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Badge & Category */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-[9px] tracking-widest uppercase font-bold bg-[#1A1A1A] text-white">
                {activeModalTreatment.badge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              {activeModalTreatment.title}
            </h3>

            <p className="mt-1 text-sm text-[#48C0BA] font-medium" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              {activeModalTreatment.subtitle}
            </p>

            <div className="mt-5 relative h-56 border border-[#1A1A1A]/10 overflow-hidden bg-[#E5E2DD]">
              <img
                src={activeModalTreatment.image}
                alt={activeModalTreatment.title}
                className="w-full h-full object-cover filter saturate-[0.85]"
              />
            </div>

            <div className="mt-6 space-y-4">
              <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
                {activeModalTreatment.fullDescription}
              </p>

              <div className="p-4 bg-[#E5E2DD]/50 border border-[#1A1A1A]/10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] block mb-1">
                  Para quem é indicado:
                </span>
                <p className="text-xs text-[#1A1A1A]/70 font-light">
                  {activeModalTreatment.forWhom}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] block mb-2">
                  Diferenciais do protocolo 3 Colinas:
                </span>
                <ul className="space-y-2">
                  {activeModalTreatment.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#1A1A1A]/75 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48C0BA] shrink-0 mt-1.5"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#1A1A1A]/60 font-light">
                <Clock className="w-3.5 h-3.5 text-[#48C0BA]" />
                <span>Previsão média: <strong className="text-[#1A1A1A] font-medium">{activeModalTreatment.durationEstimate}</strong></span>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const t = activeModalTreatment.title;
                  setActiveModalTreatment(null);
                  onOpenBooking(t);
                }}
                className="w-full py-3.5 border border-[#1A1A1A] bg-[#1A1A1A] hover:bg-black text-white text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Agendar Avaliação Deste Procedimento</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#48C0BA]" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
