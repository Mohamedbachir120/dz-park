export interface IconProps {
  name: string;
  className?: string; // className is optional
}

// Reusable Icon component for clarity

// Type definition for FaqItem props
export  interface FaqItemProps {
  question: string;
  children: React.ReactNode; // Type for any valid React child
}


export interface Client {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  reservations: Reservation[];
  createdAt: string;
  updatedAt: string;
}

export interface Reservation {
  id: string;
  reservationNumber: string;
  dateAller: string;
  flightNumberAller: string;
  dateRetour: string;
  flightNumberRetour: string;
  parkingType: string;
  cleaningType: string;
  withFuel: boolean;
  isOversized: boolean;
  carImmatriculation: string;
  bonDeCommandePath: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  totalPrice: number;
  clientId: string;
  client: Client;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalReservations: number;
  totalClients: number;
  totalRevenue: number;
  pendingReservations: number;
  confirmedReservations: number;
  completedReservations: number;
  cancelledReservations: number;
  recentReservations: Reservation[];
}
