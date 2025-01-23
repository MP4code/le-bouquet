import React from 'react'
import "../design/App.css";
import FormContact from '../component/FormContact';
import IconMobile from "../img/mobile_icon.png";
import IconMail from "../img/mail_icon.png";
import IconLieu from "../img/lieu_icon.png";
import ImgForm from "../img/elegant-woman-walking-city-holding-bouquet-flowers.jpg"
const Contact = () => {
    return (
        <div className='main-container'>
            <h1 className='main-title'>Nous Contacter</h1>
            <h2 className='informationsContact'>Pour toute question ou commande vous pouvez contacter nos conseillers, du lundi au vendredi de 9 h a 17 h.</h2>
            <div className='contactContainer'>
                <div className='contactContent_card'>
                    <div className='coordonneesCard'>
                        <img className='iconCard' src={IconMobile} alt='icone de mobile' />
                        <div className="coordonnees">
                            <h3>Téléphone</h3>
                            <p>+33 00 00 00 00</p>
                        </div>
                    </div>
                    <div className='coordonneesCard'>
                        <img className='iconCard' src={IconMail} alt='icone de mail' />
                        <div className="coordonnees">
                            <h3>E-mail</h3>
                            <p>contact@exemple.com</p>
                        </div>
                    </div>
                    <div className='coordonneesCard'>
                        <img className='iconCard' src={IconLieu} alt='icone de localisation' />
                        <div className="coordonnees">
                            <h3>Localisation</h3>
                            <p>1 rue ici et pas là-bas</p>
                        </div>
                    </div>

                </div>
                <div className='contactContent_form'>
                    <FormContact />
                    <img src={ImgForm} alt="photo d'une femme" />
                </div>
            </div>

        </div>
    )
}

export default Contact