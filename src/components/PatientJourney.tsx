import React from 'react';
import { ArrowRight, Ear, Scan, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface JourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<JourneyProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: "01",
      title: "Escutar & Compreender",
      subtitle: "Tempo exclusivo e sem julgamentos",
      description: "Iniciamos com uma conversa aprofundada para entender sua história, suas queixas funcionais e seus desejos estéticos. Sem pressa e em um ambiente acolhedor.",
      icon: <Ear className="w-4 h-4" />,
      detail: "Anamnese completa com foco na sua saúde integral e conforto."
    },
    {
      number: "02",
      title: "Diagnóstico 3D Sem Moldes",
      subtitle: "Precisão milimétrica instantânea",
      description: "Mapeamos sua arcada dentária com o scanner intraoral iTero Element em minutos, capturando imagens de altíssima definição sem massinhas desconfortáveis.",
      icon: <Scan className="w-4 h-4" />,
      detail: "Fotografia macro odontológica e visualização tridimensional na tela."
    },
    {
      number: "03",
      title: "Planejamento Compartilhado",
      subtitle: "Simulação prévia do resultado",
      description: "Você visualiza a projeção do seu novo sorriso antes de qualquer intervenção. Discutimos prazos, etapas e investimentos com total clareza e transparência.",
      icon: <Compass className="w-4 h-4" />,
      detail: "Zero surpresas: você participa ativamente de cada escolha."
    },
    {
      number: "04",
      title: "Transformação & Acompanhamento",
      subtitle: "Cuidado contínuo e longevidade",
      description: "Execução delicada através de alinhadores invisíveis ou cerâmicas de alta fidelidade biológica, com suporte constante e acompanhamento pós-tratamento.",
      icon: <Sparkles className="w-4 h-4" />,
      detail: "Retornos planejados para assegurar estabilidade e saúde duradoura."
    }
  ];

  return (
    <section id="jornada" className="py-24 md:py-32 bg-[#FDFCFB] relative overflow-hidden border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#8C7E6A]"></span>
            <span className="text-[10px] tracking-[0.3em] text-[#8C7E6A] uppercase font-bold">
              A Experiência do Paciente
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Uma jornada desenhada para devolver a <span className="italic text-[#8C7E6A]">tranquilidade</span> ao seu tratamento.
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-light text-sm sm:text-base leading-relaxed">
            Eliminamos a incerteza e a ansiedade através de processos transparentes, tecnologia digital e respeito absoluto ao seu tempo.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FFFFFF] p-7 border border-[#1A1A1A]/15 hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between relative group"
              id={`journey-step-${step.number}`}
            >
              {/* Step number badge */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10">
                  <span className="text-[10px] font-bold text-[#8C7E6A] tracking-widest uppercase">
                    Etapa {step.number}
                  </span>
                  <div className="w-8 h-8 border border-[#1A1A1A]/20 group-hover:bg-[#1A1A1A] group-hover:text-white group-hover:border-[#1A1A1A] text-[#1A1A1A] flex items-center justify-center transition-colors">
                    {step.icon}
                  </div>
                </div>

                <div className="pt-5 space-y-2">
                  <h3 className="text-lg sm:text-xl font-normal text-[#1A1A1A] leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8C7E6A]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed pt-2">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 flex items-center gap-2 text-[11px] text-[#1A1A1A]/80 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C7E6A] shrink-0"></span>
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation card */}
        <div className="mt-14 p-8 border border-[#1A1A1A]/20 bg-[#E5E2DD] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#8C7E6A]">
              Primeiro Passo
            </span>
            <h4 className="text-xl sm:text-2xl font-normal text-[#1A1A1A]" style={{ fontFamily: 'Georgia, serif' }}>
              Pronto para iniciar uma nova experiência odontológica?
            </h4>
            <p className="text-xs text-[#1A1A1A]/70 font-light">
              Agende sua consulta de avaliação e escaneamento digital com a Dra. Elisa.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-8 py-3.5 border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-black text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Iniciar Minha Jornada</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8C7E6A]" />
          </button>
        </div>

      </div>
    </section>
  );
};
