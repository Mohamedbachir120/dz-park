import React from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// Fix: Use relative paths for local components
import SignUpForm from './components/SignUpForm';
import Onboarding from './components/onBoarding';


const App: React.FC = () => (
  <BrowserRouter>
    <div className="flex min-h-screen w-full flex-col justify-between bg-white">
      <div className="max-w-[390px] mx-auto w-full flex flex-col group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/" element={<Onboarding />} /> {/* Default route */}
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;