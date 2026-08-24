import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Discreet tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-widest font-bold shadow-xl border border-white/20 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8C7E6A]"></span>
          <span>Agende sua avaliação no WhatsApp</span>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={onOpenBooking}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center gap-2.5 px-4 py-3.5 bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] shadow-xl border border-[#1A1A1A] transition-all duration-300 hover:scale-105"
        id="floating-whatsapp-trigger"
        aria-label="Agendar no WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-[#8C7E6A]" />
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#8C7E6A] animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#8C7E6A]"></span>
        </div>

        <span className="text-[10px] font-bold tracking-widest uppercase pr-1 hidden sm:inline-block">
          Agendar Consulta
        </span>
      </button>
    </aside>
  );
};
