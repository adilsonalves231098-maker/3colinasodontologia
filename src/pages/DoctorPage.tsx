import React from 'react';
import { DOCTORS_DATA, CLINIC_INFO, getWhatsAppBookingUrl } from '../data/clinicData';
import { 
  Award, Sparkles, CheckCircle2, MessageSquare, ArrowRight, 
  Heart, GraduationCap, FileCheck, Stethoscope, ShieldCheck
} from 'lucide-react';

interface DoctorPageProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const DoctorPage: React.FC<DoctorPageProps> = ({ onOpenBooking }) => {
  const draElisa = DOCTORS_DATA[0];

  return (
    <div className="pt-24 pb-24 bg-[#FDFCFB] text-[#1A1A1A] min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-[#48C0BA] uppercase tracking-widest mb-2">
          <span className="h-[1px] w-6 bg-[#48C0BA]"></span>
          <span>Direção Clínica & Propósito</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
          Dra. Elisa G. da Rocha & Corpo Clínico
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/70 font-light max-w-3xl leading-relaxed">
          Uma prática odontológica pautada pela escuta atenta, atualização científica contínua e a convicção de que cada paciente merece um tratamento personalizado, calmo e transparente.
        </p>
      </div>

      {/* Main Profile Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-[#F8F7F4] border border-[#1A1A1A]/10 rounded-3xl p-6 sm:p-12 shadow-sm">
          
          {/* Doctor Image Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl">
              <img
                src={draElisa.image}
                alt={draElisa.name}
                className="w-full h-[460px] sm:h-[540px] object-cover object-center filter saturate-[0.98] contrast-[1.02] hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-[#48C0BA] text-slate-950 text-[10px] uppercase tracking-widest font-black rounded-full inline-block mb-2">
                  Invisalign Doctor Certified
                </span>
                <h3 className="text-2xl font-normal" style={{ fontFamily: 'Georgia, serif' }}>
                  {draElisa.name}
                </h3>
                <p className="text-xs text-white/80 font-mono">
                  {draElisa.cro} • {draElisa.role}
                </p>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-5 bg-white rounded-2xl border border-[#1A1A1A]/10 shadow-xs space-y-3">
              <span className="text-[10px] font-mono uppercase text-[#8C7E6A] font-bold">
                Atendimento Direto com a Dra. Elisa
              </span>
              <p className="text-xs text-[#1A1A1A]/70 font-light leading-relaxed">
                As avaliações com a Dra. Elisa são individuais, com tempo de 60 a 90 minutos para diagnóstico completo e escaneamento digital 3D.
              </p>
              <button
                type="button"
                onClick={() => onOpenBooking('Consulta Inicial com Dra. Elisa')}
                className="w-full py-3.5 px-4 bg-[#1A1A1A] hover:bg-black text-white text-xs uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#48C0BA]" />
                <span>Agendar com Dra. Elisa</span>
              </button>
            </div>
          </div>

          {/* Biography & Academic Path */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Philosophy quote */}
            <div className="p-6 bg-white rounded-2xl border-l-4 border-[#48C0BA] shadow-xs">
              <p className="text-base sm:text-lg text-[#1A1A1A] italic font-light leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                {draElisa.philosophy}
              </p>
              <div className="mt-3 text-xs text-[#8C7E6A] font-semibold">
                — Dra. Elisa G. da Rocha, Responsável Técnica
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-sm sm:text-base text-[#1A1A1A]/80 font-light leading-relaxed">
              <h3 className="text-xl font-normal text-[#1A1A1A]" style={{ fontFamily: 'Georgia, serif' }}>
                Sobre a Trajetória Clínica
              </h3>
              <p>
                {draElisa.bio}
              </p>
              <p>
                A Dra. Elisa dedica sua carreira ao aprofundamento das técnicas de ortodontia com alinhadores invisíveis e estética facial biológica. Acredita firmemente na odontologia de precisão: tratamentos que duram décadas e valorizam a saúde original do dente, sem intervenções desnecessárias.
              </p>
            </div>

            {/* Specialties & Focus */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A]">
                Áreas de Atuação & Especialização
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {draElisa.specialties.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-[#1A1A1A]/10 text-xs text-[#1A1A1A] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#48C0BA] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar badges */}
            <div className="pt-4 border-t border-[#1A1A1A]/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#8C7E6A] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-[#1A1A1A]">Educação Continuada</h5>
                  <p className="text-[11px] text-[#1A1A1A]/60 font-light">Cursos nacionais e internacionais</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#8C7E6A] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-[#1A1A1A]">Invisalign Doctor</h5>
                  <p className="text-[11px] text-[#1A1A1A]/60 font-light">Certificação oficial de ortodontia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8C7E6A] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-[#1A1A1A]">Ética & Biologia</h5>
                  <p className="text-[11px] text-[#1A1A1A]/60 font-light">Preservação máxima de estrutura</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
