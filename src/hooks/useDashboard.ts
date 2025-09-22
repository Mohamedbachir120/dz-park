import { useState, useEffect } from 'react';
import { dashboardService } from '../services/dashboardService';
import { Reservation, Client, DashboardStats } from '../types';
import { toast } from 'react-toastify';

export const useDashboard = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState({
    reservations: false,
    clients: false,
    stats: false,
  });

  const fetchReservations = async () => {
    setLoading(prev => ({ ...prev, reservations: true }));
    try {
      const data = await dashboardService.getReservations();
      setReservations(data);
    } catch (error) {
      toast.error('Erreur lors du chargement des réservations');
      console.error('Error fetching reservations:', error);
    } finally {
      setLoading(prev => ({ ...prev, reservations: false }));
    }
  };

  const fetchClients = async () => {
    setLoading(prev => ({ ...prev, clients: true }));
    try {
      const data = await dashboardService.getClients();
      setClients(data);
    } catch (error) {
      toast.error('Erreur lors du chargement des clients');
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(prev => ({ ...prev, clients: false }));
    }
  };

  const fetchStats = async () => {
    setLoading(prev => ({ ...prev, stats: true }));
    try {
      const data = await dashboardService.getStats();
      setStats(data);
    } catch (error) {
      toast.error('Erreur lors du chargement des statistiques');
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(prev => ({ ...prev, stats: false }));
    }
  };

  const refreshAll = async () => {
    await Promise.all([
      fetchReservations(),
      fetchClients(),
      fetchStats(),
    ]);
  };

  return {
    reservations,
    clients,
    stats,
    loading,
    fetchReservations,
    fetchClients,
    fetchStats,
    refreshAll,
  };
};
