import { FaqItemProps } from "../types";
import { Icon } from "../pages/Landing";
import { useState } from "react";

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 dark:text-gray-200"
        >
          <span>{question}</span>
          <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            ▼
          </span>
        </button>
        {isOpen && (
          <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
            {children}
          </div>
        )}
      </div>
    );
  };
  
  
  // The completed FAQ component
  export const FAQ: React.FC = () => (
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">FAQ – Service Voiturier Aéroport Alger (ALG)</h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                  <FaqItem question="Qu'est-ce que le service de voiturier à l'aéroport d'Alger ?">
                    <p>Le service de voiturier est la manière la plus pratique de se garer à l'aéroport. Vous conduisez simplement jusqu'au terminal, un voiturier professionnel prend en charge votre véhicule et le gare pour vous dans un parking sécurisé. À votre retour, votre voiture vous attendra au même endroit. Fini le stress de chercher une place et le temps perdu dans les navettes !</p>
                  </FaqItem>
                  <FaqItem question="Où puis-je déposer ma voiture (Terminal 1 & 2) ?">
                    <p>Vous pouvez déposer votre véhicule directement au dépose-minute du terminal de votre départ (Terminal 1 ou Terminal 2). Un de nos voituriers, identifiable grâce à son uniforme, vous y attendra à l'heure convenue lors de votre réservation. Il effectuera un état des lieux rapide du véhicule avec vous avant de le conduire à notre parking sécurisé.</p>
                  </FaqItem>
                  <FaqItem question="Mon véhicule est-il assuré pendant le service de voiturier ?">
                    <p>Oui, absolument. Dès la prise en charge de votre véhicule par notre voiturier jusqu'à sa restitution, il est couvert par notre assurance tous risques professionnelle. De plus, nos parkings partenaires sont entièrement sécurisés, clôturés et surveillés 24h/24 et 7j/7 pour une tranquillité d'esprit totale.</p>
                  </FaqItem>
                  <FaqItem question="Puis-je annuler ma réservation gratuitement ?">
                     <p>Oui, la flexibilité est importante pour nous. Vous pouvez annuler votre réservation sans frais jusqu'à 24 heures avant l'heure de prise en charge prévue. Pour toute annulation, il vous suffit de vous connecter à votre espace client ou de nous contacter directement. Pour les annulations effectuées moins de 24 heures à l'avance, des frais peuvent s'appliquer.</p>
                  </FaqItem>
                  <FaqItem question="Combien coûte le service de voiturier à l'aéroport d'Alger ?">
                     <p>Le coût de notre service dépend de la durée de votre stationnement. Nos tarifs sont dégressifs : plus votre séjour est long, plus le prix par jour est avantageux. Pour obtenir un devis exact et personnalisé, nous vous invitons à utiliser notre simulateur de réservation en ligne en indiquant simplement vos dates et heures de voyage.</p>
                  </FaqItem>
              </div>
          </div>
      </section>
  );