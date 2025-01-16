import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Bouquets from '../component/data/Bouquets';
import '../design/shop.css';

const Product = () => {
    const { ref } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const numericRef = parseInt(ref, 10);
    console.log("Ref convertie :", numericRef);


    useEffect(() => {
        const bouquet = Bouquets.find((bouquet) => bouquet.ref === numericRef);
        console.log("Produit trouvé :", bouquet);

        if (bouquet) {
            setProduct(bouquet);


        } else {
            console.log("Produit trouvé :", bouquet);

        }
    }, [ref, navigate]);

    if (!product) {
        return <p>Chargement...</p>; // Affiche un message pendant que le produit se charge
    }

    return (
        <div className="main-container">
            <section className="product">
                <div className="product_container" >

                    <div className="product_img">
                        <img src={product.imagePlus} className="imgProductBouquetPlus" alt={product.alt} />
                    </div>
                    <img src={product.image} className="imgProductBouquet" alt={product.alt} />
                    <div className="product_content">
                        <div className="product_text">
                            <h1 className="productTitle">Le Bouquet {product.Name}</h1>
                            <p className="productText">{product.text}</p>
                            <p>{product.description}</p>
                            <p>Prix : {product.price}</p>
                        </div>

                        <div className="product_button">
                            <input className="buttonAdd" type="number" min="1" max="10" defaultValue="1" />
                            <button className="buttonAdd"> Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;
