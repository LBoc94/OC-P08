import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import AboutBannerImg from "../assets/banner-about.png"
import {useState,useEffect} from 'react';


function About() {

  const [data, setData] = useState([]);
    
    // récupère les informations
    useEffect(() => {
        fetch('about-data.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }).then(res => res.json())
            .then(result => setData(result));
    }, [data])

    return (
      <>
      <Banner
      bannerImg={AboutBannerImg}
      bannerImgAlt="Photo d'un paysage"
      />

      <div className="about-collapse">

          {data.map((collapse) => (
            <Collapse key={collapse.title}
              title={collapse.title}
              content={collapse.content}/>
          ))}

            {/* <Collapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>

            <Collapse
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

            <Collapse
            title="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

            <Collapse
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/> */}
      </div>
      </>
    );
  }

  export default About