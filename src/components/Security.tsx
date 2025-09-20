import { Icon } from "../pages/Landing";
import Parking from "./../assets/parking.png"
export const Security: React.FC = () => (
    <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <img alt="Parking sécurisé" className="rounded-lg shadow-2xl" src={Parking}/>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4">Sécurité maximale pour votre véhicule</h2>
                <p className="mb-6">Confiez la sécurité de votre véhicule à nos professionnels expérimentés...</p>
                <a className="bg-white text-primary font-bold py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-200 transition duration-300" href="#">
                    <Icon name="security" className="mr-2"/>
                    Service de Confiance
                </a>
            </div>
        </div>
    </section>
);
