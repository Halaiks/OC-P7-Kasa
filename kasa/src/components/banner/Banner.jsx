import './banner.scss';

// hook useLocation de react-router-dom pour obtenir l'URL courante
import { useLocation } from 'react-router-dom';

// hooks useEffect et useState de React
import { useEffect, useState } from 'react';

// Définit et exporte la fonction composant Banner
export default function Banner() {

  // Utilise le hook useState pour déclarer une variable d'état aboutPage avec une valeur initiale de false
	const [aboutPage, setAboutPage] = useState(false);

  // Utilise le hook useLocation pour obtenir l'objet de localisation actuel (URL)
	const location = useLocation();
	
  // Utilise le hook useEffect pour effectuer une action lors du montage du composant
	useEffect(() => {
    // Vérifie si le chemin d'accès actuel est "/about"
		if(location.pathname === '/about'){
      // Si c'est le cas, met à jour la variable d'état aboutPage à true
			setAboutPage(true)
		};
	}, [])

  // Rendu du composant
	return (
    // Utilise la classe CSS 'banner_about' si aboutPage est true, sinon utilise 'banner'
		<section className={aboutPage ? 'banner_about' : 'banner'}>
      {/* Affiche un paragraphe uniquement si aboutPage est false */}
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}
