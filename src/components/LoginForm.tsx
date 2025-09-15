import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LoginForm: React.FC = () => (
    <div>

    <Header />
  <main className="flex flex-1 flex-col px-6 pt-8">
    <div className="flex flex-col space-y-2 pb-8">
      <h1 className="text-3xl font-bold tracking-tight text-[#111811]">BDSF Mobile</h1>
      <p className="text-gray-500">Connectez-vous à votre compte pour continuer.</p>
    </div>
    <form className="flex flex-col space-y-6" >
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-[#111811]" htmlFor="email">Email ou nom d'utilisateur</label>
        <input className="form-input" id="email" placeholder="vous@exemple.com" type="text" />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-[#111811]" htmlFor="password">Mot de passe</label>
          <a className="text-sm font-medium text-[#108A00] hover:underline" href="#">Mot de passe oublié ?</a>
        </div>
        <input className="form-input" id="password" placeholder="Entrez votre mot de passe" type="password" />
      </div>
      <a
        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-auto px-5 py-4 flex-1 bg-[#108A00] text-white text-base font-bold leading-normal tracking-wide shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
       href='/dashboard'
   
      >
        <span className="truncate">Se connecter</span>
      </a>
    </form>

  </main>
    <Footer/>
    </div>
);

export default LoginForm;
