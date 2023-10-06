import { useState } from "react"

function Collapse({title, content}) {

        // recherche si le collapse est ouvert
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="collapse">

            <div className="collapse-frame">
                <div className="collapse-title">{title}</div>
                <span onClick={handleClick} className={isOpen ? "collapse-arrow arrow-open" : "collapse-arrow arrow-closed"}><i className="fa-solid fa-angle-up"></i></span>
            </div>

            <div className={isOpen ? "wrapper-open" : "wrapper-closed"}>
                <div className={isOpen ? "collapse-content collapse-content-open" : "collapse-content collapse-content-closed"}>{content}</div>
            </div>
            
        </div>
    )
}

export default Collapse