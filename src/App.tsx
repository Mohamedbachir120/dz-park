import React from 'react';
 import LoginForm from './pages/LoginForm';
 import { Route, BrowserRouter, Routes, Router, Navigate } from 'react-router-dom';
// Fix: Use relative paths for local components
import SignUpForm from './pages/SignUpForm';
 import Refund from './components/Refund';
 import {Dashboard} from './pages/Dashboard';
import Notifications from './components/Notifications';
import { LandingPage } from './pages/Landing';
import { ReservationPage } from './pages/ReservationPage';
import { AuthProvider,  } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRouteComponent';


// Example usage in App.tsx
export const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/reservation" element={<ReservationPage />} />

          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;