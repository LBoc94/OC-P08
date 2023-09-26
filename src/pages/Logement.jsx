import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
// import Placeholder from "../assets/banner-about.png"
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
// import { useOutletContext } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
// import Error from "./Error";



function Logement() {

  // const [data,setData]=useState([]);

  // const getData=()=>{
  //   fetch('data.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setData(myJson)
  //     });
  // }

  // useEffect(()=>{
  //   getData()
  // },[])
/////////////////////////////////////////////////
  ///WORKS MAIS PAS ASYNC
// const { id } = useParams();
//   const [ data, setData ] = useState([]);
//   const [ ui, setUI ] = useState(<div></div>)
  
//   useEffect(() => {
//       fetch('../data.json')
//           .then(res => res.json())
//           .then(result => {
//               const elem = result.find(el => el.id === id)
//               setData(elem);
//           })
//   }, [data])

  ///////////////////////////////////////////
//   const [data, setData] = useState([]);
    
//   useEffect(() => {
//       fetch('../data.json', {
//           headers : { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//            }
    
//         }).then(res => res.json())
//           .then(result => setData(result));
//   }, [])

//   const item = data.find((lgmt) => lgmt.id === id);
//   if (!item) {
//     return <Error />;
// }



////////////////////////
/// NOT WORKING YET
// const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("data.json");
//       const jsonData = await response.json();
//       setData(jsonData);
//     };
//     fetchData();
//   }, []);



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

  function displayEquipments (){
    
    return (logement.equipments.map(equipment => <div className="logement_equipment" key={equipment}>{equipment}</div>))
  }


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
          <div>{logement.host.name}</div>
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
            content={displayEquipments()}
          />
        </div>

      </main>
    );
  }

export default Logement