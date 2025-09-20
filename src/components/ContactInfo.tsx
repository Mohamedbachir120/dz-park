import { Icon } from "../pages/Landing";


export const ContactInfo = () => (
    <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Informations</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex items-start space-x-4">
                    <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-full">
                        <Icon name="book_online" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Réservation</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark">Réservations uniquement via le formulaire en ligne, pas par téléphone.</p>
                        <a className="text-primary font-semibold mt-2 inline-block" href="#">Réserver maintenant →</a>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-full">
                        <Icon name="email" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Support par e-mail</h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark">Nous répondons à votre message - veuillez utiliser notre formulaire de contact.</p>
                        <a className="text-primary font-semibold mt-2 inline-block" href="#">Contacter →</a>
                    </div>
                </div>
            </div>
            <div className="mt-12 bg-primary text-white p-6 rounded-lg flex justify-between items-center max-w-4xl mx-auto">
                <h3 className="text-xl font-bold">Ligne d'urgence</h3>
                <a className="bg-white text-primary font-bold py-2 px-4 rounded-lg flex items-center" href="tel:01822353209">
                    <Icon name="phone" className="mr-2" />
                    0182 2353209
                </a>
            </div>
        </div>
    </section>
);
