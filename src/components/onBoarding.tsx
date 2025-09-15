
import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding: React.FC = () => (
  <div className="relative flex flex-col min-h-screen">
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-end p-4">
      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600">
        <span className="material-symbols-outlined">close</span>
      </button>
    </header>
    <main className="flex flex-col items-center justify-center flex-grow px-6 text-center">
      <div className="flex items-center justify-center p-8 bg-[var(--light-green-bg)] rounded-full mb-8">
        <svg
          className="w-16 h-16 text-[var(--dark-green-text)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <h1 className="text-[var(--dark-green-text)] text-3xl font-bold leading-tight mb-4">
        Obtenez un devis en minutes
      </h1>
      <p className="text-[var(--dark-green-text)] text-lg font-normal leading-relaxed mb-8 max-w-sm">
        Répondez à quelques questions pour trouver la meilleure couverture pour vos besoins.
      </p>
      <div className="flex w-full flex-row items-center justify-center gap-2 mb-8">
        <div className="h-1.5 w-8 rounded-full bg-[var(--dark-green-text)]"></div>
        <div className="h-1.5 w-8 rounded-full bg-gray-200"></div>
        <div className="h-1.5 w-8 rounded-full bg-gray-200"></div>
      </div>
      <button
        className="w-full max-w-sm cursor-pointer rounded-full h-14 px-8 bg-[#108A00] text-white text-lg font-bold tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={() => {
          window.location.href = '/signup';
        }}
      >
        Commencer
      </button>
    </main>
    <footer className="w-full">
      <div className="flex border-t border-gray-100 bg-white">
        <Link
          to="/onboarding"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-[var(--dark-green-text)]"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-xs font-medium">Accueil</span>
        </Link>
        <a
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-gray-400"
          href="#"
        >
          <span className="material-symbols-outlined">directions_car</span>
          <span className="text-xs font-medium">Ma voiture</span>
        </a>
        <a
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-gray-400"
          href="#"
        >
          <span className="material-symbols-outlined">description</span>
          <span className="text-xs font-medium">Polices</span>
        </a>
        <a
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-gray-400"
          href="#"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="text-xs font-medium">Profil</span>
        </a>
      </div>
    </footer>
  </div>
);

export default Onboarding;
