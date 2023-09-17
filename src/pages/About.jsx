import Banner from "../components/Banner";
import AboutBannerImg from "../assets/banner-about.png"
import Collapse from "../components/Collapse";

function About() {
    return (
      <>
      <Banner
      bannerImg={AboutBannerImg}
      bannerImgAlt="Photo d'un paysage"
      />
      <Collapse/>
      </>
    );
  }

  export default About