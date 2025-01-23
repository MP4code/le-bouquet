import React, { useState } from 'react';
import "../design/App.css";
import { TbTruckDelivery } from "react-icons/tb";

const Delivery = () => {
    const [trackingNumber, setTrackingNumber] = useState("");
    const [email, setEmail] = useState("");

    const infoDelivery = (event) => {
        console.log(trackingNumber, email);
        event.preventDefault();
    }

    return (
        <section className='main-container'>
            <h1 className='main-title titleDelivery'>Suivi de livraison <TbTruckDelivery /></h1>
            <div className='delivery'>
                <p>Pour suivre votre demande, merci de renseigner le formulaire ci dessous.</p>

                <form onSubmit={infoDelivery} className='formDelivery'>
                    <label htmlFor="trackingNumber" >
                        Votre numéro de suivi :
                        <input
                            id="trackingNumber"
                            type="text"
                            value={trackingNumber}
                            onChange={(e) => setTrackingNumber(e.target.value)} />

                    </label>
                    <label>
                        Votre adresse e-mail :
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <input type="submit" className='buttonAdd' value="Envoyer" />
                </form>
            </div>


        </section>
    )
}

export default Delivery