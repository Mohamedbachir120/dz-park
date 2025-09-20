import { Icon } from "../pages/Landing";
import Airport from "./../assets/airplane.png";

export const Hero: React.FC = () => {
    const formLabels: string[] = ['Dépôt au Terminal', 'Parking Surveillé', 'Modification Gratuite', 'Annulation jusqu\'à 24h avant le départ'];
    return (
        <section className="bg-cover bg-center h-96 relative" style={{ backgroundImage: `url(${Airport})` }}>
             <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white p-4">
            <div className="flex items-center text-yellow-400 mb-2">
                <Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star_half" />
                <span className="ml-2 text-white">4.9 / 5</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Service de Voiturier Premium à l'Aéroport d'Alger</h1>
            <p className="text-lg md:text-xl mb-8">Garez-vous sans détours et sans frais supplémentaires. Directement au terminal. Service de première classe &amp; annulation gratuite.</p>
            {/* <div className="w-full max-w-4xl bg-white dark:bg-card-dark p-4 rounded-lg shadow-xl">
                <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                {formLabels.map((label, index) => (
                    <div className="text-left text-gray-700 dark:text-text-dark" key={index}>
                    <label className="block text-sm font-medium" htmlFor={label.replace(/\s/g, '')}>{label}</label>
                    <select
                        id={label.replace(/\s/g, '')}
                        name={label.replace(/\s/g, '')}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                        <option>{label.includes('Terminal') ? 'Terminal 1' : 'Oui'}</option>
                        <option>{label.includes('Terminal') ? 'Terminal 2' : 'Non'}</option>
                    </select>
                    </div>
                ))}
                </form>
            </div> */}
            </div>
            {/* <a href="#" className="absolute bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <Icon name="chat" />
            </a> */}
        </section>
    )
};
