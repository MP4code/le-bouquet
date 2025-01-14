import React from 'react';
import "../design/App.css";
import Engagement from './Engagement';
import ImgAboutUs from "../img/florist-work-woman-making-fashion-modern-bouquet-different-flowers-wooden-table.jpg";
import { RiLeafFill } from "react-icons/ri";

const AboutUs = () => {
    return (
        <div className="aboutUs_container">

            <div className='aboutUs_content'>

                <img className='aboutUs_image' src={ImgAboutUs} alt="Fleuriste" />

                <div className="aboutUs_section">

                    <h2 className="aboutUs_title">Vois ta vie en fleur, <br />c’est le secret du bonheur. </h2>
                    <div className="aboutUs_text">
                        <p>Derrière chaque création, il y a une jeune entrepreneuse passionnée, animée par l’amour des fleurs, des couleurs et de l’art de transmettre des émotions.
                            Chaque bouquet, chaque composition raconte une histoire, la vôtre, celle de vos moments précieux.
                            Avec un œil artistique et une attention minutieuse aux détails, Le Bouquet transforme chaque occasion en un instant fleuri, unique et mémorable.
                        </p>
                    </div>
                </div>

            </div>
            <div className='decoBar'></div>

            <section className='sectionEngagement'>
                <h3 className="engagementTitle">NOS ENGAGEMENTS</h3>
                <div className="aboutUs_engagement">
                    {Engagement.map((service) => (
                        <div className='serviceCard' key={service.id}>
                            <div className='serviceCard_container'>
                                <img className='serviceCard_image' src={service.image} alt={service.alt} />

                                <div className='serviceCard_content'>
                                    <div className='serviceCard_text'>
                                        <h3>{service.title}</h3>
                                        <RiLeafFill />
                                        <p>{service.text}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutUs