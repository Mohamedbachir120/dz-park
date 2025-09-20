import React from 'react';
 import LoginForm from './pages/LoginForm';
 import { Route, BrowserRouter, Routes } from 'react-router-dom';
// Fix: Use relative paths for local components
import SignUpForm from './pages/SignUpForm';
 import Refund from './components/Refund';
 import Dashboard from './pages/Dashboard';
import Notifications from './components/Notifications';
import { LandingPage } from './pages/Landing';
import { ReservationPage } from './pages/ReservationPage';


const App: React.FC = () => (
  <BrowserRouter>
    <div className="flex min-h-screen w-full flex-col justify-between bg-white">
      <div className="" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
        <Routes>
       
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/refund" element={<Refund />} />
           <Route path="/" element={<LandingPage />} />
           <Route path="/reservation" element={<ReservationPage />} />
    
          <Route path="/notifications" element={<Notifications />} />
         </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;