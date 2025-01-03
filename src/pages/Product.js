import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Bouquets from '../component/data/Bouquets';

const Product = () => {
    const navigate = useNavigate();
    const { ref } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const bouquet = Bouquets.find((flowers) => flowers.ref === ref);
        setProduct(bouquet);

        if (bouquet) {
            setProduct(bouquet);
            navigate(`/p${ref}`);

        }


    }, [ref, navigate]);


    return (

        <div>Product

        </div>
    )
}

export default Product