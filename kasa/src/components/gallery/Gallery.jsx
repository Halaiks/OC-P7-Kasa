import './gallery.scss';

// Importe les données de la galerie depuis le fichier data
import datas from '../../data/data';

// Importe le composant Card
import Card from '../card/Card';

// Définit et exporte la fonction Gallery
export default function Gallery() {
    
    return (
        <main className='home_gallery'>

            {/* Boucle à travers les données pour créer une carte pour chaque élément */}
            {datas.map(data => {
                return (
                    // Composant Card avec des propriétés spécifiques pour chaque élément de données
                    <Card
                        key={data.id}         
                        id={data.id}          
                        title={data.title}    
                        cover={data.cover}    
                    />
                );
            })}
        </main>
    );
}
