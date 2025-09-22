import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Sidebar } from './../components/SideBar';
import { DashboardOverview } from './../components/DashboardOverView';
import { ReservationsSection } from './../components/ReservationSection';
import { ClientsSection } from './../components/ClientSection';
import { ToastContainer } from 'react-toastify';

export const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'reservations':
        return <ReservationsSection />;
      case 'clients':
        return <ClientsSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-0">
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {renderContent()}
        </main>
      </div>
      
      <ToastContainer />
    </div>
  );
};