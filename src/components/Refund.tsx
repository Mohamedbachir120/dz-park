
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Refund: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex-grow">
      <header className="flex items-center p-4">
        <button className="text-[#111811] flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-[#111811] text-lg font-bold flex-1 text-center pr-10">Statut du remboursement</h1>
      </header>
      <main className="p-4">
        <section className="mb-6">
          <h2 className="text-[#111811] text-2xl font-bold tracking-tight mb-4">Vérifier le statut du remboursement</h2>
          <div className="flex items-center gap-2">
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111811] placeholder:text-gray-500 p-4 text-base font-normal h-14"
              placeholder="Numéro de police"
            />
            <button className="flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 w-14 bg-[#108A00] text-[#111811] text-sm font-bold">
              <span className="material-symbols-outlined text-white">arrow_forward</span>
            </button>
          </div>
        </section>
        <section className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <div
            className="bg-cover bg-center flex flex-col items-start justify-end p-4"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url("/images/refund-bg.jpg")' }}
          >
            <div className="flex items-center gap-3 mb-24">
              <div className="bg-[#108A00] p-2 rounded-full text-white">
                <span className="material-symbols-outlined">hourglass_top</span>
              </div>
              <div>
                <p className="text-white text-lg font-bold">En cours</p>
                <p className="text-gray-200 text-sm">Délai estimé : 3-5 jours ouvrables</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">Numéro de police</p>
                <p className="text-[#111811] text-sm font-medium">1234567890</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">Montant du remboursement</p>
                <p className="text-[#111811] text-sm font-medium">11150,00 DZD</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">Méthode de paiement</p>
                <p className="text-[#111811] text-sm font-medium">Chèque banquaire</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="sticky bottom-0 bg-white">
        <div className="flex justify-around border-t border-gray-100 px-2 pt-2 pb-4">
          <Link
            to="/dashboard"
            className={`flex flex-col items-center justify-end gap-1 ${location.pathname === '/dashboard' ? 'text-[#108A00]' : 'text-gray-500'}`}
          >
            <span className="material-symbols-outlined">home</span>
            <p className="text-xs font-medium">Tableau de bord</p>
          </Link>
          <Link
            to="/report-incident"
            className={`flex flex-col items-center justify-end gap-1 ${location.pathname === '/report-incident' ? 'text-[#108A00]' : 'text-gray-500'}`}
          >
            <span className="material-symbols-outlined">description</span>
            <p className="text-xs font-medium">Signaler</p>
          </Link>
          <Link
            to="/refund"
            className={`flex flex-col items-center justify-end gap-1 ${location.pathname === '/refund' ? 'text-[#108A00]' : 'text-gray-500'}`}
          >
            <div className={`${location.pathname === '/refund' ? 'bg-[#108A00] text-white' : 'bg-gray-100 text-gray-500'} p-3 rounded-full -mt-6 shadow-lg shadow-green-200`}>
              <span className="material-symbols-outlined">shield</span>
            </div>
            <p className="text-xs font-bold mt-1">Police</p>
          </Link>
          <Link
            to="/notifications"
            className={`flex flex-col items-center justify-end gap-1 ${location.pathname === '/notifications' ? 'text-[#108A00]' : 'text-gray-500'}`}
          >
            <span className="material-symbols-outlined">notifications</span>
            <p className="text-xs font-medium">Notifications</p>
          </Link>
          <Link
            to="/profile"
            className={`flex flex-col items-center justify-end gap-1 ${location.pathname === '/profile' ? 'text-[#108A00]' : 'text-gray-500'}`}
          >
            <span className="material-symbols-outlined">person</span>
            <p className="text-xs font-medium">Profil</p>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Refund;
