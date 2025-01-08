import React from 'react';
import { Link } from 'react-router-dom';
import '../design/shop.css';
import Bouquets from './data/Bouquets';


const Article = () => {

    return (
        <div>
            <div className='background_article'>
                <h2 className="article_title">LA BOUTIQUE </h2>
                <p>Découvrez notre collection unique, pensée pour sublimer chaque instant avec élégance et passion.</p>
            </div>
            <div className="article_Favorite">
                <h3>Notre selection</h3>
                <div className="article_Favorite_container">
                    {Bouquets.filter((bouquetFav) => bouquetFav.selected === 'true').map((bouquetFav) => (
                        <Link to={`/bouquet/${bouquetFav.ref}`} className='article_link' key={bouquetFav.ref}>
                            <div className="article">
                                <div className='article_content'>
                                    <img className='article_image' src={bouquetFav.image} alt={bouquetFav.alt} />
                                    <div className='article_text'>
                                        <h4>{bouquetFav.Name}</h4>
                                        <p>{bouquetFav.price}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="article_container">
                {Bouquets.map((bouquet) => (

                    <Link to={`/bouquet/${bouquet.ref}`} className='article_link'>
                        <div className="article" key={bouquet.ref}>
                            <div className='article_content'>
                                <img className='article_image' src={bouquet.image} alt={bouquet.alt} />
                                <div className='article_text'>
                                    <h4>{bouquet.Name}</h4>

                                    <p>{bouquet.price}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div >
    )
}

export default Article