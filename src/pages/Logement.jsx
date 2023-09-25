import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import Placeholder from "../assets/banner-about.png"
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import React from "react";
// import Error from "./Error";



function Logement() {

  // const [data,setData]=useState([]);

  // const getData=()=>{
  //   fetch('../data.json'
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
const { id } = useParams();
  const [ data, setData ] = useState([]);
  const [ ui, setUI ] = useState(<div></div>)
  
  useEffect(() => {
      fetch('../data.json')
          .then(res => res.json())
          .then(result => {
              const elem = result.find(el => el.id === id)
              setData(elem);
          })
  }, [data])

  ///////////////////////////////////////////
  // const [data, setData] = useState([]);
    
  // useEffect(() => {
  //     fetch('../data.json', {
  //         headers : { 
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //          }
    
  //       }).then(res => res.json())
  //         .then(result => setData(result));
  // }, [])

//   const item = data.find((lgmt) => lgmt.id === id);
//   if (!item) {
//     return <Error />;
// }

    return (
      <main id="lgmt-page">
        <Carrousel/>

        <div className="lgmt-infos">
          <h1>{data.title}</h1>
          <h2>{data.location}</h2>
        </div>

        <div className="lgmt-host">
          <div>test</div>
          <img src={Placeholder} alt="Profil du propriétaire"/>
        </div>

        <div className="lgmt-tags">
          <Tag/>
        </div>

        <div className="lgmt-rating">
          <Rating rating={data.rating}/>
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