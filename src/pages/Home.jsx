import React from "react";
import {useState,useEffect} from 'react';
import Banner from "../components/Banner";
import Card from "../components/Card";
import HomeBannerImg from "../assets/banner-home.png"


function Home() {

    // stocke les informations
  const [data, setData] = useState([]);
    
    // récupère les informations
    useEffect(() => {
        fetch('data.json', {
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
            bannerImg={HomeBannerImg}
            bannerImgAlt="Photo d'un paysage"
            bannerTxt="Chez vous, partout et ailleurs"/>
            
            <section className="home-card-section">

            {data.map((lgmt) => (
              <Card key={lgmt.id}
              cardImg={lgmt.cover}
              cardAlt={lgmt.title}
              cardId={lgmt.id}
              cardTitle={lgmt.title}/>
              ))}

            </section>
        </>
    );
}

export default Home;