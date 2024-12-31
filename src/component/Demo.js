import React from "react";
import Slider from "react-slick";
import "../design/App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MyCarousel = () => {
    const carouselItems = [
        { id: 1, imgSrc: require("../img/woman-s-hand-holding-basket-pf-fresh-flowers.jpg"), alt: "fleuriste", title: "Vos moments précieux", text: "Décorations sur mesure pour mariages, baptêmes, anniversaires, et tout autre événement marquant.", },
        { id: 2, imgSrc: require("../img/florist-work-woman-making-fashion-modern-bouquet-different-flowers-wooden-table.jpg"), alt: "Image 2", title: "Créations cadeaux", text: "Bouquets accompagnés d’options cadeaux (vases, chocolats, cartes personnalisées) pour faire plaisir à vos proches.", },
        {
            id: 3, imgSrc: require("../img/florist-work-woman-making-fashion-modern-bouquet-different-flowers-wooden-table.jpg"), alt: "Image 3", title: "Décoration d’intérieur et vitrines",
            text: "Aménagement floral pour vos espaces de vie ou commerciaux, avec des créations adaptées à vos besoins et à votre style.",
        },
        {
            id: 4, imgSrc: require("../img/florist-work-woman-making-fashion-modern-bouquet-different-flowers-wooden-table.jpg"), alt: "Image 3", title: "Conseil et entretien",
            text: "Suggestions d’entretien pour prolonger la durée de vie de vos fleurs et de vos plantes.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };

    return (
        <Slider {...settings}>
            {carouselItems.map(item => (
                <div key={item.id}>
                    <div className="demo">
                        <div className="demoContainer">
                            <img className="demoImg" src={item.imgSrc} alt={item.alt} />
                            <div className="demoText">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </Slider >
    );
};

export default MyCarousel;
