import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Sliders, ShieldCheck, RefreshCw, Send, Star, Zap, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { InteractiveDental3DViewer } from './InteractiveDental3DViewer';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../../data/clinicData';

interface SmileSimulatorProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const SmileSimulator3D: React.FC<SmileSimulatorProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'3d-model' | 'quiz' | 'shade'>('3d-model');
  const [crowdingLevel, setCrowdingLevel] = useState<number>(3); // 1 = minimal, 5 = severe
  const [selectedShade, setSelectedShade] = useState<string>('BL1');
  const [mainConcern, setMainConcern] = useState<string>('Dentes desalinhados / Apinhamento');
  const [hasPreviousBraces, setHasPreviousBraces] = useState<string>('Não, primeira vez');
  const [patientName, setPatientName] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  const shades = [
    { code: 'BL1', name: 'Hollywood Bleach (Extrabranco)', hex: '#FCFCFC', desc: 'Clareamento máximo e uniforme' },
    { code: 'B1', name: 'Branco Natural Translúcido', hex: '#F6F5EE', desc: 'O tom natural mais luminoso' },
    { code: 'A1', name: 'Marfim Claro Harmônico', hex: '#EDE8DE', desc: 'Muito natural e suave' },
    { code: 'A2', name: 'Médio / Natural Standard', hex: '#E5DDCB', desc: 'Tom médio preservado' },
    { code: 'A3', name: 'Matizado / Dourado', hex: '#DACFB8', desc: 'Esmalte maduro' },
  ];

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#48C0BA', '#1A1A1A', '#8C7E6A', '#ffffff'],
    });
  };

  const handleSendToWhatsApp = () => {
    const formattedMessage = `Seja bem-vindo(a) a 3 Colinas Odontologia! 

Para agilizarmos o seu atendimento responda cada pergunta a baixo! 

- Você é paciente da clínica ou seria primeira vez ? ${hasPreviousBraces}
-  Qual seria o motivo da consulta ? Avaliação Invisalign & Simulador 3D (${mainConcern})
-  Nome completo ${patientName.trim() ? patientName.trim() : ''}
-  Nome do convênio OU se é particular Particular
- Data de nascimento 
- CPF 
 
Devido ao grande número de mensagens e outros afazeres do consultório, pode ser que demore para respondê-lo!😁

Observações 
Da 12h as 13h30 estamos fechados em horário de almoço!`;

    const url = getWhatsAppBookingUrl(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-[#111827] text-white rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      
      {/* Background glow & mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#48C0BA]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8C7E6A]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      {/* Header */}
      <div className="relative z-10 max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[11px] font-mono uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#48C0BA]" />
          Laboratório Digital 3D Interativo
        </div>
        <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          Simulador de Sorriso & Análise Clínica 3D
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/70 font-light leading-relaxed">
          Manipule a arcada em 3D, simule estágios de alinhamento com tecnologia <strong className="text-teal-300 font-medium">iTero®</strong> e descubra a projeção estimada do seu tratamento antes mesmo da primeira consulta.
        </p>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="relative z-10 flex flex-wrap items-center gap-2 mb-6 border-b border-white/10 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab('3d-model')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
            activeTab === '3d-model'
              ? 'bg-[#48C0BA] text-slate-950 shadow-lg shadow-[#48C0BA]/25'
              : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Arcada 3D Interativa</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('shade')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
            activeTab === 'shade'
              ? 'bg-[#48C0BA] text-slate-950 shadow-lg shadow-[#48C0BA]/25'
              : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Escala de Cor & Clareamento</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
            activeTab === 'quiz'
              ? 'bg-[#48C0BA] text-slate-950 shadow-lg shadow-[#48C0BA]/25'
              : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Análise Rápida de Caso</span>
        </button>
      </div>

      {/* Tab 1: 3D Model Viewer */}
      {activeTab === '3d-model' && (
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <InteractiveDental3DViewer height="480px" initialMode="scanner" showControls={true} />
          </div>

          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#48C0BA]">
                Diagnóstico & Inteligência Clínica
              </span>
              <h3 className="text-xl font-normal text-white mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                O que você vê neste modelo 3D?
              </h3>
              
              <ul className="mt-4 space-y-3 text-xs text-white/80 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#48C0BA] shrink-0 mt-0.5" />
                  <span><strong>Mapeamento Micrométrico:</strong> O scanner intraoral capta 6.000 fotos/s para reproduzir cada cúspide com precisão de 20 micras.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#48C0BA] shrink-0 mt-0.5" />
                  <span><strong>ClinCheck® Biomecânico:</strong> Os dentes se movem de forma suave, sem fios metálicos, respeitando a biologia da raiz dentária.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#48C0BA] shrink-0 mt-0.5" />
                  <span><strong>Sem moldagens de gesso:</strong> Procedimento 100% confortável, limpo e sem náuseas.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-teal-950/40 border border-teal-500/30 rounded-xl">
              <p className="text-xs text-teal-200 font-light mb-3">
                Quer ver a simulação 3D real dos seus dentes na clínica com a Dra. Elisa?
              </p>
              <button
                type="button"
                onClick={() => onOpenBooking('Ortodontia com Alinhadores Invisalign®')}
                className="w-full py-3 px-4 bg-[#48C0BA] hover:bg-[#3db0aa] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Agendar Escaneamento 3D</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Color & Bleaching Shade Picker */}
      {activeTab === 'shade' && (
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#48C0BA]">
              Harmonia & Estética do Esmalte
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Descubra a escala de cor ideal para seu sorriso
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Trabalhamos com o padrão internacional VITA Classical e escala Bleach para clareamento dental a laser e lentes cerâmicas de alta translucidez.
            </p>

            {/* Shades selector */}
            <div className="space-y-2.5 pt-2">
              {shades.map((shade) => (
                <button
                  type="button"
                  key={shade.code}
                  onClick={() => setSelectedShade(shade.code)}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                    selectedShade === shade.code
                      ? 'bg-white/15 border-[#48C0BA] shadow-md'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className="w-6 h-6 rounded-full border border-black/30 shadow-inner shrink-0"
                      style={{ backgroundColor: shade.hex }}
                    />
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <span>Tom {shade.code}</span>
                        <span className="text-[11px] font-normal text-white/70">— {shade.name}</span>
                      </div>
                      <p className="text-[10px] text-white/50">{shade.desc}</p>
                    </div>
                  </div>
                  {selectedShade === shade.code && (
                    <span className="px-2 py-0.5 bg-[#48C0BA] text-slate-950 text-[10px] font-bold rounded">
                      Selecionado
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center space-y-6">
            <div className="inline-block p-6 rounded-full bg-black/40 border border-white/10">
              <div
                className="w-28 h-28 rounded-full border-4 border-white/20 shadow-2xl transition-all duration-500 flex items-center justify-center"
                style={{
                  backgroundColor: shades.find((s) => s.code === selectedShade)?.hex || '#FCFCFC',
                }}
              >
                <span className="text-slate-950 font-black text-xl tracking-wider">
                  {selectedShade}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Resultado Projetado: Tom {selectedShade}
              </h4>
              <p className="text-xs text-white/70 font-light mt-1 max-w-sm mx-auto">
                Alcançável com protocolo combinado de Clareamento Laser em consultório + placas de manutenção personalizadas.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking(`Clareamento Dental (Tom de Interesse: ${selectedShade})`)}
              className="py-3 px-6 bg-[#48C0BA] hover:bg-[#3db0aa] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 shadow-lg transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Quero Clarear Meus Dentes</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Quiz */}
      {activeTab === 'quiz' && (
        <div className="relative z-10">
          {!showResult ? (
            <form onSubmit={handleSimulate} className="max-w-2xl mx-auto space-y-6">
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-teal-300 mb-2">
                  1. Qual é sua principal queixa ou objetivo?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Dentes desalinhados / Apinhamento',
                    'Espaços entre os dentes (Diastemas)',
                    'Mordida cruzada ou aberta',
                    'Estética do sorriso & Dentes amarelados',
                    'Dores articulares / Bruxismo',
                    'Substituição de próteses antigas',
                  ].map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setMainConcern(option)}
                      className={`p-3 rounded-xl text-left text-xs transition-all border ${
                        mainConcern === option
                          ? 'bg-[#48C0BA] text-slate-950 font-bold border-[#48C0BA]'
                          : 'bg-white/5 text-white/80 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-teal-300 mb-2">
                  2. Já usou aparelho fixo no passado?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Não, nunca usei', 'Sim, mas os dentes entortaram de novo'].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setHasPreviousBraces(opt)}
                      className={`p-3 rounded-xl text-center text-xs transition-all border ${
                        hasPreviousBraces === opt
                          ? 'bg-[#48C0BA] text-slate-950 font-bold border-[#48C0BA]'
                          : 'bg-white/5 text-white/80 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-teal-300 mb-2">
                  3. Seu nome (para personalização da estimativa)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Beatriz Lima"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#48C0BA]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#48C0BA] to-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-xl hover:opacity-95 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Gerar Minha Estimativa Clínica 3D</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          ) : (
            <div className="max-w-2xl mx-auto bg-white/5 border border-teal-500/40 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in text-center">
              
              <div className="inline-flex p-3 rounded-full bg-teal-500/20 text-[#48C0BA]">
                <Star className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  {patientName ? `Estimativa para ${patientName}` : 'Estimativa Personalizada Pronta!'}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light mt-1">
                  Com base no seu perfil ({mainConcern}), você é um candidato ideal para o protocolo de alinhadores invisíveis ou reabilitação estética digital.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-teal-400">Tempo Médio Estimado</span>
                  <p className="text-lg font-bold text-white mt-0.5">6 a 12 meses</p>
                  <span className="text-[10px] text-white/50">Trocas quinzenais</span>
                </div>

                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-teal-400">Visibilidade</span>
                  <p className="text-lg font-bold text-white mt-0.5">100% Transparente</p>
                  <span className="text-[10px] text-white/50">Material SmartTrack®</span>
                </div>

                <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-[10px] font-mono uppercase text-teal-400">Consultas</span>
                  <p className="text-lg font-bold text-white mt-0.5">A cada 6 a 8 semanas</p>
                  <span className="text-[10px] text-white/50">Sem emergências metálicas</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full py-4 px-6 bg-[#48C0BA] hover:bg-[#3db0aa] text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Meu Caso Direto no WhatsApp da 3 Colinas</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowResult(false)}
                  className="text-xs text-white/60 hover:text-white underline"
                >
                  Fazer nova simulação
                </button>
              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
};
