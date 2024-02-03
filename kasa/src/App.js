// Imports
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';

// Import des utilitaires de routage de React
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Configuration des routes de l'application
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "/*",
		element: <NotFound />
	},
]);

// Composant principal de l'application
function App() {
	return (
		<>
			{/* Fournit le routeur configuré aux composants enfants */}
			<RouterProvider router={router}/>
		</>
	);
}

// Exporte le composant App pour être utilisé ailleurs dans l'application
export default App;
