import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { ChevronDown, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'alinhadores', label: 'Alinhadores 3D' },
    { id: 'lentes', label: 'Lentes & Estética' },
    { id: 'conforto', label: 'Conforto & Medo' },
    { id: 'avaliacao', label: 'Primeira Consulta' },
    { id: 'financeiro', label: 'Formas de Pagamento' },
  ];

  const filteredFaqs = activeCategory === 'todos'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FDFCFB] relative border-b border-[#1A1A1A]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#8C7E6A]"></span>
            <span className="text-[10px] tracking-[0.3em] text-[#8C7E6A] uppercase font-bold">
              Perguntas Frequentes
            </span>
            <span className="h-[1px] w-8 bg-[#8C7E6A]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Tudo o que você precisa saber antes de <span className="italic text-[#8C7E6A]">nos visitar</span>.
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-light text-xs sm:text-sm leading-relaxed">
            Transparência absoluta em cada detalhe. Se a sua dúvida não estiver aqui, nossa equipe está sempre à disposição.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 pb-6 overflow-x-auto no-scrollbar mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-white text-[#1A1A1A]/60 border-[#1A1A1A]/20 hover:text-[#1A1A1A] hover:border-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#FFFFFF] border border-[#1A1A1A]/15 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 border border-[#1A1A1A]/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1A1A1A] text-white border-transparent' : 'text-[#1A1A1A] bg-white'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed border-t border-[#1A1A1A]/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout for Specific Questions */}
        <div className="mt-12 text-center p-8 bg-[#E5E2DD]/40 border border-[#1A1A1A]/15">
          <p className="text-lg sm:text-xl text-[#1A1A1A] font-normal" style={{ fontFamily: 'Georgia, serif' }}>
            Ficou com alguma dúvida específica sobre o seu caso?
          </p>
          <p className="text-xs text-[#1A1A1A]/70 font-light mt-1 mb-5">
            Nossa concierge de atendimento pode esclarecer detalhes antes da sua consulta.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#1A1A1A] bg-[#1A1A1A] hover:bg-black text-white text-[10px] font-bold uppercase tracking-widest transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#8C7E6A]" />
            <span>Falar com a Concierge no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
