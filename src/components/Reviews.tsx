import { Icon } from "../pages/Landing";

export const Reviews: React.FC = () => {
    interface Review {
        name: string;
        text: string;
    }

    const reviewsData: Review[] = [
        { name: 'Mohamed Djamel', text: '"GÉNIAL ! Tout s\'est super bien passé. Des gens sympas, pris et ramené à l\'heure."' },
        { name: 'Moundhir Labdazi', text: '"La communication a été super dès le début. Tout a parfaitement fonctionné. Avec plaisir à nouveau !"' },
        { name: 'Alla ghrissi', text: '"La communication était super. Notre vol a été décalé de 2h, ce n\'était pas un problème car le service est joignable 24/7."' },
    ];

    return (
        <section className="py-16 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Avis Clients</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviewsData.map((review, index) => (
                    <div key={index} className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-md relative">
                    <Icon name="format_quote" className="text-gray-300 dark:text-gray-600 absolute top-4 right-4 text-4xl" />
                    <div className="flex text-yellow-400 mb-4">
                        <Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" />
                    </div>
                    <p className="text-text-muted-light dark:text-text-muted-dark mb-4 italic">{review.text}</p>
                    <p className="font-semibold">{review.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};
