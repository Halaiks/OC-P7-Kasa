import './card.scss';

// Importe le composant 'Link' de 'react-router-dom' pour créer des liens de navigation
import { Link } from 'react-router-dom';

// Définit et exporte la fonction 'Card' qui prend des propriétés (id, title, cover) en tant que paramètres
export default function Card({id, title, cover}) {

	return (
		// Utilise le composant 'Link' pour créer un lien vers la page d'hébergement spécifique en fonction de l'ID
		<Link to={`/accomodation/${id}`} className="gallery_card">
			{/* Affiche l'image de couverture avec l'attribut 'alt' pour la description textuelle */}
			<img src={cover} alt={title} />
			{/* Affiche le titre de l'hébergement */}
			<h3>{title}</h3>	
		</Link>
	);
}
