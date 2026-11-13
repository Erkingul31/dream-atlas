function Cards({ places, favorites, onFavoriteClick }) {
    return (
        <div className="places-grid">
            {places.map((place) => (
                <article
                    className="place-card"
                    key={place.id}
                    onClick={() => console.log("Данные карточки:", place)}
                    style={{ cursor: "pointer" }}
                >
                    <img src={place.image} alt={place.name} />

                    <div className="card-content">
                        <h3>{place.name}</h3>
                        <p className="country">{place.country}</p>
                        <p>{place.description}</p>

                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                onFavoriteClick(place);
                            }}
                        >
                            {favorites.includes(place.id)
                                ? "♥ В избранном"
                                : "♡ В избранное"}
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Cards;