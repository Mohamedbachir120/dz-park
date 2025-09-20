import { Icon } from "../pages/Landing";
import Logo from "./../assets/AeroPark.png";

export const Footer = () => (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-16 pb-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img src={Logo} height={70} width={70} />
                    <p className="text-text-muted-light dark:text-text-muted-dark">Voyagez sans soucis.</p>
                    <div className="flex space-x-4 mt-4">
                        <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary" href="#"><Icon name="camera_alt"/></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Pages</h4>
                    <ul className="space-y-2 text-text-muted-light dark:text-text-muted-dark">
                        <li><a className="hover:text-primary" href="#">À propos de nous</a></li>
                        <li><a className="hover:text-primary" href="#">Assurance</a></li>
                        <li><a className="hover:text-primary" href="#">CGV</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Services</h4>
                    <ul className="space-y-2 text-text-muted-light dark:text-text-muted-dark">
                        <li><a className="hover:text-primary" href="#">FAQ</a></li>
                        <li><a className="hover:text-primary" href="#">Mentions légales</a></li>
                        <li><a className="hover:text-primary" href="#">Protection des données</a></li>
                        <li><a className="hover:text-primary" href="#">Paramètres des cookies</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-text-muted-light dark:text-text-muted-dark">
                <p>© 2025 dz-park. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
);


 