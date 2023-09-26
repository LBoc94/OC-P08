// // import Placeholder from "../assets/banner-about.png"
// import { useState } from "react";

// function Carrousel({images}) {

//     const [imgIndex, setImgIndex] = useState(0);


//     function prevSlide() {
//         setImgIndex((imgIndex) =>
//         imgIndex === 0 ? images.length - 1 : imgIndex - 1);
//     };

//     const nextSlide = () => {
//         console.log("next")
//     };



//     return (
//         <>

//         {images.map((img, index) => (
//         <img src={img} key={index} alt="Photos du logement" className="carrousel-img"/>
//         ))}


//         <i className="fa-solid fa-angle-left" onClick={prevSlide}></i>
//         <i className="fa-solid fa-angle-right" onClick={nextSlide}></i>
//         <span className="caroussel-counter">{imgIndex + 1}/{images.length}</span>
//         </>
//     )
// }

// export default Carrousel


import { useState } from "react";

export default function Carrousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Variable pour la slide suivante
    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
        );
    };

    // Variable pour la slide précédente
    const previousSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
        );
    };

    // Variable pour enlever les flèche et le nombre de slides si il n'y à que 1 photo
    const off = pictures.length === 1 ? "carrouselOff" : null;

    return (
        <>
            <span
                className={`carrousel-arrow-left ${off}`}
                onClick={previousSlide}
            >
                <i className="fa-solid fa-angle-left"></i>
            </span>

            <img src={pictures[currentSlide]} alt="Logement" className="carrousel-img"/>

            <span
                className={`carrousel-arrow-right ${off}`}
                onClick={nextSlide}
            >
                <i className="fa-solid fa-angle-right"></i>
            </span>
            <div className="carrousel-slide-number">
                <p className={off}>
                    {currentSlide + 1}/{pictures.length}
                </p>
            </div>
        </>
    );
}