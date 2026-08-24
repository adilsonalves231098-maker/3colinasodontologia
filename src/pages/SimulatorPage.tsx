import React from 'react';
import { SmileSimulator3D } from '../components/3d/SmileSimulator3D';
import { Sparkles, Shield, Clock, Phone, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface SimulatorPageProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const SimulatorPage: React.FC<SimulatorPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 pb-24 bg-[#0B0F19] text-white min-h-screen">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#48C0BA] uppercase tracking-widest mb-2">
          <span className="h-[1px] w-6 bg-[#48C0BA]"></span>
          <span>Simulador & Inteligência Artificial Clínica</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
          Simule o Resultado do Seu Sorriso em 3D
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/70 font-light max-w-3xl leading-relaxed">
          Descubra como o alinhamento com Invisalign®, o clareamento dental a laser e o design digital de sorriso podem transformar sua estética dental.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmileSimulator3D onOpenBooking={onOpenBooking} />
      </div>

    </div>
  );
};
