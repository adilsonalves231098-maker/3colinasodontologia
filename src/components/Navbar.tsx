import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../data/clinicData';
import { Menu, X, MessageSquare, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigatePage: (page: string, category?: string) => void;
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigatePage,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navPages = [
    { id: 'home', name: 'Início' },
    { id: 'especialidades', name: 'Especialidades' },
    { id: 'tecnologia-3d', name: 'Tecnologia 3D' },
    { id: 'simulador', name: 'Simulador 3D', isHighlight: true },
    { id: 'dra-elisa', name: 'Dra. Elisa' },
    { id: 'clinica', name: 'A Clínica' },
    { id: 'contato', name: 'Contato' },
  ];

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavigatePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || currentPage !== 'home'
            ? 'py-3.5 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 shadow-xs'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-none text-left"
          >
            <Logo variant="dark" size="sm" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#F4F2EE]/80 p-1.5 rounded-full border border-[#1A1A1A]/10 shadow-xs">
            {navPages.map((page) => (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 ${
                  currentPage === page.id
                    ? 'bg-[#1A1A1A] text-white font-medium shadow-xs'
                    : page.isHighlight
                    ? 'text-[#0f766e] font-semibold hover:bg-teal-50'
                    : 'text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-black/5'
                }`}
              >
                {page.isHighlight && <Sparkles className="w-3 h-3 text-[#48C0BA]" />}
                <span>{page.name}</span>
              </button>
            ))}
          </nav>

          {/* Actions CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shadow-xs"
              title="Falar no WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#48C0BA]" />
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="py-2.5 px-4 bg-[#1A1A1A] hover:bg-black text-[#FDFCFB] text-[11px] uppercase tracking-wider font-bold rounded-full transition-all shadow-xs flex items-center gap-1.5"
            >
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in flex flex-col justify-end">
          <div className="bg-[#FDFCFB] rounded-t-3xl p-6 shadow-2xl border-t border-[#1A1A1A]/20 max-h-[85vh] overflow-y-auto space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8C7E6A] font-bold">
                Menu de Navegação
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full bg-black/5"
              >
                <X className="w-5 h-5 text-[#1A1A1A]" />
              </button>
            </div>

            <div className="space-y-1.5">
              {navPages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`w-full p-3 rounded-xl text-left text-sm flex items-center justify-between transition-all ${
                    currentPage === page.id
                      ? 'bg-[#1A1A1A] text-white font-medium'
                      : 'hover:bg-black/5 text-[#1A1A1A]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {page.isHighlight && <Sparkles className="w-4 h-4 text-[#48C0BA]" />}
                    {page.name}
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#1A1A1A]/10 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <span>Agendar Avaliação</span>
              </button>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#F4F2EE] text-[#1A1A1A] text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#48C0BA]" />
                <span>WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
