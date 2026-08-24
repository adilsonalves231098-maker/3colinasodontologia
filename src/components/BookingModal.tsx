import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, WHATSAPP_BOOKING_MESSAGE, getWhatsAppBookingUrl } from '../data/clinicData';
import { X, MessageSquare, ArrowRight, Shield, Send, Sparkles, User, FileText, Calendar, CreditCard, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
}) => {
  const [isFirstTime, setIsFirstTime] = useState<string>('Primeira vez');
  const [reason, setReason] = useState<string>(initialTreatment || 'Ortodontia com Alinhadores Invisíveis');
  const [fullName, setFullName] = useState<string>('');
  const [insuranceType, setInsuranceType] = useState<string>('Particular');
  const [insuranceName, setInsuranceName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');

  useEffect(() => {
    if (initialTreatment) {
      setReason(initialTreatment);
    }
  }, [initialTreatment]);

  if (!isOpen) return null;

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the formatted questionnaire with answers (or empty lines if unentered)
    const insuranceText = insuranceType === 'Particular' 
      ? 'Particular' 
      : (insuranceName.trim() ? `Convênio (${insuranceName.trim()})` : 'Convênio');

    const formattedMessage = `Seja bem-vindo(a) a 3 Colinas Odontologia! 

Para agilizarmos o seu atendimento responda cada pergunta a baixo! 

- Você é paciente da clínica ou seria primeira vez ? ${isFirstTime ? isFirstTime : ''}
-  Qual seria o motivo da consulta ? ${reason ? reason : ''}
-  Nome completo ${fullName.trim() ? fullName.trim() : ''}
-  Nome do convênio OU se é particular ${insuranceText}
- Data de nascimento ${birthDate.trim() ? birthDate.trim() : ''}
- CPF ${cpf.trim() ? cpf.trim() : ''}
 
Devido ao grande número de mensagens e outros afazeres do consultório, pode ser que demore para respondê-lo!😁

Observações 
Da 12h as 13h30 estamos fechados em horário de almoço!`;

    const whatsappUrl = getWhatsAppBookingUrl(formattedMessage);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleDirectWhatsApp = () => {
    const whatsappUrl = getWhatsAppBookingUrl(WHATSAPP_BOOKING_MESSAGE);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FDFCFB] max-w-xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-[#1A1A1A]/30 relative p-6 sm:p-8 text-[#1A1A1A]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-[#E5E2DD] hover:bg-[#d8d5cf] text-[#1A1A1A] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1px] w-6 bg-[#48C0BA]"></span>
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#48C0BA]">
              Agendamento & Atendimento 3 Colinas
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Agendar Consulta
          </h3>
          <p className="mt-1 text-xs text-[#1A1A1A]/70 font-light leading-relaxed">
            Preencha os dados abaixo para direcionarmos ao WhatsApp com o questionário pronto para a nossa equipe.
          </p>

          <div className="mt-3 p-3 bg-[#F4F2EE] border border-[#1A1A1A]/10 text-[11px] text-[#1A1A1A]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 font-light">
            <span>WhatsApp da Recepção: <strong className="font-semibold text-[#1A1A1A]">{CLINIC_INFO.phoneDisplay}</strong></span>
            <span className="text-[10px] text-[#1A1A1A]/60">{CLINIC_INFO.hours}</span>
          </div>
        </div>

        {/* Interactive Form */}
        <form onSubmit={handleSendToWhatsApp} className="mt-6 space-y-4">
          
          {/* Question 1: Patient Status */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
              1. Você é paciente da clínica ou seria primeira vez?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Primeira vez', 'Já sou paciente'].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setIsFirstTime(opt)}
                  className={`py-2.5 px-4 text-xs font-medium border text-center transition-all ${
                    isFirstTime === opt
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-white text-[#1A1A1A]/80 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/50'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Reason for consultation */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
              2. Qual seria o motivo da consulta?
            </label>
            <input
              type="text"
              placeholder="Ex: Alinhador Invisalign, Avaliação geral, Clareamento, Dor..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A] transition-colors"
            />
          </div>

          {/* Question 3: Full Name */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
              3. Nome completo
            </label>
            <input
              type="text"
              placeholder="Seu nome e sobrenome"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A] transition-colors"
            />
          </div>

          {/* Question 4: Insurance or Private */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
              4. Nome do convênio OU se é particular
            </label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {['Particular', 'Convênio'].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setInsuranceType(type)}
                  className={`py-2 px-3 text-xs font-medium border text-center transition-all ${
                    insuranceType === type
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-white text-[#1A1A1A]/80 border-[#1A1A1A]/20 hover:border-[#1A1A1A]/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            {insuranceType === 'Convênio' && (
              <input
                type="text"
                placeholder="Qual o nome do seu convênio/plano?"
                value={insuranceName}
                onChange={(e) => setInsuranceName(e.target.value)}
                className="w-full px-3.5 py-2 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]"
              />
            )}
          </div>

          {/* Question 5 & 6: Birth Date & CPF */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                5. Data de nascimento
              </label>
              <input
                type="text"
                placeholder="DD/MM/AAAA"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                6. CPF
              </label>
              <input
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]"
              />
            </div>
          </div>

          {/* Clinic Warning Note */}
          <div className="p-3 bg-[#EAE8E3]/60 border border-[#1A1A1A]/10 text-[11px] text-[#1A1A1A]/80 leading-relaxed font-light space-y-1">
            <p className="flex items-center gap-1.5 font-medium text-[#1A1A1A]">
              <Clock className="w-3.5 h-3.5 text-[#48C0BA]" />
              Observações do Consultório:
            </p>
            <p>• Das 12h às 13h30 estamos fechados em horário de almoço.</p>
            <p>• Devido ao fluxo de atendimento, responderemos o mais breve possível!</p>
          </div>

          {/* Buttons */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              id="submit-whatsapp-booking"
              className="w-full py-4 px-6 border border-[#1A1A1A] bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] text-[11px] uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2.5 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-[#48C0BA]" />
              <span>Enviar Respostas no WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full py-2.5 px-4 border border-[#1A1A1A]/20 bg-white hover:bg-[#F4F2EE] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span>Ou abrir WhatsApp direto com o questionário em branco</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
