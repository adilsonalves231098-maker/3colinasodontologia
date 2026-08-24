import React, { useState } from 'react';
import { TREATMENTS_DATA, CLINIC_INFO, getWhatsAppBookingUrl } from '../data/clinicData';
import { Treatment } from '../types';
import { InteractiveDental3DViewer } from '../components/3d/InteractiveDental3DViewer';
import { 
  Sparkles, CheckCircle2, Clock, Shield, ArrowRight, MessageSquare, 
  Layers, ChevronRight, Zap, Star, Activity, UserCheck
} from 'lucide-react';

interface SpecialtiesPageProps {
  selectedCategory?: string;
  onOpenBooking: (treatmentTitle?: string) => void;
  onNavigatePage: (page: string, category?: string) => void;
}

export const SpecialtiesPage: React.FC<SpecialtiesPageProps> = ({
  selectedCategory,
  onOpenBooking,
  onNavigatePage,
}) => {
  const [activeTreatmentId, setActiveTreatmentId] = useState<string>(
    selectedCategory || TREATMENTS_DATA[0]?.id || 'invisalign'
  );

  const currentTreatment = TREATMENTS_DATA.find((t) => t.id === activeTreatmentId) || TREATMENTS_DATA[0];

  const handleBookingClick = (treatment: Treatment) => {
    onOpenBooking(treatment.title);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FDFCFB] text-[#1A1A1A] min-h-screen">
      
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#48C0BA] uppercase tracking-widest mb-2">
          <span className="h-[1px] w-6 bg-[#48C0BA]"></span>
          <span>Corpo Clínico & Tratamentos de Alta Precisão</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
          Especialidades Integradas & Odontologia Digital
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/70 font-light max-w-3xl leading-relaxed">
          Unimos biologia dentária preservada, planejamento tridimensional guiado e tecnologia de ponta para proporcionar tratamentos previsíveis, indolores e confortáveis.
        </p>

        {/* Quick Tabs Bar */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-3 border-b border-[#1A1A1A]/10 scrollbar-none">
          {TREATMENTS_DATA.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTreatmentId(t.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTreatmentId === t.id
                  ? 'bg-[#1A1A1A] text-white shadow-md'
                  : 'bg-[#F4F2EE] text-[#1A1A1A]/70 hover:bg-[#EAE8E3] hover:text-[#1A1A1A]'
              }`}
            >
              {activeTreatmentId === t.id && <span className="w-1.5 h-1.5 rounded-full bg-[#48C0BA]"></span>}
              <span>{t.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Specialty Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Deep Treatment Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header of Active Treatment */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#48C0BA]/10 text-[#0f766e] text-xs font-semibold rounded-full border border-[#48C0BA]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#48C0BA]" />
                <span>{currentTreatment.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                {currentTreatment.title}
              </h2>

              <p className="text-lg text-[#8C7E6A] font-light italic">
                {currentTreatment.subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#1A1A1A]/80 font-light leading-relaxed pt-2">
                {currentTreatment.fullDescription}
              </p>
            </div>

            {/* Key Clinical Highlights */}
            <div className="bg-[#F8F7F4] border border-[#1A1A1A]/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[#1A1A1A]">
                Diferenciais & Protocolo Clínico
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {currentTreatment.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-[#1A1A1A]/5 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#48C0BA] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#1A1A1A]/85 font-normal leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology & Workflow */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[#1A1A1A]">
                Tecnologias Utilizadas Neste Tratamento
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {currentTreatment.technologyUsed.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] rounded-lg font-medium flex items-center gap-2 shadow-xs"
                  >
                    <Zap className="w-3.5 h-3.5 text-[#48C0BA]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* For Whom / Candidacy */}
            <div className="p-5 bg-teal-50/60 border border-teal-200/60 rounded-xl space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-teal-800 tracking-wider">
                Indicação & Para Quem é Este Tratamento
              </span>
              <p className="text-xs sm:text-sm text-teal-950 font-light leading-relaxed">
                {currentTreatment.forWhom}
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => handleBookingClick(currentTreatment)}
                className="flex-1 py-4 px-6 bg-[#1A1A1A] hover:bg-black text-white text-xs uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#48C0BA]" />
                <span>Agendar Avaliação de {currentTreatment.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigatePage('simulador')}
                className="py-4 px-6 bg-[#F4F2EE] hover:bg-[#EAE8E3] text-[#1A1A1A] text-xs uppercase tracking-widest font-medium rounded-xl flex items-center justify-center gap-2 transition-all border border-[#1A1A1A]/10"
              >
                <Sparkles className="w-4 h-4 text-[#48C0BA]" />
                <span>Simular em 3D</span>
              </button>
            </div>

          </div>

          {/* Right Column: 3D Interactive Viewer + Clinical Summary Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* 3D Interactive Model */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-mono uppercase text-[#1A1A1A]/60 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#48C0BA]" />
                  Mapeamento 3D da Arcada
                </span>
                <span className="text-[10px] text-[#48C0BA] font-mono font-bold">Interativo 360°</span>
              </div>
              <InteractiveDental3DViewer
                height="380px"
                initialMode={activeTreatmentId === 'invisalign' ? 'aligner' : 'scanner'}
                showControls={true}
              />
            </div>

            {/* Quick Consultation Timeline Card */}
            <div className="bg-[#F4F2EE] border border-[#1A1A1A]/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8C7E6A] font-bold">
                  Resumo de Atendimento
                </span>
                <Clock className="w-4 h-4 text-[#8C7E6A]" />
              </div>

              <div className="space-y-3 text-xs text-[#1A1A1A]/80">
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                  <span>Duração Média:</span>
                  <strong className="text-[#1A1A1A]">{currentTreatment.durationEstimate}</strong>
                </div>
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                  <span>Responsável Clínica:</span>
                  <strong className="text-[#1A1A1A]">Dra. Elisa G. da Rocha</strong>
                </div>
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                  <span>Modo de Escaneamento:</span>
                  <strong className="text-[#48C0BA] font-mono">iTero 3D Sem Molde</strong>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={getWhatsAppBookingUrl(`Olá, gostaria de saber mais detalhes sobre ${currentTreatment.title} na 3 Colinas.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-white hover:bg-[#FDFCFB] text-[#1A1A1A] text-xs font-semibold rounded-lg border border-[#1A1A1A]/20 flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#48C0BA]" />
                  <span>Tirar Dúvidas no WhatsApp Direto</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
