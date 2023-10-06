import { useState } from "react";

export default function Carrousel({ pictures }) {

    // SLIDES
    const [currentSlide, setCurrentSlide] = useState(0);

        // image suivante
    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
        );
    };

        // image précédente
    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
        );
    };

       // retire la navigation si une seule image
    const hidden = pictures.length === 1 ? "carrousel-hidden" : null;


    return (
        <>
            <div className="carrousel-infos">
            
                <div className="arrows-container">
                    <i className={hidden ? "carrousel-hidden fa-solid fa-angle-left" : "fa-solid fa-angle-left"} onClick={prevSlide}></i>
                    <i className={hidden ? "carrousel-hidden fa-solid fa-angle-right" : "fa-solid fa-angle-right"} onClick={nextSlide}></i>
                </div>

                <span className={hidden ? "carrousel-hidden carrousel-slide-number" : "carrousel-slide-number"}>
                {currentSlide + 1} / {pictures.length}
                </span>

            </div>      

            <img src={pictures[currentSlide]} alt="Logement" className="carrousel-img"/>
        </>
    );
}