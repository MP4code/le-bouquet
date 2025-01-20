import React from 'react';
import "../design/shop.css"
import Cadeaux from "../component/data/Cadeaux"
import ImgCadeauDeco from "../img/creative-arrangement-delicious-macarons.jpg"
const PageCadeaux = () => {
    return (
        <div className='main-container'>
            <h1 className='main-title'>Nos idées cadeaux</h1>


            <section className='cadeaux'>
                <div className='cadeauxContainer'>
                    <div className='CadeauxArticle'>
                        {Cadeaux.map((cadeau) => (
                            <div className='cadeauxContainer_article' key={cadeau.id}>

                                <div className='cadeauxContentImg'>
                                    <img className='cadeaux_image' src={cadeau.cover} alt={cadeau.alt} />
                                </div>
                                <div className='cadeauxContentText'>
                                    <h2>{cadeau.title}</h2>
                                    <p>{cadeau.text}</p>
                                    <p>{cadeau.description}</p>
                                    <p className='price'>{cadeau.price}</p>
                                    <div className="product_button">
                                        <input className="buttonAdd" type="number" min="1" max="10" defaultValue="1" />
                                        <button className="buttonAdd"> Ajouter au panier</button>
                                    </div>
                                </div>

                            </div>

                        ))}

                    </div>
                    <img className='ImgCadeauDeco' src={ImgCadeauDeco} alt="Macarons" />
                </div>
            </section>

        </div>
    )
}

export default PageCadeaux