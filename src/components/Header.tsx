import React from 'react';

const Header: React.FC = () => (
  <header className="flex h-16 shrink-0 items-center px-4">
    <button className="flex items-center justify-center rounded-full bg-transparent p-2 text-gray-800 hover:bg-gray-100" onClick={() => window.history.back()}>
      <span className="material-symbols-outlined">arrow_back</span>
    </button>
  </header>
);

export default Header;