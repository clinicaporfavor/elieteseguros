import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import QuoteModal from './components/QuoteModal';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Benefits onOpenModal={openModal} />
      <Plans onOpenModal={openModal} />
      <FAQ />
      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;