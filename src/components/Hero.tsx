// src/components/Hero.tsx

import React, { useState, useEffect } from 'react';
import { Icon } from "../pages/Landing";
import Airport from "./../assets/airplane.webp";

export const Hero: React.FC = () => {
    const [showPulse, setShowPulse] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowPulse(true);
            setTimeout(() => setShowPulse(false), 2000);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Simple CSS animations */}
            <style>{`
                @keyframes slide-icon {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(6px); }
                }

                .floating-btn {
                    background: #4f46e5;
                    transition: all 0.3s ease;
                }

                .floating-btn:hover {
                    background: #4338ca;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);
                }

                .btn-icon {
                    animation: slide-icon 2s ease-in-out infinite;
                    transition: transform 0.2s ease;
                }

                .pulse-active .btn-icon {
                    animation: slide-icon 0.8s ease-in-out infinite;
                }
            `}</style>
        
            <section className="bg-cover bg-center h-96 relative" style={{ backgroundImage: `url(${Airport})` }}>
                <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white p-4">
                    <div className="flex items-center text-yellow-400 mb-2">
                        <Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star_half" />
                        <span className="ml-2 text-white">4.9 / 5</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Service de Voiturier Premium à l'Aéroport d'Alger</h1>
                    <p className="text-lg md:text-xl mb-8">Garez-vous sans détours et sans frais supplémentaires. Directement au terminal. Service de première classe &amp; annulation gratuite.</p>
                </div>
            </section>

            {/* Simple Floating CTA Button (Mobile Only) */}
            <a 
                href="/reservation"
                target="_blank"
                rel="noreferrer"
                className={`block md:hidden fixed bottom-6 right-6 z-50 floating-btn text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center space-x-2`}
            >
                <span>✈️ Réserver</span>
                <svg 
                    className="w-4 h-4 btn-icon" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </>
    );
};