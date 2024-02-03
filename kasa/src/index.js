// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Création d'une racine React avec le DOM de l'élément ayant l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu du composant App dans la racine avec le mode StrictMode activé
// StrictMode permet de détecter certaines pratiques potentiellement problématiques dans le code et affiche des avertissements en conséquence.
root.render(
	<React.StrictMode>
		<App  />
	</React.StrictMode>
);