import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

// Définit le composant Collapse qui prend deux propriétés : title et content
export default function Collapse({title, content}) {

    // Initialise un état local 'toggle' qui détermine si le contenu est affiché ou caché
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                {/* Titre du collapse, lorsqu'il est cliqué, inverse l'état de 'toggle' */}
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    {/* Affiche une flèche vers le haut ou vers le bas en fonction de 'toggle' */}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                {/* Contenu du collapse, affiché ou caché en fonction de 'toggle' */}
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {/* Si le contenu est un tableau, map chaque élément dans un paragraphe */}
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}
