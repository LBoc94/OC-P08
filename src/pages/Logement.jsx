import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import Placeholder from "../assets/banner-about.png"



function Logement() {
    return (
      <main id="lgmt-page">
        <Carrousel/>

        <div className="lgmt-infos">
          <h1>Nom lgmt</h1>
          <h2>Location lgmt</h2>
        </div>

        <div className="lgmt-host">
          <div>Foolish Gamers</div>
          <img src={Placeholder} alt="Profil du propriétaire"/>
        </div>

        <div className="lgmt-tags">
          <Tag/>
        </div>

        <div className="lgmt-rating">
          <Rating/>
        </div>
        
        <div className="lgmt-description">
          <Collapse/>
        </div>

        <div className="lgmt-equipements">
          <Collapse/>
        </div>

      </main>
    );
  }

  export default Logement