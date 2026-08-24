import React from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigatePage?: (page: string, category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigatePage }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: string, category?: string) => {
    if (onNavigatePage) {
      onNavigatePage(page, category);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#FDFCFB] pt-20 pb-12 border-t border-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Manifesto (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <button onClick={() => handleNav('home')} className="focus:outline-none text-left">
              <Logo variant="light" size="lg" />
            </button>
            
            <p className="text-xs sm:text-sm text-white/70 font-light max-w-sm leading-relaxed">
              Odontologia digital de alto padrão, orientada por escaneamento tridimensional, harmonia biológica e um cuidado acolhedor e individualizado.
            </p>

            <div className="pt-2">
              <span className="text-[9px] text-[#48C0BA] tracking-widest uppercase font-bold block font-mono">
                Responsável Técnica
              </span>
              <p className="text-xs text-white font-medium mt-0.5">
                {CLINIC_INFO.technicalResponsible}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#48C0BA] bg-[#48C0BA] hover:bg-[#3db0aa] text-slate-950 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all shadow-md"
              >
                <span>Agendar Avaliação</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[9px] uppercase tracking-widest text-[#8C7E6A] font-bold block font-mono">
              Páginas & Especialidades
            </span>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => handleNav('especialidades', 'invisalign')} className="hover:text-white transition-colors text-left">
                  Ortodontia Digital & Invisalign®
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('especialidades', 'preenchimento-facial')} className="hover:text-white transition-colors text-left">
                  Harmonização Orofacial & Estética
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('especialidades', 'protese-lentes')} className="hover:text-white transition-colors text-left">
                  Lentes Cerâmicas & Reabilitação
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tecnologia-3d')} className="hover:text-white transition-colors text-left">
                  Scanner 3D iTero Element 5D
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('simulador')} className="hover:text-[#48C0BA] text-teal-300 transition-colors text-left flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3 h-3 text-[#48C0BA]" />
                  Simulador de Sorriso 3D
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('dra-elisa')} className="hover:text-white transition-colors text-left">
                  Dra. Elisa G. da Rocha
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('clinica')} className="hover:text-white transition-colors text-left">
                  A Clínica & Espaços
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[9px] uppercase tracking-widest text-[#8C7E6A] font-bold block font-mono">
              Atendimento & WhatsApp
            </span>
            
            <div className="space-y-3 text-xs text-white/70 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8C7E6A] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address} — {CLINIC_INFO.city}</span>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#48C0BA] shrink-0" />
                <a 
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline hover:text-[#48C0BA] transition-colors"
                >
                  WhatsApp: {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8C7E6A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90">{CLINIC_INFO.hours}</p>
                  <p className="text-[11px] text-amber-300/80 mt-0.5">Almoço: 12h às 13h30</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 font-light gap-4">
          <p>© {currentYear} {CLINIC_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Privacidade & Ética Odontológica</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">
              Voltar ao Topo ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
