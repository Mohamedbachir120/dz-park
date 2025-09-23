import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { dashboardService } from '../services/dashboardService';
import { Reservation } from '../types'; // Make sure Reservation type is imported
import { toast } from 'react-toastify';
import { ConfirmationModal } from './confirmationModal'; // Import the new modal

// Define reservation status types and translations
type ReservationStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
const statusOptions: ReservationStatus[] = ['pending', 'confirmed', 'completed', 'cancelled'];

const statusStyles: Record<ReservationStatus, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
};

const statusTranslations: Record<ReservationStatus, string> = {
    pending: 'En attente',
    confirmed: 'Confirmée',
    completed: 'Terminée',
    cancelled: 'Annulée',
};


export const ReservationsSection: React.FC = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [filteredReservations, setFilteredReservations] = useState<Reservation[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    // State for the new features
    const [editingStatusId, setEditingStatusId] = useState<string | null>(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState<{top: number, left: number} | null>(null);
    const [confirmationDetails, setConfirmationDetails] = useState<{
        reservationId: string;
        newStatus: ReservationStatus;
        reservationNumber: string;
    } | null>(null);

    const statusDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchReservations();
    }, []);

    useEffect(() => {
        filterReservations();
    }, [reservations, searchTerm, statusFilter]);

    // Effect to close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (statusDropdownRef.current && !statusDropdownRef.current.contains(event.target as Node)) {
                setEditingStatusId(null);
                setDropdownPosition(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const fetchReservations = async () => {
        try {
            const data = await dashboardService.getReservations();
            setReservations(data);
        } catch (error) {
            toast.error('Erreur lors du chargement des réservations');
            console.error('Error fetching reservations:', error);
        } finally {
            setLoading(false);
        }
    };

    const filterReservations = () => {
        let filtered = reservations;
       
        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(reservation =>
                reservation.reservationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                reservation.client.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                reservation.carImmatriculation.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter(reservation => reservation.status === statusFilter);
        }

        setFilteredReservations(filtered);
    };

    const handleStatusClick = (reservationId: string, event: React.MouseEvent) => {
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        setDropdownPosition({
            top: rect.bottom + window.scrollY + 5,
            left: rect.left + window.scrollX
        });
        setEditingStatusId(reservationId === editingStatusId ? null : reservationId);
    };

    // --- NEW HANDLERS ---
    const handleStatusChangeRequest = (
        reservation: Reservation,
        newStatus: ReservationStatus
    ) => {
        setEditingStatusId(null); // Close dropdown
        setDropdownPosition(null);
        if (reservation.status === newStatus) return; // Do nothing if status is the same

        setConfirmationDetails({
            reservationId: reservation.id,
            newStatus,
            reservationNumber: reservation.reservationNumber
        });
    };

    const handleConfirmStatusChange = async () => {
        if (!confirmationDetails) return;

        setIsUpdating(true);
        try {
            const updatedReservation = await dashboardService.updateReservationStatus(
                confirmationDetails.reservationId,
                confirmationDetails.newStatus
            );

            // Update local state for immediate UI feedback
            setReservations(prev =>
                prev.map(res =>
                    res.id === updatedReservation.id ? { ...res, status: updatedReservation.status } : res
                )
            );
            toast.success(`Statut de la réservation ${confirmationDetails.reservationNumber} mis à jour.`);
        } catch (error) {
            toast.error('Erreur lors de la mise à jour du statut.');
            console.error('Error updating status:', error);
        } finally {
            setIsUpdating(false);
            setConfirmationDetails(null); // Close modal
        }
    };


    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'DZD' }).format(price);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
        });
    };

    if (loading) {
        return (
            <div className="p-6">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-64 bg-gray-200 rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Réservations</h2>
                <p className="text-gray-600">Gérer toutes les réservations</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Rechercher par numéro, client ou immatriculation..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter size={20} className="text-gray-400" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                            <option value="all">Tous les statuts</option>
                            <option value="pending">En attente</option>
                            <option value="confirmed">Confirmée</option>
                            <option value="completed">Terminée</option>
                            <option value="cancelled">Annulée</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    N° Réservation
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Client
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Dates
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Véhicule
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Prix
                                </th>
                                <th>
                                    Bon de commande
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Statut
                                </th>

                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredReservations.map((reservation) => (
                                <tr key={reservation.id} className="hover:bg-gray-50">

                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {reservation.reservationNumber}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">
                                                {reservation.client.fullName}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {reservation.client.email}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div>
                                            <div>Aller: {formatDate(reservation.dateAller)}</div>
                                            <div>Retour: {formatDate(reservation.dateRetour)}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{reservation.carImmatriculation}</div>
                                        <div className="text-sm text-gray-500">{reservation.parkingType}</div>
                                    </td>
                                    <td>
                                        <button
                                        className='btn bg-primary p-2 text-white rounded-lg hover:bg-green-600'
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            dashboardService.getBonDeCommande(reservation.id)
                                            .then((blob) => {
                                                // Create a URL for the blob
                                                const url = window.URL.createObjectURL(new Blob([blob]));
                                                const link = document.createElement('a');
                                                link.href = url;
                                                link.setAttribute('download', `BonDeCommande_${reservation.reservationNumber}.pdf`);
                                                document.body.appendChild(link);
                                                link.click();
                                                link.parentNode?.removeChild(link);
                                            })
                                            .catch((error) => {
                                                console.error('Error downloading the file:', error);
                                                toast.error('Erreur lors du téléchargement du bon de commande.');
                                            });

                                        }}> 
                                        
                                        Télécharger le pdf</button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {formatPrice(reservation.totalPrice)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap relative">
                                        <button
                                            onClick={(e) => handleStatusClick(reservation.id, e)}
                                            className={`px-2 py-1 text-xs font-semibold rounded-full cursor-pointer w-24 text-center transition-transform transform hover:scale-105 ${statusStyles[reservation.status]}`}
                                        >
                                            {statusTranslations[reservation.status]}
                                        </button>

                                        {/* Status Dropdown */}
                                        {editingStatusId === reservation.id && dropdownPosition && (
                                            <div
                                                ref={statusDropdownRef}
                                                className="fixed z-50 w-48 bg-white rounded-md shadow-lg border border-gray-200"
                                                style={{
                                                    top: `${dropdownPosition.top}px`,
                                                    left: `${dropdownPosition.left}px`
                                                }}
                                            >
                                                <ul className="py-1">
                                                    {statusOptions.map(status => (
                                                        <li key={status}>
                                                            <a
                                                                href="#"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleStatusChangeRequest(reservation, status);
                                                                }}
                                                                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${reservation.status === status ? 'font-bold bg-gray-100' : ''
                                                                    }`}
                                                            >
                                                                {statusTranslations[status]}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredReservations.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Aucune réservation trouvée</p>
                    </div>
                )}
            </div>

            {/* --- ADD THE MODAL TO THE COMPONENT'S RENDER --- */}
            <ConfirmationModal
                isOpen={!!confirmationDetails}
                onClose={() => setConfirmationDetails(null)}
                onConfirm={handleConfirmStatusChange}
                title="Changement de Statut"
                isLoading={isUpdating}
            >
                <p>Êtes-vous sûr de vouloir changer le statut de la réservation <strong>{confirmationDetails?.reservationNumber}</strong> à <span className="font-semibold">{confirmationDetails && statusTranslations[confirmationDetails.newStatus]}</span> ?</p>
            </ConfirmationModal>
        </div>
    );
};