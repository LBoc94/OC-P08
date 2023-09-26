function Rating({ rating }) {

    const stars = [1, 2, 3, 4, 5];

    return (
        <>
            {stars.map((star) =>
                rating >= star ? (<i className="fa-solid fa-star" key={star.toString()}></i>)
                : (<i className="fa-solid fa-star star-inactive" key={star.toString()}></i>)
                )}
        </>
    )
}

export default Rating