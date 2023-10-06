import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";



function Logement() {

  const navigate = useNavigate ()
  const { id } = useParams();
  const [logement, setLogement] = useState({host:{}, tags:[] ,equipments:[], rating:[] , pictures:[]});
  
  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        let result = data.find((l) => l.id === id);
        if (result){
          setLogement(result);
        }
        else {
          navigate("/error")
        }
        
      })
      .catch((error) => navigate("/error") );
  }, [ setLogement ,id ,navigate ]);



    return (
      <main id="lgmt-page">

        <div className="lgmt-carrousel">
        <Carrousel pictures={logement.pictures} />
        </div>

        <div className="lgmt-infos">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
        </div>

        <div className="lgmt-host">
          <div className="lgmt-host-name">{logement.host.name}</div>
          <img src={logement.host.picture} alt="Profil du propriétaire"/>
        </div>

        <div className="lgmt-tags">
        {logement.tags.map((tag) => (
						<Tag key={tag} value={tag} />
					))}
        </div>

        <div className="lgmt-rating">
          <Rating rating={logement.rating}/>
        </div>
        
        <div className="lgmt-description">
          <Collapse
            title="Description"
            content={logement.description}/>
        </div>

        <div className="lgmt-equipements">
          <Collapse
            title="Équipements"
            content={logement.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)}
          />
        </div>

      </main>
    );
  }

export default Logement