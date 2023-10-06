import { useNavigate } from "react-router-dom"

function Card({ cardImg, cardAlt, cardId, cardTitle }) {

    const navigate = useNavigate()
    const redirectLgmt = () => navigate(`/logement/${cardId}`)

        return (
                <article className="home-card" onClick={()=> redirectLgmt()}>
                    <img src={cardImg} alt={cardAlt}/>
                    <h2>{cardTitle}</h2>
                </article>
        )
}

export default Card