import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Profile: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center bg-white p-4 justify-between sticky top-0 z-10 border-b border-[var(--light-green-bg)]">
        <button className="text-[var(--dark-green-text)] flex size-8 shrink-0 items-center justify-center rounded-full hover:bg-gray-100">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-[var(--dark-green-text)] text-lg font-bold leading-tight flex-1 text-center">Profil</h1>
        <div className="size-8"></div>
      </header>
      <main className="flex-grow overflow-y-auto p-4 sm:p-6 pb-20">
        <div className="flex w-full flex-col gap-6 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-2 border-white shadow-md"
              style={{ backgroundImage: 'url("/images/profile-pic.jpg")' }}
            ></div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[var(--dark-green-text)] text-2xl font-bold leading-tight">Ethan Carter</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-[#108A00]">
                  Membre Premium
                </span>
                <span className="text-gray-500 text-sm">Inscrit en 2021</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="px-4">
            <h2 className="text-[var(--dark-green-text)] text-xl font-bold leading-tight mb-4">Détails personnels</h2>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <span className="material-symbols-outlined text-[#108A00]">email</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-normal">Email</p>
                  <p className="text-[var(--dark-green-text)] text-base font-medium">ethan.carter@email.com</p>
                </div>
              </div>
              <button className="text-[#108A00] text-sm font-semibold">Modifier</button>
            </div>
            <hr className="border-[var(--light-green-bg)]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <span className="material-symbols-outlined text-[#108A00]">call</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-normal">Téléphone</p>
                  <p className="text-[var(--dark-green-text)] text-base font-medium">+33 1 23 45 67 89</p>
                </div>
              </div>
              <button className="text-[#108A00] text-sm font-semibold">Modifier</button>
            </div>
            <hr className="border-[var(--light-green-bg)]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <span className="material-symbols-outlined text-[#108A00]">home</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-normal">Adresse</p>
                  <p className="text-[var(--dark-green-text)] text-base font-medium">123 Rue Principale, Ville, France</p>
                </div>
              </div>
              <button className="text-[#108A00] text-sm font-semibold">Modifier</button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center px-4 mb-4">
            <h2 className="text-[var(--dark-green-text)] text-xl font-bold leading-tight">Véhicules assurés</h2>
            <button className="text-[#108A00] text-sm font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined">add</span>
              <span>Ajouter</span>
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                style={{ backgroundImage: 'url("/images/toyota-camry.jpg")' }}
              ></div>
              <div className="flex-1">
                <p className="text-[var(--dark-green-text)] text-base font-bold line-clamp-1">Toyota Camry</p>
                <p className="text-gray-500 text-sm font-normal line-clamp-2">Modèle 2020</p>
              </div>
              <button className="text-[#108A00]">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                style={{ backgroundImage: 'url("/images/honda-civic.jpg")' }}
              ></div>
              <div className="flex-1">
                <p className="text-[var(--dark-green-text)] text-base font-bold line-clamp-1">Honda Civic</p>
                <p className="text-gray-500 text-sm font-normal line-clamp-2">Modèle 2018</p>
              </div>
              <button className="text-[#108A00]">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--light-green-bg)] z-20 pb-2">
        <nav className="flex justify-around items-center pt-2">
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
            <span className="material-symbols-outlined">shield</span>
            <p className="text-xs font-medium">Police</p>
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
            <span className="material-symbols-outlined filled">person</span>
            <p className="text-xs font-bold">Profil</p>
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Profile;