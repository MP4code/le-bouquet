import React from 'react';
import { useState } from 'react';

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        RefCo: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    // Gestion des changements dans les champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulaire soumis :", formData);
        setSubmitted(true);

        // Réinitialiser le formulaire (optionnel)
        setFormData({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            RefCo: "",
            message: "",
        });
    };

    return (
        <div >

            {submitted && <p style={{ color: "green" }}>Votre message a été envoyé !</p>}
            <form onSubmit={handleSubmit} className='formDesign'>
                <div className='test'>
                    <div className='formCase'>
                        <label >
                            Prénom

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required

                            />
                        </label>
                    </div>
                    <div className='formCase'>
                        <label >
                            Nom
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required

                            />
                        </label>
                    </div>
                    <div className='formCase'>
                        <label>
                            Email

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required

                            />
                        </label>
                    </div>
                    <div className='formCase'>
                        <label>
                            Téléphone
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required

                            />
                        </label>
                    </div>
                    <div className='formCase'>
                        <label >
                            Numéro de commande
                            <input
                                type="text"
                                id="refCo"
                                name="refCo"
                                value={formData.RefCo}
                                onChange={handleChange}
                                required

                            />
                        </label>
                    </div>
                </div>
                <div className='formCase'>
                    <label >
                        Message
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                            }}
                        ></textarea>
                    </label>
                </div>

                <button
                    type="submit"
                    className='buttonAdd'
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
};


export default FormContact