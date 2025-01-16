import React from 'react'
import "../design/App.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <div className='footerContent_img'>
                    <div className='footerContent_reseaux'>
                        <a href="https://facebook.com" className='footerContent_reseauCard'><FaFacebook /></a>
                        <a href="https://instagram.com" className='footerContent_reseauCard'><FaInstagram /></a>
                        <a href="https://linkedin.com" className='footerContent_reseauCard'><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className='footerContent'>

                    <div className='footerContent_mentions'>
                        <a href="/a-propos">À propos</a>
                        <a href="/livraison">Livraison</a>
                        <a href="/mentions-legales">Mentions légales</a>

                    </div>
                    <div className='footerContent_contact'>
                        <a href="/contact">Nous contacter</a>
                        <p>Email : contact@exemple.com</p>
                        <p>Téléphone : +33 0 00 00 00 00</p>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2025 Le Bouquet Tous droits réservés. <br />Réalisé par Marina Philogène</p>
                        <p>Source Photos : Freepik</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer