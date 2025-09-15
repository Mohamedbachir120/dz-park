import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm: React.FC = () => (
  <div className="flex flex-col p-6">
    <header className="flex items-center justify-between">
      <button className="flex items-center justify-center h-10 w-10 text-gray-600" onClick={() => window.history.back()}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
    </header>
    <main className="flex-1 mt-8">
      <h1 className="text-3xl font-bold text-[#052e16] leading-tight tracking-tight">Créer votre compte</h1>
      <form className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#052e16]" htmlFor="first-name">Prénom</label>
            <input
              className="form-input"
              id="first-name"
              placeholder="Jean"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#052e16]" htmlFor="last-name">Nom</label>
            <input
              className="form-input"
              id="last-name"
              placeholder="Dupont"
              type="text"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#052e16]" htmlFor="email">Email</label>
          <input
            className="form-input"
            id="email"
            placeholder="vous@exemple.com"
            type="email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#052e16]" htmlFor="password">Mot de passe</label>
          <input
            className="form-input"
            id="password"
            placeholder="••••••••"
            type="password"
          />
        </div>
        <div>
          <button
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-[#108A00] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            type="submit"
          >
            Créer un compte
          </button>
        </div>
      </form>
    </main>
    <div className="pb-8 px-6 text-center mt-12">
      <p className="text-sm text-gray-500">
        En créant un compte, vous acceptez nos{' '}
        <a className="font-medium text-[#108A00] hover:text-green-500" href="#">
          Conditions d'utilisation
        </a>{' '}
        et notre{' '}
        <a className="font-medium text-[#108A00] hover:text-green-500" href="#">
          Politique de confidentialité
        </a>.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Vous avez déjà un compte ?{' '}
        <Link to="/login" className="font-medium text-[#108A00] hover:text-green-500">
          Se connecter
        </Link>
      </p>
    </div>
  </div>
);

export default SignUpForm;
