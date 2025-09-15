import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ContractDetails: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-[var(--neutral-0)] p-4 pb-3">
        <button className="flex size-10 items-center justify-center rounded-full text-[var(--neutral-900)]">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold text-[var(--neutral-900)]">Détails du contrat</h1>
        <div className="size-10"></div>
      </header>
      <main className="flex-grow overflow-y-auto p-4 space-y-6 pb-20">
        <div className="rounded-xl bg-white shadow-sm ring-1 ring-[var(--neutral-200)]/50 p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-[#108A00]">Police n° : 1234567890</p>
              <h2 className="text-xl font-bold text-[var(--neutral-900)] mt-1">Couverture complète</h2>
              <p className="text-sm text-[var(--neutral-500)] mt-2">
                Couvre les dommages à votre véhicule et à ceux des autres, y compris les accidents, le vol et les catastrophes naturelles.
              </p>
            </div>
            <div
              className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
              style={{ backgroundImage: 'url("/images/contract-details.jpg")' }}
            ></div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-bold text-[var(--neutral-900)] px-4">Détails de la couverture</h3>
          <div className="rounded-xl bg-white shadow-sm ring-1 ring-[var(--neutral-200)]/50">
            <div className="grid grid-cols-2 gap-4 p-4 border-b border-[var(--neutral-100)]">
              <p className="text-sm text-[var(--neutral-500)]">Date de début de la police</p>
              <p className="text-sm font-medium text-[var(--neutral-900)] text-right">1er janvier 2024</p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4 border-b border-[var(--neutral-100)]">
              <p className="text-sm text-[var(--neutral-500)]">Date de fin de la police</p>
              <p className="text-sm font-medium text-[var(--neutral-900)] text-right">31 décembre 2024</p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <p className="text-sm text-[var(--neutral-500)]">Type de couverture</p>
              <p className="text-sm font-medium text-[var(--neutral-900)] text-right">Complète</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-bold text-[var(--neutral-900)] px-4">Informations sur le véhicule</h3>
          <div className="rounded-xl bg-white shadow-sm ring-1 ring-[var(--neutral-200)]/50">
            <div className="grid grid-cols-2 gap-4 p-4 border-b border-[var(--neutral-100)]">
              <p className="text-sm text-[var(--neutral-500)]">Marque</p>
              <p className="text-sm font-medium text-[var(--neutral-900)] text-right">Toyota</p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4 border-b border-[var(--neutral-100)]">
              <p className="text-sm text-[var(--neutral-500)]">Modèle</p>
              <p className="text-sm font-medium text-[var(--neutral-900)] text-right">Camry</p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <p className="text-sm text-[var(--neutral-500)]">Année</p>
              <p className="text-sm font-medium text-[var(--neutral-900)] text-right">2022</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--neutral-200)]/80 pb-3 pt-2 px-2 z-20">
        <nav className="flex justify-around">
          <Link
            to="/dashboard"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/dashboard' ? 'text-[#108A00]' : 'text-[var(--neutral-500)]'} w-1/5`}
          >
            <span className="material-symbols-outlined text-2xl">home</span>
            <p className="text-xs font-medium">Tableau de bord</p>
          </Link>
          <Link
            to="/report-incident"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/report-incident' ? 'text-[#108A00]' : 'text-[var(--neutral-500)]'} w-1/5`}
          >
            <span className="material-symbols-outlined text-2xl">description</span>
            <p className="text-xs font-medium">Signaler</p>
          </Link>
          <Link
            to="/refund"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/refund' ? 'text-[#108A00]' : 'text-[var(--neutral-500)]'} w-1/5`}
          >
            <span className="material-symbols-outlined text-2xl">shield</span>
            <p className="text-xs font-medium">Police</p>
          </Link>
          <Link
            to="/notifications"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/notifications' ? 'text-[#108A00]' : 'text-[var(--neutral-500)]'} w-1/5`}
          >
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <p className="text-xs font-medium">Notifications</p>
          </Link>
          <Link
            to="/profile"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/profile' ? 'text-[#108A00]' : 'text-[var(--neutral-500)]'} w-1/5`}
          >
            <span className="material-symbols-outlined text-2xl">person</span>
            <p className="text-xs font-medium">Profil</p>
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default ContractDetails;