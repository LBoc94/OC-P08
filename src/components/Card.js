function Card({cardImg, cardAlt, cardTitle}) {
    return(
            <article className="home-card">
                <img src={cardImg} alt={cardAlt}/>
                <h2>{cardTitle}</h2>
            </article>
    )
}

export default Card