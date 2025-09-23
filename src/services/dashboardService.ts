import { apiClient } from './apiClient';
import { Reservation, Client, DashboardStats } from '../types';

export const dashboardService = {
  getReservations: (): Promise<Reservation[]> =>
    apiClient.get<Reservation[]>('/api/dashboard/reservations'),

  getClients: (): Promise<Client[]> =>
    apiClient.get<Client[]>('/api/dashboard/clients'),

  
  getBonDeCommande: (reservationId: string): Promise<Blob> =>
    apiClient.get<Blob>(`/api/dashboard/download-bon/${reservationId}`, {
      responseType: 'blob'
    }),
  
  getStats: async (): Promise<DashboardStats> => {
    const [reservations, clients] = await Promise.all([
      dashboardService.getReservations(),
      dashboardService.getClients(),
    ]);

    const totalRevenue = reservations
      .filter(r => r.status === 'completed')
      .reduce((sum, r) => sum + r.totalPrice, 0);
    
    const pendingReservations = reservations.filter(r => r.status === 'pending').length;
    const confirmedReservations = reservations.filter(r => r.status === 'confirmed').length;
    const completedReservations = reservations.filter(r => r.status === 'completed').length;
    const cancelledReservations = reservations.filter(r => r.status === 'cancelled').length;

    return {
      totalReservations: reservations.length,
      totalClients: clients.length,
      totalRevenue,
      pendingReservations,
      confirmedReservations,
      completedReservations,
      cancelledReservations,
      recentReservations: reservations
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5),
    };
  },
  updateReservationStatus: async (
    reservationId: string,
    status: Reservation['status']
  ): Promise<Reservation> => {
    // Adjust the URL to match your API endpoint
    return apiClient.put(`/api/dashboard/reservations/${reservationId}/status`, { status });
  },
};