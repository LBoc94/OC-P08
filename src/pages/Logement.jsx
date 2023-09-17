import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Tag from "../components/Tag";


function Logement() {
    return (
      <main id="lgmt-page">
        <Carrousel/>
        <div className="lgmt-infos">
          <h1>Nom lgmt</h1>
          <h2>Location lgmt</h2>
        </div>
        <Tag/>
        <Collapse/>
        <Rating/>
      </main>
    );
  }

  export default Logement