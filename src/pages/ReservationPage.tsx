import React, { useState, useEffect, ChangeEvent, FormEvent, ReactNode } from 'react';

// Updated interfaces
interface FormData {
  dateAller: string; 
  flightNumberAller: string; 
  dateRetour: string; 
  flightNumberRetour: string; 
  parkingType: 'externe' | 'interne'; 
  cleaningType: 'none' | 'exterior' | 'interior' | 'full';
  withFuel: boolean; 
  isOversized: boolean; 
  fullName: string; 
  email: string; 
  phoneNumber: string; 
  carImmatriculation: string;
}

interface FormErrors {
  dateAller?: string; 
  flightNumberAller?: string; 
  dateRetour?: string; 
  flightNumberRetour?: string; 
  fullName?: string; 
  email?: string; 
  phoneNumber?: string; 
  carImmatriculation?: string;
}

const Section: React.FC<{ title: string; children: ReactNode; className?: string }> = ({ 
  title, children, className = 'bg-indigo-600' 
}) => (
  <div className="space-y-6">
    <h2 className={`text-lg font-semibold text-white p-3 rounded-t-lg ${className}`}>{title}</h2>
    <div className="px-1 md:px-4">
      {children}
    </div>
  </div>
);

// Parking Option Card Component
const ParkingCard: React.FC<{
  type: 'externe' | 'interne';
  selected: boolean;
  onClick: () => void;
}> = ({ type, selected, onClick }) => {
  const isExternal = type === 'externe';
  
  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
        selected 
          ? 'border-indigo-500 bg-indigo-50 shadow-lg' 
          : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
      }`}
    >
      <div className="text-center">
        <div className="w-full h-32 mb-3 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          {isExternal ? (
            <svg className="w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          ) : (
            <svg className="w-20 h-20 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          )}
        </div>
        <h3 className={`font-semibold text-lg mb-2 ${selected ? 'text-indigo-800' : 'text-gray-800'}`}>
          Parking {isExternal ? 'Externe' : 'Interne'}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {isExternal 
            ? 'À l\'air libre, plus économique' 
            : 'Couvert et sécurisé, protection optimale'
          }
        </p>
        {/* <div className={`text-xl font-bold ${selected ? 'text-indigo-600' : 'text-gray-700'}`}>
          {isExternal ? '500' : '600'} DZD/jour
        </div> */}
      </div>
    </div>
  );
};

// Cleaning Option Card Component
const CleaningCard: React.FC<{
  type: 'none' | 'exterior' | 'interior' | 'full';
  selected: boolean;
  onClick: () => void;
}> = ({ type, selected, onClick }) => {
  const cleaningOptions = {
    none: { 
      title: 'Pas de lavage', 
      description: 'Pas de service de nettoyage', 
      price: 0, 
      icon: '🚫',
      color: 'gray'
    },
    exterior: { 
      title: 'Lavage Extérieur', 
      description: 'Nettoyage de la carrosserie, jantes et vitres', 
      price: 800, 
      icon: '🚿',
      color: 'blue'
    },
    interior: { 
      title: 'Nettoyage Intérieur', 
      description: 'Aspirateur, nettoyage des sièges et tableau de bord', 
      price: 600, 
      icon: '🧽',
      color: 'purple'
    },
    full: { 
      title: 'Lavage Complet', 
      description: 'Nettoyage intérieur + extérieur', 
      price: 1200, 
      icon: '✨',
      color: 'green'
    }
  };

  const option = cleaningOptions[type];
  const colorClasses = {
    gray: selected ? 'border-gray-500 bg-gray-50' : 'border-gray-200 hover:border-gray-300',
    blue: selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300',
    purple: selected ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300',
    green: selected ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'
  };

  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
        colorClasses[option.color as keyof typeof colorClasses]
      } ${!selected ? 'bg-white hover:shadow-md' : 'shadow-lg'}`}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">{option.icon}</div>
        <h3 className={`font-semibold text-lg mb-2 ${selected ? `text-${option.color}-800` : 'text-gray-800'}`}>
          {option.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 h-12">
          {option.description}
        </p>
        {/* <div className={`text-xl font-bold ${selected ? `text-${option.color}-600` : 'text-gray-700'}`}>
          {option.price > 0 ? `+${option.price} DZD` : 'Gratuit'}
        </div> */}
      </div>
    </div>
  );
};

