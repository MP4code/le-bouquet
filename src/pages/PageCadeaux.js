import React from 'react';
import "../design/shop.css"
import Cadeaux from "../component/data/Cadeaux"
import Bouquets from "../component/data/Bouquets"
const PageCadeaux = () => {
    return (
        <div className='main-container'>
            <h1 className='title'>Nos idées cadeaux</h1>


            <section className='cadeaux'>
                {Cadeaux.map((cadeau) => (
                    <div className='cadeauxContainer' key={cadeau.id}>
                        <div className='cadeauxContentImg'>
                            <img className='cadeaux_image' src={cadeau.cover} alt={cadeau.alt} />
                        </div>
                        <div className='cadeauxContentText'>
                            <h2>{cadeau.title}</h2>
                            <p>{cadeau.text}</p>
                            <p>{cadeau.description}</p>
                            <p className='price'>{cadeau.price}</p>
                            <bouton className="buttonAdd">Ajouter au panier</bouton>
                        </div>
                        <div className='cadeauxContentImg'>
                            <img className='cadeaux_image2' src={Bouquets[1].image} alt={Bouquets[1].alt} />
                        </div>
                    </div>

                ))}

            </section>

        </div>
    )
}

export default PageCadeaux