import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ReportIncident: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 p-4 backdrop-blur-sm">
        <button className="flex size-10 items-center justify-center rounded-full text-[var(--neutral-900)]">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold text-[var(--neutral-900)]">Signaler un incident</h1>
        <div className="size-10"></div>
      </header>
      <main className="flex-grow overflow-y-auto p-4 pb-24">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[var(--neutral-900)]">Détails de l'incident</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--neutral-700)]" htmlFor="incident-date">
                Date de l'incident
              </label>
              <div className="relative mt-1">
                <input
                  className="report-input"
                  id="incident-date"
                  placeholder="Sélectionner la date"
                  type="text"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[var(--secondary-400)]">
                  calendar_today
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--neutral-700)]" htmlFor="incident-time">
                Heure de l'incident
              </label>
              <div className="relative mt-1">
                <input
                  className="report-input"
                  id="incident-time"
                  placeholder="Sélectionner l'heure"
                  type="text"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[var(--secondary-400)]">
                  schedule
                </span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--neutral-700)]" htmlFor="incident-location">
              Lieu de l'incident
            </label>
            <div className="relative mt-1">
              <input
                className="report-input"
                id="incident-location"
                placeholder="Entrer le lieu"
                type="text"
              />
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[var(--secondary-400)]">
                location_on
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--neutral-700)]" htmlFor="description">
              Description
            </label>
            <div className="mt-1">
              <textarea
                className="report-textarea"
                id="description"
                placeholder="Décrire l'incident en détail"
                rows={4}
              ></textarea>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--neutral-900)]">Photos</h3>
            <div className="mt-2 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--secondary-400)] bg-[var(--secondary-100)]/50 px-6 py-10 text-center">
              <div className="mb-4 text-[#108A00]">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[var(--neutral-900)]">Ajouter des photos</h4>
              <p className="mt-1 text-sm text-[var(--neutral-700)]">
                Téléchargez des photos de l'incident pour nous aider à évaluer les dommages.
              </p>
              <button className="mt-4 flex items-center gap-2 rounded-full bg-[var(--light-green-bg)] px-4 py-2 text-sm font-semibold text-[#108A00] hover:bg-green-200">
                <span className="material-symbols-outlined text-base">upload</span>
                <span>Télécharger</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white z-20">
        <div className="px-4 py-3">
          <button className="w-full rounded-full bg-[#108A00] py-3.5 text-base font-bold text-white shadow-lg shadow-green-500/30 hover:bg-green-700">
            Soumettre le rapport
          </button>
        </div>
        <nav className="flex justify-around border-t border-[var(--secondary-100)] px-4 pb-3 pt-2">
          <Link
            to="/dashboard"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/dashboard' ? 'text-[#108A00]' : 'text-[var(--secondary-400)]'}`}
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-xs font-medium">Tableau de bord</span>
          </Link>
          <Link
            to="/report-incident"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/report-incident' ? 'text-[#108A00]' : 'text-[var(--secondary-400)]'} rounded-full px-3`}
          >
            <span className="material-symbols-outlined filled">description</span>
            <span className="text-xs font-bold">Signaler</span>
          </Link>
          <Link
            to="/refund"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/refund' ? 'text-[#108A00]' : 'text-[var(--secondary-400)]'}`}
          >
            <span className="material-symbols-outlined">shield</span>
            <span className="text-xs font-medium">Police</span>
          </Link>
          <Link
            to="/notifications"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/notifications' ? 'text-[#108A00]' : 'text-[var(--secondary-400)]'}`}
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="text-xs font-medium">Notifications</span>
          </Link>
          <Link
            to="/profile"
            className={`flex flex-col items-center gap-1 ${location.pathname === '/profile' ? 'text-[#108A00]' : 'text-[var(--secondary-400)]'}`}
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-xs font-medium">Profil</span>
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default ReportIncident;