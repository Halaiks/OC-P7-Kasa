import './carousel.scss'
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'
import { useState } from 'react'

// Définition du composant Slider qui prend en paramètre un tableau d'images imageSlider
export default function Slider({imageSlider}) {

    // Déclaration du state currentIndex qui va stocker l'index de l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0)

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1) // Incrémente l'index
        // Si on atteint la dernière image, retourne à la première image
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    // Fonction pour passer à la diapositive précédente
    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1) // Décrémente l'index
        // Si on est sur la première image, passe à la dernière image
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    // Rendu du composant
    return (
        // Section du carousel avec l'image de fond correspondant à l'image actuelle
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 && // Vérifie s'il y a plus d'une image dans le tableau
                <> 
                    {/* Image de la flèche droite avec un onClick pour passer à la diapositive suivante */}
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    {/* Image de la flèche gauche avec un onClick pour passer à la diapositive précédente */}
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    {/* Affichage du numéro de la diapositive actuelle et le nombre total de diapositives (si l'écran est suffisamment large) */}
                    {document.body.clientWidth > 768 && <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>}
                </>
            } 
        </section>
    )
}