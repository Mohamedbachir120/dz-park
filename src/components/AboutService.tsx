import { Icon } from "../pages/Landing";
import Car1 from "./../assets/CarPic1.png"
import Car2 from "./../assets/CarPic2.png"
import KeyPic from "./../assets/KeyPic1.png"


export const AboutService: React.FC = () => (
  <section className="py-16 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="grid grid-cols-2 gap-4">
        <img alt="Service de voiturier à l'aéroport" className="rounded-lg shadow-lg col-span-2" src={Car1}/>
        <img alt="Client remettant les clés de voiture à un voiturier" className="rounded-lg shadow-lg" src={KeyPic}/>
        <img alt="Voiturier garer une voiture dans un parking sécurisé" className="rounded-lg shadow-lg" src={Car2} />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Service de Voiturier à l'Aéroport d'Alger</h2>
        <p className="text-text-muted-light dark:text-text-muted-dark mb-6">Notre service de voiturier exclusif à l'aéroport d'Alger vous libère du stress du stationnement...</p>
        <ul className="space-y-4">
            <li className="flex items-start">
              <Icon name="airport_shuttle" className="text-primary mr-3 mt-1" />
              <div>
                <h4 className="font-semibold">Directement au Terminal</h4>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">PAS DE SERVICE DE NAVETTE, VOUS ALLEZ DIRECTEMENT AU TERMINAL DE DÉPART</p>
              </div>
            </li>
            <li className="flex items-start">
              <Icon name="verified_user" className="text-primary mr-3 mt-1" />
              <div>
                <h4 className="font-semibold">Service de prise en charge et de dépose gratuit</h4>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">NOUS GARONS VOTRE VOITURE, VOUS N'AVEZ QU'À LA DÉPOSER</p>
              </div>
            </li>
            <li className="flex items-start">
              <Icon name="credit_card" className="text-primary mr-3 mt-1" />
              <div>
                <h4 className="font-semibold">À partir de 1000 dzd seulement</h4>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm">PAS DE FRAIS CACHÉS - SERVICE PREMIUM INCLUS</p>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </section>
);
