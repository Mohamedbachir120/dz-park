import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import LogoWHite from "./../assets/AeroParkWhite.png";
interface FormData {
  dateAller: string;
  dateRetour: string;
  withWashing: boolean;
  withFuel: boolean;
  parkingType: 'externe' | 'interne';
  fullName: string;
  phoneNumber: string;
  flightNumber: string;
}

interface FormErrors {
  dateAller?: string;
  dateRetour?: string;
  fullName?: string;
  phoneNumber?: string;
  flightNumber?: string;
}

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showPulse, setShowPulse] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    dateAller: '',
    dateRetour: '',
    withWashing: false,
    withFuel: false,
    parkingType: 'externe',
    fullName: '',
    phoneNumber: '+213',
    flightNumber: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openForm = (): void => {
    setShowForm(true);
    setIsMenuOpen(false);
  };

  const closeForm = (): void => {
    setShowForm(false);
    setFormData({
      dateAller: '',
      dateRetour: '',
      withWashing: false,
      withFuel: false,
      parkingType: 'externe',
      fullName: '',
      phoneNumber: '+213',
      flightNumber: ''
    });
    setFormErrors({});
  };

  // Calculate price dynamically
  useEffect(() => {
    if (formData.dateAller && formData.dateRetour) {
      const startDate = new Date(formData.dateAller);
      const endDate = new Date(formData.dateRetour);
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 0) {
        let basePrice = 0;
        let dailyRate = formData.parkingType === 'externe' ? 500 : 600;
        
        // Apply discount for stays longer than 5 days
        if (diffDays > 5) {
          dailyRate -= 100;
        }
        
        basePrice = diffDays * dailyRate;
        
        // Add services
        if (formData.withWashing) basePrice += 1000;
        if (formData.withFuel) basePrice += 1000;
        
        setTotalPrice(basePrice);
      } else {
        setTotalPrice(0);
      }
    } else {
      setTotalPrice(0);
    }
  }, [formData]);

  // Validate form
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.dateAller) errors.dateAller = 'Date d\'aller requise';
    if (!formData.dateRetour) errors.dateRetour = 'Date de retour requise';
    
    if (formData.dateAller && formData.dateRetour) {
      const startDate = new Date(formData.dateAller);
      const endDate = new Date(formData.dateRetour);
      if (startDate >= endDate) {
        errors.dateRetour = 'La date de retour doit être postérieure à la date d\'aller';
      }
    }
    
    if (!formData.fullName.trim()) errors.fullName = 'Nom complet requis';
    if (!formData.phoneNumber || formData.phoneNumber === '+213') {
      errors.phoneNumber = 'Numéro de téléphone requis';
    } else if (!/^\+213[0-9]{9}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Format invalide (+213XXXXXXXXX)';
    }
    if (!formData.flightNumber.trim()) errors.flightNumber = 'Numéro de vol requis';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Demande soumise avec succès! Prix total: ${totalPrice} DZD`);
      closeForm();
    }
  };

  const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (formErrors[field as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  // Trigger pulse animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getDaysCount = (): number => {
    if (formData.dateAller && formData.dateRetour) {
      const startDate = new Date(formData.dateAller);
      const endDate = new Date(formData.dateRetour);
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    updateFormData(name as keyof FormData, fieldValue as any);
  };

  return (
    <>
      <style >{`
        @keyframes gentle-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-3px);
          }
          60% {
            transform: translateY(-2px);
          }
        }

        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);
            transform: scale(1.02);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bounce-gentle {
          animation: gentle-bounce 2s infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 1.5s infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }

        .cta-button {
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
          border-radius: 24px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #4f46e5;
        }

        input:checked + .slider:before {
          transform: translateX(26px);
        }
      `}</style>
      
      <header className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="animate-float">
              

              <img src={LogoWHite} alt="Logo" className='h-10 w-12 md:h-[60px] md:w-[70px]' />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a className="hover:text-indigo-400 transition duration-300 hover:scale-105" href="#">
                Accueil
              </a>
              <a className="hover:text-indigo-400 transition duration-300 hover:scale-105" href="#">
                Découvrir le service
              </a>
              <a className="hover:text-indigo-400 transition duration-300 hover:scale-105" href="#">
                Avis
              </a>
              <a className="hover:text-indigo-400 transition duration-300 hover:scale-105" href="#">
                FAQs
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none hover:scale-110 transition-transform"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>

            {/* CTA Button (Desktop) */}
            <button 
              onClick={openForm}
              className={`hidden md:block cta-button font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                showPulse 
                  ? 'animate-pulse-glow animate-shimmer' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>✈️ Demander maintenant</span>
                <svg className="w-4 h-4 animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden bg-gray-700 rounded-b-lg transition-all duration-300 animate-slide-in">
              <div className="flex flex-col space-y-4 py-4 px-6">
                <a className="hover:text-indigo-400 transition duration-300 transform hover:translate-x-2" href="#" onClick={toggleMenu}>
                  Accueil
                </a>
                <a className="hover:text-indigo-400 transition duration-300 transform hover:translate-x-2" href="#" onClick={toggleMenu}>
                  Découvrir le service
                </a>
                <a className="hover:text-indigo-400 transition duration-300 transform hover:translate-x-2" href="#" onClick={toggleMenu}>
                  Avis
                </a>
                <a className="hover:text-indigo-400 transition duration-300 transform hover:translate-x-2" href="#" onClick={toggleMenu}>
                  FAQs
                </a>
                <button 
                  onClick={openForm}
                  className={`cta-button font-bold py-3 px-4 rounded-lg transition-all duration-300 text-center transform hover:scale-105 ${
                    showPulse 
                      ? 'animate-pulse-glow animate-shimmer' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>✈️ Demander maintenant</span>
                    <svg className="w-4 h-4 animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </nav>
          )}
        </div>

        {/* Service Request Form Modal */}
        {showForm && (
          // 1. Removed "my-5" and increased padding from p-4 to p-6 for more space
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
            {/* 2. Changed max-h-screen to max-h-full to respect the parent's padding */}
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-full overflow-y-auto animate-slide-in">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    ✈️ Demande de Service de Parking
                  </h2>
                  <button 
                    onClick={closeForm}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Dates */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date d'aller du vol *
                      </label>
                      <input
                        type="datetime-local"
                        name="dateAller"
                        value={formData.dateAller}
                        onChange={handleInputChange}
                        className={`w-full p-3 border text-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                          formErrors.dateAller ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.dateAller && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.dateAller}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date de retour du vol *
                      </label>
                      <input
                        type="datetime-local"
                        name="dateRetour"
                        value={formData.dateRetour}
                        onChange={handleInputChange}
                        className={`w-full text-gray-700 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                          formErrors.dateRetour ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.dateRetour && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.dateRetour}</p>
                      )}
                    </div>
                  </div>

                  {/* Parking Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Type de parking
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="parkingType"
                          value="externe"
                          checked={formData.parkingType === 'externe'}
                          onChange={(e) => updateFormData('parkingType', e.target.value as 'externe' | 'interne')}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Parking externe (500 DZD/jour)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="parkingType"
                          value="interne"
                          checked={formData.parkingType === 'interne'}
                          onChange={(e) => updateFormData('parkingType', e.target.value as 'externe' | 'interne')}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Parking interne (600 DZD/jour)</span>
                      </label>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-800">Service de lavage</h3>
                        <p className="text-sm text-gray-600">+1000 DZD</p>
                      </div>
                      <label className="switch">
                        <input
                          type="checkbox"
                          name="withWashing"
                          checked={formData.withWashing}
                          onChange={handleInputChange}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-800">Service d'alimentation carburant</h3>
                        <p className="text-sm text-gray-600">+1000 DZD</p>
                      </div>
                      <label className="switch">
                        <input
                          type="checkbox"
                          name="withFuel"
                          checked={formData.withFuel}
                          onChange={handleInputChange}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full p-3 text-gray-800 text-gray-800  border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                          formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Entrez votre nom complet"
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`w-full p-3 text-gray-800 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                          formErrors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+213XXXXXXXXX"
                      />
                      {formErrors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Numéro de vol *
                      </label>
                      <input
                        type="text"
                        name="flightNumber"
                        value={formData.flightNumber}
                        onChange={handleInputChange}
                        className={`w-full text-gray-800 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                          formErrors.flightNumber ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Ex: AH1234"
                      />
                      {formErrors.flightNumber && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.flightNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Price Calculator */}
                  {totalPrice > 0 && (
                    <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                      <h3 className="font-bold text-lg text-indigo-800 mb-4">💰 Calcul du prix</h3>
                      <div className="space-y-2 text-sm text-indigo-700">
                        <div className="flex justify-between">
                          <span>Durée du séjour:</span>
                          <span className="font-medium">{getDaysCount()} jour{getDaysCount() > 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Parking {formData.parkingType}:</span>
                          <span className="font-medium">
                            {getDaysCount()} × {formData.parkingType === 'externe' ? (getDaysCount() > 5 ? 400 : 500) : (getDaysCount() > 5 ? 500 : 600)} DZD
                          </span>
                        </div>
                        {getDaysCount() > 5 && (
                          <div className="text-green-600 text-xs">
                            ✓ Remise de -100 DZD/jour pour séjour &gt; 5 jours
                          </div>
                        )}
                        {formData.withWashing && (
                          <div className="flex justify-between">
                            <span>Service lavage:</span>
                            <span className="font-medium">+1000 DZD</span>
                          </div>
                        )}
                        {formData.withFuel && (
                          <div className="flex justify-between">
                            <span>Service carburant:</span>
                            <span className="font-medium">+1000 DZD</span>
                          </div>
                        )}
                        <hr className="border-indigo-300" />
                        <div className="flex justify-between text-lg font-bold text-indigo-800">
                          <span>Total:</span>
                          <span>{totalPrice} DZD</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-300"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 font-medium"
                    >
                      Confirmer la demande
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};