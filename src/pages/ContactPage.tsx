import React from 'react';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 pb-24 bg-[#FDFCFB] text-[#1A1A1A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#48C0BA] uppercase tracking-widest mb-2">
          <span className="h-[1px] w-6 bg-[#48C0BA]"></span>
          <span>Localização & Atendimento Exclusivo</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          Agendamento & Localização da Clínica
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-6 bg-[#F8F7F4] border border-[#1A1A1A]/10 rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-normal" style={{ fontFamily: 'Georgia, serif' }}>
              Canais de Contato Direto
            </h2>

            <div className="space-y-4 text-sm text-[#1A1A1A]/80">
              <div className="p-4 bg-white rounded-2xl border border-[#1A1A1A]/10 flex items-start gap-4">
                <MessageSquare className="w-5 h-5 text-[#48C0BA] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#8C7E6A] font-bold">WhatsApp Oficial da Recepção</span>
                  <p className="text-base font-bold text-[#1A1A1A]">{CLINIC_INFO.phoneDisplay}</p>
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0f766e] font-semibold hover:underline mt-1"
                  >
                    <span>Iniciar conversa no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#1A1A1A]/10 flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#8C7E6A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#8C7E6A] font-bold">Horários de Atendimento</span>
                  <p className="text-sm font-medium text-[#1A1A1A]">{CLINIC_INFO.hours}</p>
                  <p className="text-xs text-amber-800 font-medium mt-1">
                    • Observação: Das 12h às 13h30 fechados em horário de almoço.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#1A1A1A]/10 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#8C7E6A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#8C7E6A] font-bold">Endereço</span>
                  <p className="text-sm font-medium text-[#1A1A1A]">{CLINIC_INFO.address}</p>
                  <p className="text-xs text-[#1A1A1A]/60">{CLINIC_INFO.city} • Estacionamento com manobrista</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="w-full py-4 px-6 bg-[#1A1A1A] hover:bg-black text-white text-xs uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#48C0BA]" />
              <span>Abrir Formulário de Agendamento</span>
            </button>
          </div>

          <div className="lg:col-span-6 bg-[#EAE8E3] rounded-3xl overflow-hidden border border-[#1A1A1A]/10 min-h-[380px] flex flex-col items-center justify-center p-8 text-center relative">
            <MapPin className="w-12 h-12 text-[#1A1A1A]/40 mb-3" />
            <h3 className="text-xl font-normal text-[#1A1A1A]" style={{ fontFamily: 'Georgia, serif' }}>
              3 Colinas Odontologia
            </h3>
            <p className="text-xs text-[#1A1A1A]/70 max-w-sm mt-1 mb-4">
              Localização privilegiada com fácil acesso, segurança privada e ambiente acústico isolado.
            </p>
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-white hover:bg-[#FDFCFB] text-[#1A1A1A] text-xs font-semibold rounded-xl border border-[#1A1A1A]/20 shadow-sm flex items-center gap-2"
            >
              <span>Abrir no Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
