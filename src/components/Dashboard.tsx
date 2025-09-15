import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex-grow">
      <div className="flex items-center bg-white p-4 pb-3 justify-between sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-[#1D2939]">Tableau de bord</h1>
        <button className="text-[#1D2939] p-2 rounded-full hover:bg-gray-100">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
      <div className="p-4 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-[#1D2939] mb-3">Statut du contrat</h2>
          <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#108A00]">Actif</p>
              <p className="text-base font-bold text-[#1D2939] mt-1">Couverture en cours</p>
              <p className="text-sm text-gray-500 mt-1">Votre police est actuellement active et protège votre véhicule.</p>
            </div>
            <div
              className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
              style={{ backgroundImage: 'url("/images/contract-status.jpg")' }}
            ></div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[#1D2939] mb-3">Polices actives</h2>
          <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="flex-1">
              <p className="text-base font-bold text-[#1D2939]">Couverture complète</p>
              <p className="text-sm text-gray-500 mt-1">Numéro de police : 1234567890</p>
            </div>
            <div
              className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
              style={{ backgroundImage: 'url("/images/active-policy.jpg")' }}
            ></div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[#1D2939] mb-3">Dates de renouvellement</h2>
          <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="flex-1">
              <p className="text-base font-bold text-[#1D2939]">Renouvellement de la police</p>
              <p className="text-sm text-gray-500 mt-1">Date de renouvellement : 31/12/2024</p>
            </div>
            <div
              className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
              style={{ backgroundImage: 'url("/images/renewal-date.jpg")' }}
            ></div>
          </div>
        </div>
      </div>
      <footer className="sticky bottom-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center px-2 py-2">
          <Link
            to="/dashboard"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/dashboard' ? 'text-[#108A00]' : 'text-gray-500'} p-2 rounded-lg`}
          >
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-xs font-medium">Tableau de bord</p>
          </Link>
          <Link
            to="/report-incident"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/report-incident' ? 'text-[#108A00]' : 'text-gray-500'} p-2 rounded-lg`}
          >
            <span className="material-symbols-outlined">description</span>
            <p className="text-xs font-medium">Signaler</p>
          </Link>
          <Link
            to="/refund"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/refund' ? 'text-[#108A00]' : 'text-gray-500'} p-2 rounded-lg`}
          >
            <span className="material-symbols-outlined">shield</span>
            <p className="text-xs font-medium">Police</p>
          </Link>
          <Link
            to="/notifications"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/notifications' ? 'text-[#108A00]' : 'text-gray-500'} p-2 rounded-lg`}
          >
            <span className="material-symbols-outlined">notifications</span>
            <p className="text-xs font-medium">Notifications</p>
          </Link>
          <Link
            to="/profile"
            className={`flex flex-col items-center justify-center gap-1 ${location.pathname === '/profile' ? 'text-[#108A00]' : 'text-gray-500'} p-2 rounded-lg`}
          >
            <span className="material-symbols-outlined">person</span>
            <p className="text-xs font-medium">Profil</p>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;