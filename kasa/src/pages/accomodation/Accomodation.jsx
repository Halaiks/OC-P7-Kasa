// Imports
import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import NotFound from '../notFound/NotFound';

// Déclaration de la fonction de composant
export default function Accomodation() {

	// State pour gérer les images du slider
	const [imageSlider, setImageSlider] = useState([]);

	// Extraction de l'identifiant de l'hébergement à partir des paramètres de l'URL
	const { id } = useParams();
	// Filtrage des données pour obtenir les informations de l'hébergement actuel
	const dataCurrentAccomodation = datas.filter(data => data.id === id);

	// Utilisation de useEffect pour mettre à jour les images du slider lorsque l'ID de l'hébergement change
	useEffect(() => {
		if (dataCurrentAccomodation.length > 0) {
			setImageSlider(dataCurrentAccomodation[0].pictures);
		}
	}, [id, dataCurrentAccomodation]);

	// Si aucune correspondance d'hébergement n'est trouvée, affiche une page NotFound
	if (dataCurrentAccomodation.length === 0) {
		return <NotFound />;
	}

	// Extraction des informations de l'hébergement actuel
	const name = dataCurrentAccomodation[0].host.name.split(' ');
	const rating = dataCurrentAccomodation[0].rating;
	const description = dataCurrentAccomodation[0].description;
	const equipments = dataCurrentAccomodation[0].equipments;

	// Affichage du composant de la page d'hébergement
	return (
		<>
			<Header />
			<Slider imageSlider={imageSlider} />
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation[0].title}</h1>
						<p>{dataCurrentAccomodation[0].location}</p>
						<div>
							{dataCurrentAccomodation[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodation[0].host.picture} alt="host of this accomodation" />
						</div>

						<div className="accomodation_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description} />
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments} />
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
