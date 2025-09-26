// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import LogoWHite from "./../assets/AeroParkWhite.png"; // Make sure the path to your logo is correct

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showPulse, setShowPulse] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Trigger pulse animation periodically for the CTA button
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Note: All form-related state and logic has been moved to ReservationPage.tsx

  return (
    <>
      <style>{`
        /* Keep necessary animations for the header */
        @keyframes gentle-bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-3px); } 60% { transform: translateY(-2px); } }
        @keyframes pulse-glow { 0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7); transform: scale(1); } 50% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); transform: scale(1.02); } 100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); transform: scale(1); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-2px); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

        .animate-bounce-gentle { animation: gentle-bounce 2s infinite; }
        .animate-pulse-glow { animation: pulse-glow 1.5s infinite; }
        .animate-shimmer { background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%); background-size: 200% 100%; animation: shimmer 2s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slide-in { animation: slideIn 0.3s ease-out; }

        .cta-button { position: relative; overflow: hidden; }
        .cta-button::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.5s; }
        .cta-button:hover::before { left: 100%; }
      `}</style>
      
      <header className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className='flex'>
              <a href="/" className="animate-float">
                <img src={LogoWHite} alt="AeroPark Logo" className='h-10 w-12 md:h-[60px] md:w-[70px]' />
              </a>
              <div>
                <h5>Matar <br /> park</h5>
              </div>

            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a className="hover:text-indigo-400 transition duration-300 hover:scale-105" href="/">
                Accueil
              </a>
              <a className="hover:text-indigo-400 transition duration-300 hover:scale-105" href="/#services">
                Découvrir le service
              </a>
              <a className="hover:text-indigo-400 transition duration-300 hover:scale-105" href="/#reviews">
                Avis
              </a>
              <a className="hover:text-indigo-400 transition duration-300 hover:scale-105" href="/#faq">
                FAQs
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none hover:scale-110 transition-transform"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>

            {/* CTA Link (Desktop) - Changed to an <a> tag */}
            <a 
              href="/reservation"
              target='blank'

              className={`hidden md:block cta-button font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center ${
                showPulse 
                  ? 'animate-pulse-glow animate-shimmer' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>✈️ Demander maintenant</span>
                <svg className="w-4 h-4 animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden bg-gray-700 rounded-b-lg transition-all duration-300 animate-slide-in">
              <div className="flex flex-col space-y-4 py-4 px-6">
                <a className="hover:text-indigo-400 transition duration-300 transform hover:translate-x-2" href="/" onClick={toggleMenu}>
                  Accueil
                </a>
                <a className="hover:text-indigo-400 transition duration-300 transform hover:translate-x-2" href="/#services" onClick={toggleMenu}>
                  Découvrir le service
                </a>
                <a className="hover:text-indigo-400 transition duration-300 transform hover:translate-x-2" href="/#reviews" onClick={toggleMenu}>
                  Avis
                </a>
                <a className="hover:text-indigo-400 transition duration-300 transform hover:translate-x-2" href="/#faq" onClick={toggleMenu}>
                  FAQs
                </a>
                {/* CTA Link (Mobile) - Changed to an <a> tag */}
                <a 
                  href="/reservation"
                  target='blank'
                  rel='noreferrer'
                  className={`cta-button font-bold py-3 px-4 rounded-lg transition-all duration-300 text-center transform hover:scale-105 ${
                    showPulse 
                      ? 'animate-pulse-glow animate-shimmer' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>✈️ Demander maintenant</span>
                    <svg className="w-4 h-4 animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};