// Fuel Service Card Component
const FuelCard: React.FC<{
    selected: boolean;
    onClick: () => void;
  }> = ({ selected, onClick }) => {
    return (
      <div 
        onClick={onClick}
        className={`cursor-pointer p-4 sm:p-6 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
          selected 
            ? 'border-orange-500 bg-orange-50 shadow-lg' 
            : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-md'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <div className="text-4xl sm:text-5xl">⛽</div>
          <div className="flex-1">
            <h3 className={`font-semibold text-lg sm:text-xl mb-1 sm:mb-2 ${selected ? 'text-orange-800' : 'text-gray-800'}`}>
              Service Carburant
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              Remplissage du réservoir avant votre retour
            </p>
            <div className={`text-xl sm:text-2xl font-bold ${selected ? 'text-orange-600' : 'text-gray-700'}`}>
              +1000 DZD
            </div>
          </div>
          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 ${
            selected ? 'bg-orange-500 border-orange-500' : 'border-gray-300'
          } flex items-center justify-center flex-shrink-0`}>
            {selected && <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>}
          </div>
        </div>
      </div>
    );
  };
  

export const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ 
    dateAller: '', 
    flightNumberAller: '', 
    dateRetour: '', 
    flightNumberRetour: '', 
    parkingType: 'externe', 
    cleaningType: 'none',
    withFuel: false, 
    isOversized: false, 
    fullName: '', 
    email: '', 
    phoneNumber: '+213', 
    carImmatriculation: '' 
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (formData.dateAller && formData.dateRetour) {
      const startDate = new Date(formData.dateAller);
      const endDate = new Date(formData.dateRetour);
      
      if (endDate > startDate) {
        const diffDays = Math.ceil(Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        let dailyRate = formData.parkingType === 'externe' ? 500 : 600;
        if (formData.isOversized) dailyRate += 100;
        if (diffDays > 5) dailyRate -= 100;
        
        let finalPrice = diffDays * dailyRate;
        
        // Add cleaning prices
        const cleaningPrices = {
          none: 0,
          exterior: 800,
          interior: 600,
          full: 1200
        };
        finalPrice += cleaningPrices[formData.cleaningType];
        
        if (formData.withFuel) finalPrice += 1000;
        setTotalPrice(finalPrice);
      } else {
        setTotalPrice(0);
      }
    } else {
      setTotalPrice(0);
    }
  }, [formData]);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.dateAller) errors.dateAller = 'Date d\'aller requise';
    if (!formData.dateRetour) errors.dateRetour = 'Date de retour requise';
    if (new Date(formData.dateAller) >= new Date(formData.dateRetour)) errors.dateRetour = 'La date de retour doit être postérieure';
    if (!formData.flightNumberAller.trim()) errors.flightNumberAller = 'Numéro de vol aller requis';
    if (!formData.flightNumberRetour.trim()) errors.flightNumberRetour = 'Numéro de vol retour requis';
    if (!formData.fullName.trim()) errors.fullName = 'Nom complet requis';
    if (!/^\+213[0-9]{9}$/.test(formData.phoneNumber)) errors.phoneNumber = 'Format invalide (+213XXXXXXXXX)';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Adresse e-mail invalide';
    if (!formData.carImmatriculation.trim()) errors.carImmatriculation = 'Immatriculation requise';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    if (validateForm()) { 
      alert(`Demande soumise! Total: ${totalPrice} DZD.`); 
      window.location.href = '/'; 
    }
  };

  const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]) => { 
    setFormData(prev => ({ ...prev, [field]: value })); 
    if (formErrors[field as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined })); 
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => { 
    const { name, value, type, checked } = e.target; 
    updateFormData(name as keyof FormData, type === 'checkbox' ? checked : (value as any)); 
  };

  const getDaysCount = (): number => { 
    if (formData.dateAller && formData.dateRetour) { 
      const s = new Date(formData.dateAller);
      const e = new Date(formData.dateRetour); 
      if (e > s) return Math.ceil(Math.abs(e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24)); 
    } 
    return 0;
  };

  const PriceSummaryDetails = () => {
    const days = getDaysCount();
    const cleaningPrices = { none: 0, exterior: 800, interior: 600, full: 1200 };
    const cleaningNames = { none: 'Aucun', exterior: 'Extérieur', interior: 'Intérieur', full: 'Complet' };
    
    return (
      <>
        <h3 className="font-bold text-lg text-indigo-800 mb-4">💰 Calcul du prix</h3>
        <div className="space-y-2 text-sm text-indigo-700">
          <div className="flex justify-between">
            <span>Durée:</span>
            <span className="font-medium">{days} jour{days > 1 ? 's' : ''}</span>
          </div>
          <div className="flex justify-between">
            <span>Parking {formData.parkingType}:</span>
            <span className="font-medium">{days} × {formData.parkingType === 'externe' ? 500 : 600} DZD</span>
          </div>
          {formData.isOversized && (
            <div className="flex justify-between">
              <span>Surcharge gabarit:</span>
              <span className="font-medium">+{days * 100} DZD</span>
            </div>
          )}
          {days > 5 && (
            <div className="text-green-600 text-xs font-medium">✓ Remise de -100 DZD/jour</div>
          )}
          {formData.cleaningType !== 'none' && (
            <div className="flex justify-between">
              <span>Lavage {cleaningNames[formData.cleaningType]}:</span>
              <span className="font-medium">+{cleaningPrices[formData.cleaningType]} DZD</span>
            </div>
          )}
          {formData.withFuel && (
            <div className="flex justify-between">
              <span>Carburant:</span>
              <span className="font-medium">+1000 DZD</span>
            </div>
          )}
          <hr className="border-indigo-300 my-2"/>
          <div className="flex justify-between text-lg font-bold text-indigo-800">
            <span>Total:</span>
            <span>{totalPrice} DZD</span>
          </div>
        </div>
      </>
    );
  };

  const inputStyles = "w-full p-3 border text-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";
  const errorBorder = "border-red-500";
  const labelStyles = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <>
      <style>{`
        @keyframes slideInPage{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
        .animate-slide-in-page{animation:slideInPage .5s ease-out forwards}
      `}</style>
      
      {totalPrice > 0 && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-40 p-4 shadow-md">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <span className="font-semibold text-gray-800">Total Estimé:</span>
            <span className="text-2xl font-bold text-indigo-600">{totalPrice} DZD</span>
          </div>
        </div>
      )}

      <main className="bg-gray-50 min-h-screen pt-24 lg:pt-8 px-4 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 lg:gap-12 animate-slide-in-page">
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">✈️ Votre Demande de Service</h1>
            
            <div className="space-y-8">
              
              <Section title="1. Informations de Vol" className="bg-indigo-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                  <div>
                    <label className={labelStyles}>Date et heure d'aller *</label>
                    <input 
                      type="datetime-local" 
                      name="dateAller" 
                      value={formData.dateAller} 
                      onChange={handleInputChange} 
                      className={`${inputStyles} ${formErrors.dateAller && errorBorder}`} 
                    />
                    {formErrors.dateAller && <p className="text-red-500 text-sm mt-1">{formErrors.dateAller}</p>}
                  </div>
                  <div>
                    <label className={labelStyles}>Numéro de vol d'aller *</label>
                    <input 
                      type="text" 
                      name="flightNumberAller" 
                      value={formData.flightNumberAller} 
                      onChange={handleInputChange} 
                      placeholder="Ex: AH1234" 
                      className={`${inputStyles} ${formErrors.flightNumberAller && errorBorder}`} 
                    />
                    {formErrors.flightNumberAller && <p className="text-red-500 text-sm mt-1">{formErrors.flightNumberAller}</p>}
                  </div>
                  <div>
                    <label className={labelStyles}>Date et heure de retour *</label>
                    <input 
                      type="datetime-local" 
                      name="dateRetour" 
                      value={formData.dateRetour} 
                      onChange={handleInputChange} 
                      className={`${inputStyles} ${formErrors.dateRetour && errorBorder}`} 
                    />
                    {formErrors.dateRetour && <p className="text-red-500 text-sm mt-1">{formErrors.dateRetour}</p>}
                  </div>
                  <div>
                    <label className={labelStyles}>Numéro de vol de retour *</label>
                    <input 
                      type="text" 
                      name="flightNumberRetour" 
                      value={formData.flightNumberRetour} 
                      onChange={handleInputChange} 
                      placeholder="Ex: AH1235" 
                      className={`${inputStyles} ${formErrors.flightNumberRetour && errorBorder}`} 
                    />
                    {formErrors.flightNumberRetour && <p className="text-red-500 text-sm mt-1">{formErrors.flightNumberRetour}</p>}
                  </div>
                </div>
              </Section>

              <Section title="2. Personnalisation du Service">
                <div className="space-y-8">
                  
                  {/* Parking Type Selection */}
                  <div>
                    <label className={labelStyles}>Type de parking</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ParkingCard
                        type="externe"
                        selected={formData.parkingType === 'externe'}
                        onClick={() => updateFormData('parkingType', 'externe')}
                      />
                      <ParkingCard
                        type="interne"
                        selected={formData.parkingType === 'interne'}
                        onClick={() => updateFormData('parkingType', 'interne')}
                      />
                    </div>
                  </div>

                  {/* Cleaning Service Selection */}
                  <div>
                    <label className={labelStyles}>Service de nettoyage</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CleaningCard
                        type="none"
                        selected={formData.cleaningType === 'none'}
                        onClick={() => updateFormData('cleaningType', 'none')}
                      />
                      <CleaningCard
                        type="exterior"
                        selected={formData.cleaningType === 'exterior'}
                        onClick={() => updateFormData('cleaningType', 'exterior')}
                      />
                      <CleaningCard
                        type="interior"
                        selected={formData.cleaningType === 'interior'}
                        onClick={() => updateFormData('cleaningType', 'interior')}
                      />
                      <CleaningCard
                        type="full"
                        selected={formData.cleaningType === 'full'}
                        onClick={() => updateFormData('cleaningType', 'full')}
                      />
                    </div>
                  </div>

                  {/* Fuel Service */}
                  <div>
                    <label className={labelStyles}>Service de carburant</label>
                    <FuelCard
                      selected={formData.withFuel}
                      onClick={() => updateFormData('withFuel', !formData.withFuel)}
                    />
                  </div>

                  {/* Oversized Vehicle Checkbox */}
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg border">
                    <input 
                      id="isOversized" 
                      type="checkbox" 
                      name="isOversized" 
                      checked={formData.isOversized} 
                      onChange={handleInputChange} 
                      className="h-5 w-5 rounded mt-0.5 text-indigo-600 focus:ring-indigo-500 border-gray-300" 
                    />
                    <label htmlFor="isOversized" className="ml-3 text-gray-700">
                      Mon véhicule est un grand gabarit (largeur &gt; 2.2m, longueur &gt; 5.5m).
                    </label>
                  </div>
                </div>
              </Section>
              
              <Section title="3. Informations Personnelles">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                  <div>
                    <label className={labelStyles}>Nom complet *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      placeholder="Votre nom" 
                      className={`${inputStyles} ${formErrors.fullName && errorBorder}`} 
                    />
                    {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
                  </div>
                  <div>
                    <label className={labelStyles}>Adresse e-mail *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="exemple@email.com" 
                      className={`${inputStyles} ${formErrors.email && errorBorder}`} 
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  <div>
                    <label className={labelStyles}>Numéro de téléphone *</label>
                    <input 
                      type="tel" 
                      name="phoneNumber" 
                      value={formData.phoneNumber} 
                      onChange={handleInputChange} 
                      placeholder="+213XXXXXXXXX" 
                      className={`${inputStyles} ${formErrors.phoneNumber && errorBorder}`} 
                    />
                    {formErrors.phoneNumber && <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>}
                  </div>
                  <div>
                    <label className={labelStyles}>Immatriculation du véhicule *</label>
                    <input 
                      type="text" 
                      name="carImmatriculation" 
                      value={formData.carImmatriculation} 
                      onChange={handleInputChange} 
                      placeholder="12345-123-16" 
                      className={`${inputStyles} ${formErrors.carImmatriculation && errorBorder}`} 
                    />
                    {formErrors.carImmatriculation && <p className="text-red-500 text-sm mt-1">{formErrors.carImmatriculation}</p>}
                  </div>
                </div>
              </Section>

              <button 
                type="button" 
                onClick={() => {
                  if (validateForm()) { 
                    alert(`Demande soumise! Total: ${totalPrice} DZD.`); 
                    // Reset form or redirect as needed
                  }
                }}
                className="w-full py-4 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 font-bold transition-transform transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Confirmer et Envoyer
              </button>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2">
            <div className="lg:sticky top-8">
              {totalPrice > 0 ? (
                <div className="bg-white p-6 rounded-lg border shadow-lg">
                  <PriceSummaryDetails />
                </div>
              ) : (
                <div className="bg-gray-100 p-6 rounded-lg border border-dashed text-center">
                  <p className="text-gray-500">Votre résumé de prix apparaîtra ici.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};