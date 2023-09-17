function Banner({bannerImg, bannerImgAlt, bannerTxt}) {
   return (
    <div className="banner">
        <img src={bannerImg} alt={bannerImgAlt}/>
        <p>{bannerTxt}</p>
    </div>
   ) 
}

export default Banner;