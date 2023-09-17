import React from "react";
import Banner from "../components/Banner";
import HomeBannerImg from "../assets/banner-home.png"

function Home() {
    return (
      <Banner
      bannerImg={HomeBannerImg}
      bannerImgAlt="Photo d'un paysage"
      bannerTxt="Chez vous, partout et ailleurs"/>
    );
  }


export default Home;