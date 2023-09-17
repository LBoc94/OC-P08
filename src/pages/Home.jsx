import React from "react";
import Banner from "../components/Banner";
import HomeBannerImg from "../assets/banner-home.png"
import Card from "../components/Card";

function Home() {
    return (
        <>
            <Banner
            bannerImg={HomeBannerImg}
            bannerImgAlt="Photo d'un paysage"
            bannerTxt="Chez vous, partout et ailleurs"/>
            
            <section className="home-card-section">

            <Card
            cardImg={HomeBannerImg}
            cardAlt="Photo d'un logement"
            cardTitle="à remplacer"/>

<Card
            cardImg={HomeBannerImg}
            cardAlt="Photo d'un logement"
            cardTitle="à remplacer"/>

<Card
            cardImg={HomeBannerImg}
            cardAlt="Photo d'un logement"
            cardTitle="à remplacer"/>

<Card
            cardImg={HomeBannerImg}
            cardAlt="Photo d'un logement"
            cardTitle="à remplacer"/>



                    </section>

        </>
    );
  }


export default Home;