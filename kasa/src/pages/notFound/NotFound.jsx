// Imports
import './notFound.scss'
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

// Déclaration de la fonction de composant page 404
export default function NotFound() {
	return (
		// Conteneur principal de la page 404 avec la classe 'notFound' et les composants
		<div className='notFound'>
			<Header />
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='notFound_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}
