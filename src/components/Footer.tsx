import React from 'react';

const Footer: React.FC = () => (
  <footer className="px-6 py-8">
    <p className="text-center text-sm text-gray-500">
      Pas de compte ?
      <a className="font-medium text-[#108A00] hover:underline" href="/signup">S'inscrire</a>
    </p>
  </footer>
);

export default Footer;