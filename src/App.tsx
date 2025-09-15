import React from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// Fix: Use relative paths for local components
import SignUpForm from './components/SignUpForm';
import Onboarding from './components/onBoarding';
import Refund from './components/Refund';
import ContractDetails from './components/ContratDetail';
import Dashboard from './components/Dashboard';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import ReportIncident from './components/ReportIncident';


const App: React.FC = () => (
  <BrowserRouter>
    <div className="flex min-h-screen w-full flex-col justify-between bg-white">
      <div className="max-w-[390px] mx-auto w-full flex flex-col group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
        <Routes>
       
            <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report-incident" element={<ReportIncident />} />
          <Route path="/contract-details" element={<ContractDetails />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/" element={<Onboarding />} /> {/* Default route */}
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;