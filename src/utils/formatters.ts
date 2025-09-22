import { Reservation } from "types";

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'DZD',
    }).format(price ); // Assuming price is in cents
  };
  
  export const formatDate = (dateString: string, includeTime = false): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  
    if (includeTime) {
      options.hour = '2-digit';
      options.minute = '2-digit';
    }
  
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };
  
  export const formatPhoneNumber = (phone: string): string => {
    // Format French phone number: +33 6 12 34 56 78
    return phone.replace(/(\+33)(\d)(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5 $6');
  };
  
  export const getReservationStatus = (reservation: Reservation) => {
    const now = new Date();
    const departureDate = new Date(reservation.dateAller);
    const returnDate = new Date(reservation.dateRetour);
  
    if (now < departureDate) {
      return { status: 'upcoming', label: 'À venir', color: 'blue' };
    } else if (now >= departureDate && now <= returnDate) {
      return { status: 'active', label: 'En cours', color: 'green' };
    } else {
      return { status: 'completed', label: 'Terminé', color: 'gray' };
    }
  };
  
  // components/LoadingSpinner.tsx - Reusable loading component
 
  