import React from 'react';
import { Hero } from '../components/Hero';
import { Manifesto } from '../components/Manifesto';
import { ThreePillarsConcept } from '../components/ThreePillarsConcept';
import { PatientJourney } from '../components/PatientJourney';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import { InteractiveDental3DViewer } from '../components/3d/InteractiveDental3DViewer';
import { TREATMENTS_DATA, CLINIC_INFO } from '../data/clinicData';
import { Sparkles, ArrowRight, Zap, Scan, Layers, ShieldCheck, Activity } from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (treatmentTitle?: string) => void;
  onNavigatePage: (page: string, category?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onNavigatePage,
}) => {
  return (
    <div className="space-y-0">
      
      {/* 1. Cinematic Hero with Dra. Elisa's official photo */}
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onExploreTech={() => onNavigatePage('tecnologia-3d')}
      />

      {/* 2. Interactive 3D Technology Gateway Banner */}
      <section className="py-16 bg-[#111827] text-white border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[10px] font-mono uppercase tracking-widest rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#48C0BA]" />
                Inovação Tridimensional
              </div>

              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Veja seu sorriso em 3D antes de começar
              </h2>

              <p className="text-sm text-white/70 font-light leading-relaxed">
                Nossos scanners ópticos capturam cada detalhe anatômico em segundos. Arraste e explore a arcada abaixo para experimentar a precisão da tecnologia 3 Colinas.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigatePage('simulador')}
                  className="py-3 px-5 bg-[#48C0BA] hover:bg-[#3db0aa] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-lg transition-all"
                >
                  <Zap className="w-4 h-4" />
                  <span>Abrir Simulador 3D Completo</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigatePage('tecnologia-3d')}
                  className="py-3 px-5 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all"
                >
                  <span>Conhecer Scanner iTero</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <InteractiveDental3DViewer
                height="380px"
                initialMode="scanner"
                showControls={true}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Brand Manifesto */}
      <Manifesto />

      {/* 4. Three Pillars Concept */}
      <ThreePillarsConcept onOpenBooking={() => onOpenBooking()} />

      {/* 5. Specialties Quick Portal with deep-links */}
      <section className="py-20 bg-[#F4F2EE] border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#8C7E6A] tracking-widest font-bold">
                Tratamentos de Precisão
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A1A] mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                Nossas Especialidades
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigatePage('especialidades')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#0f766e] transition-colors"
            >
              <span>Ver todas as páginas de especialidades</span>
              <ArrowRight className="w-4 h-4 text-[#48C0BA]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS_DATA.slice(0, 6).map((treatment) => (
              <div
                key={treatment.id}
                onClick={() => onNavigatePage('especialidades', treatment.id)}
                className="bg-white rounded-2xl p-6 border border-[#1A1A1A]/10 hover:border-[#48C0BA] hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#48C0BA]/10 text-[#0f766e] border border-[#48C0BA]/20">
                      {treatment.badge}
                    </span>
                    <span className="text-[10px] font-mono text-[#8C7E6A]">3 Colinas</span>
                  </div>

                  <h3 className="text-xl font-normal text-[#1A1A1A] group-hover:text-[#0f766e] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 font-light line-clamp-3 leading-relaxed">
                    {treatment.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1A1A1A]/10 mt-6 flex items-center justify-between text-xs font-bold text-[#1A1A1A]">
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Abrir Página Completa <ArrowRight className="w-3.5 h-3.5 text-[#48C0BA]" />
                  </span>
                  <span className="text-[10px] text-[#8C7E6A] font-normal">{treatment.durationEstimate}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Patient Journey */}
      <PatientJourney onOpenBooking={() => onOpenBooking()} />

      {/* 7. Clinical Cases Before & After */}
      <BeforeAfterGallery onOpenBooking={() => onOpenBooking()} />

      {/* 8. Patient Testimonials */}
      <Testimonials />

      {/* 9. FAQs */}
      <FAQSection onOpenBooking={() => onOpenBooking()} />

    </div>
  );
};
