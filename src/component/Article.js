import React from 'react';
import '../design/shop.css';
import Bouquets from './data/Bouquets';
const Article = () => {
    return (
        <div>
            <div className='background_article'>
                <h2 className="section_title">LA BOUTIQUE </h2>
            </div>

            <div className="article_container">
                {Bouquets.map((bouquet) => (
                    <div className="article" key={bouquet.ref}>
                        <div className='article_Content'>
                            <img className='article_image' src={bouquet.image} alt={bouquet.alt} />
                            <div className='article_text'>
                                <h3>{bouquet.Name}</h3>
                                <p>{bouquet.price} euros </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Article