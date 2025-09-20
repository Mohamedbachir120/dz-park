import Lavage from "./../assets/LavagePic.png"
import Recharge from "./../assets/RechargePic.png"
import SurMesure from "./../assets/SurMesure.png"
export const OtherServices = () => (
    <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Autres Services</h2>
                <button className="text-primary font-semibold">Disponible individuellement en option</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Add data array and map if you want to make it dynamic */}
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img alt="Service de lavage de voiture" className="w-full h-48 object-cover" src={Lavage}/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                        <h3 className="text-white font-semibold text-lg">Lavage de Véhicule</h3>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img alt="Service de ravitaillement" className="w-full h-48 object-cover" src={Recharge}/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                        <h3 className="text-white font-semibold text-lg">Recharge Électrique / Service de Carburant</h3>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img alt="Service sur demande" className="w-full h-48 object-cover" src={SurMesure}/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                        <h3 className="text-white font-semibold text-lg">Service sur Mesure</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
