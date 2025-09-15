import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Notifications: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-[var(--neutral-0)] shadow-sm">
        <div className="flex items-center p-4">
          <button aria-label="Retour" className="text-[var(--neutral-900)]">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="text-lg font-bold text-[var(--neutral-900)] text-center flex-1">Notifications</h1>
          <div className="w-10"></div>
        </div>
      </header>
      <main className="flex-grow overflow-y-auto p-4 space-y-4 pb-20">
        <div className="bg-[var(--neutral-0)] rounded-xl shadow-md p-4 flex items-start gap-4">
          <div className="bg-[var(--neutral-100)] rounded-full p-3 text-[#108A00]">
            <span className="material-symbols-outlined">policy</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-baseline">
              <h2 className="text-base font-semibold text-[var(--neutral-900)]">Rappel de renouvellement de police</h2>
              <p className="text-xs text-[var(--neutral-700)]">2j</p>
            </div>
            <p className="text-sm text-[var(--neutral-700)] mt-1">
              Votre police doit être renouvelée le 15 juillet. Renouvelez maintenant pour maintenir votre couverture.
            </p>
            <button className="mt-3 bg-[#108A00] text-[var(--neutral-0)] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors">
              Renouveler maintenant
            </button>
          </div>
        </div>
        <div className="bg-[var(--neutral-0)] rounded-xl shadow-md p-4 flex items-start gap-4">
          <div className="bg-[var(--neutral-100)] rounded-full p-3 text-[#108A00]">
            <span className="material-symbols-outlined">description</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-baseline">
              <h2 className="text-base font-semibold text-[var(--neutral-900)]">Mise à jour de la réclamation</h2>
              <p className="text-xs text-[var(--neutral-700)]">1s</p>
            </div>
            <p className="text-sm text-[var(--neutral-700)] mt-1">
              Votre réclamation pour l'accident du 20 juin a été mise à jour.
            </p>
            <button className="mt-3 text-[#108A00] px-4 py-2 rounded-lg text-sm font-semibold border border-[#108A00] hover:bg-[#108A00] hover:text-white transition-colors">
              Voir les détails
            </button>
          </div>
        </div>
        <div className="bg-[var(--neutral-0)] rounded-xl shadow-md p-4 flex items-start gap-4">
          <div className="bg-[var(--neutral-100)] rounded-full p-3 text-[#108A00]">
            <span className="material-symbols-outlined">policy</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-baseline">
              <h2 className="text-base font-semibold text-[var(--neutral-900)]">Rappel de renouvellement de police</h2>
              <p className="text-xs text-[var(--neutral-700)]">2s</p>
            </div>
            <p className="text-sm text-[var(--neutral-700)] mt-1">
              Votre police doit être renouvelée le 1er août. Renouvelez maintenant pour maintenir votre couverture.
            </p>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-[var(--neutral-0)] border-t border-[var(--neutral-200)] z-20">
        <nav className="flex justify-around py-2">
          <Link
            to="/dashboard"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/dashboard' ? 'text-[#108A00]' : 'text-[var(--neutral-700)]'} hover:text-[#108A00] transition-colors`}
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-xs font-medium">Tableau de bord</span>
          </Link>
          <Link
            to="/report-incident"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/report-incident' ? 'text-[#108A00]' : 'text-[var(--neutral-700)]'} hover:text-[#108A00] transition-colors`}
          >
            <span className="material-symbols-outlined">description</span>
            <span className="text-xs font-medium">Signaler</span>
          </Link>
          <Link
            to="/refund"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/refund' ? 'text-[#108A00]' : 'text-[var(--neutral-700)]'} hover:text-[#108A00] transition-colors`}
          >
            <span className="material-symbols-outlined">shield</span>
            <span className="text-xs font-medium">Police</span>
          </Link>
          <Link
            to="/notifications"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/notifications' ? 'text-[#108A00]' : 'text-[var(--neutral-700)]'} hover:text-[#108A00] transition-colors`}
          >
            <span className="material-symbols-outlined filled">notifications_active</span>
            <span className="text-xs font-medium">Notifications</span>
          </Link>
          <Link
            to="/profile"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/profile' ? 'text-[#108A00]' : 'text-[var(--neutral-700)]'} hover:text-[#108A00] transition-colors`}
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-xs font-medium">Profil</span>
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Notifications;