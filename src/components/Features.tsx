import { Icon } from "../pages/Landing";

export const  Features: React.FC = () => {
    interface Feature {
        icon: string;
        title: string;
        text: string;
    }
    
    const featuresData: Feature[] = [
        { icon: "savings", title: "Économisez jusqu'à 50 %", text: "Par rapport aux parkings - service premium inclus." },
        { icon: "airport_shuttle", title: "Directement au terminal", text: "Pas de navette ni de longs trajets - garez-vous simplement et déposez votre voiture." },
        { icon: "thumb_up", title: "Annulation gratuite", text: "Restez flexible jusqu'à 24 heures avant le départ." }
    ];

    return(
        <section className="py-16 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-md">
                            <Icon name={feature.icon} className="text-primary text-4xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}