import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { SpecialtiesPage } from './pages/SpecialtiesPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { SimulatorPage } from './pages/SimulatorPage';
import { DoctorPage } from './pages/DoctorPage';
import { ClinicSpacesPage } from './pages/ClinicSpacesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedSpecialtyCategory, setSelectedSpecialtyCategory] = useState<string | undefined>(undefined);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string | undefined>(undefined);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('especialidade-')) {
          const cat = hash.replace('especialidade-', '');
          setSelectedSpecialtyCategory(cat);
          setCurrentPage('especialidades');
        } else if (['home', 'especialidades', 'tecnologia-3d', 'simulador', 'dra-elisa', 'clinica', 'contato'].includes(hash)) {
          setCurrentPage(hash);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigatePage = (page: string, category?: string) => {
    setCurrentPage(page);
    if (category) {
      setSelectedSpecialtyCategory(category);
      window.location.hash = `especialidade-${category}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (treatmentTitle?: string) => {
    setSelectedTreatmentForBooking(treatmentTitle);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedTreatmentForBooking(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#FDFCFB] flex flex-col font-sans">
      
      {/* Top Floating Navbar with Page Routing */}
      <Navbar
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'especialidades' && (
          <SpecialtiesPage
            selectedCategory={selectedSpecialtyCategory}
            onOpenBooking={handleOpenBooking}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'tecnologia-3d' && (
          <TechnologyPage
            onOpenBooking={handleOpenBooking}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'simulador' && (
          <SimulatorPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'dra-elisa' && (
          <DoctorPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'clinica' && (
          <ClinicSpacesPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'contato' && (
          <ContactPage
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Refined Global Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onNavigatePage={handleNavigatePage}
      />

      {/* Persistent WhatsApp Concierge */}
      <FloatingWhatsApp
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking & Assessment Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialTreatment={selectedTreatmentForBooking}
      />

    </div>
  );
}
