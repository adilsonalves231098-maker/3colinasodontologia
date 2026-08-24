import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Award, CheckCircle, GraduationCap, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onOpenBooking }) => {
  const draElisa = DOCTORS[0];
  const clinicalTeam = DOCTORS[1];

  return (
    <section id="equipe" className="py-24 md:py-32 bg-[#FDFCFB] relative overflow-hidden border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#8C7E6A]"></span>
            <span className="text-[10px] tracking-[0.3em] text-[#8C7E6A] uppercase font-bold">
              Direção Clínica & Especialistas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Excelência técnica conduzida por quem <span className="italic text-[#8C7E6A]">verdadeiramente se importa</span>.
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-light text-sm sm:text-base leading-relaxed">
            Acreditamos que o melhor tratamento nasce do encontro entre formação médica contínua, tecnologia de última geração e dedicação exclusiva a cada paciente.
          </p>
        </div>

        {/* Dra. Elisa Featured Profile Card */}
        <div className="bg-[#FFFFFF] border border-[#1A1A1A]/20 p-6 sm:p-10 lg:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Doctor Photo with Architectural Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden bg-[#E5E2DD] border border-[#1A1A1A]/20 shadow-sm">
                <img
                  src={draElisa.image}
                  alt={draElisa.name}
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/60 to-transparent p-6 text-white">
                  <span className="text-[9px] tracking-widest uppercase font-bold text-[#48C0BA]">
                    Invisalign Doctor & Diretora Clínica
                  </span>
                  <h3 className="text-2xl font-normal text-white" style={{ fontFamily: 'Georgia, serif' }}>{draElisa.name}</h3>
                  <p className="text-xs text-white/70 font-mono mt-0.5">{draElisa.cro}</p>
                </div>
              </div>
            </div>

            {/* Doctor Bio & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7E6A] block mb-1">
                  Ortodontia Digital & Estética Biológica
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  {draElisa.name}
                </h3>
                <p className="text-xs text-[#1A1A1A]/60 mt-1 font-light">
                  {draElisa.title} • {draElisa.cro}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#1A1A1A]/75 font-light leading-relaxed">
                {draElisa.bio}
              </p>

              {/* Specialties checklist */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] block">
                  Serviços Especializados:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Invisalign® & Ortodontia Digital",
                    "Preenchimento Facial & Labial",
                    "Toxina Botulínica (Botox®)",
                    "Clareamento Dental Avançado",
                    "Próteses & Lentes Cerâmicas",
                    "Profilaxia & Prevenção 3D"
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1A1A1A]/80 font-light bg-[#FDFCFB] p-2.5 border border-[#1A1A1A]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48C0BA] shrink-0"></span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="p-5 bg-[#E5E2DD]/40 border-l-2 border-[#8C7E6A] text-xs sm:text-sm text-[#1A1A1A]/85 italic leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                “{draElisa.philosophy}”
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 border border-[#1A1A1A] bg-[#1A1A1A] hover:bg-black text-white text-[10px] uppercase tracking-widest font-bold transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <span>Agendar Consulta com a Dra. Elisa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C7E6A]" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Integrated Team Note */}
        <div className="bg-[#E5E2DD]/40 border border-[#1A1A1A]/15 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#1A1A1A] bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#8C7E6A]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-normal text-[#1A1A1A]" style={{ fontFamily: 'Georgia, serif' }}>
                Corpo Clínico Integrado & Multidisciplinar
              </h4>
              <p className="text-xs text-[#1A1A1A]/70 font-light max-w-xl">
                Especialistas em cirurgia de implantes guiada, reabilitação oral, endodontia e periodontia trabalhando em total sintonia sob o mesmo teto.
              </p>
            </div>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] px-4 py-2 border border-[#1A1A1A]/20 bg-white">
            Tratamento 100% Completo na Clínica
          </span>
        </div>

      </div>
    </section>
  );
};
