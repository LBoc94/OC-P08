import React from "react";
import Banner from "../components/Banner";
import HomeBannerImg from "../assets/banner-home.png"
import Card from "../components/Card";
import {useState,useEffect} from 'react';

function Home() {

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

  const [data, setData] = useState([]);
    
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