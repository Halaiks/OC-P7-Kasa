// Imports
import './home.scss'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../../components/footer/Footer'

// Définit la fonction principale pour la page d'accueil
export default function Home() {
    return (
        // Conteneur principal de la page d'accueil avec la classe CSS 'home' et les composants
        <div className='home'>
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </div>
    )
}
