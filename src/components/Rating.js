function Rating({rating}) {

    const stars = [1, 2, 3, 4, 5];

    return (
        <>
            {stars.map((star) =>
                rating >= star ? (<i className="fa-solid fa-star"></i>)
                : (<i className="fa-solid fa-star star-inactive"></i>)
                )}
        </>
    )
}

export default Rating