import { useState } from "react";

function MainBlock() {
    const places = [
        {
            id: 1,
            name: "Париж",
            country: "Франция",
            description: "Город любви, романтики и красивых улиц.",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800"
        },
        {
            id: 2,
            name: "Санторини",
            country: "Греция",
            description: "Белоснежные домики и невероятно синее море.",
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800"
        },
        {
            id: 3,
            name: "Киото",
            country: "Япония",
            description: "Волшебный город с древней историей.",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800"
        }
    ];

    const [favorites, setFavorites] = useState([]);
    const [message, setMessage] = useState("");

    function addFavorite(place) {
        if (favorites.includes(place.id)) {
            setFavorites(favorites.filter(id => id !== place.id));
            setMessage(`${place.name} удалён из избранного`);
        } else {
            setFavorites(prev => [...prev, place.id]);
            setMessage(`${place.name} добавлен в избранное ♡`);
        }
    }

    return (
        <main>
            <section className="hero" id="home">
                <p className="subtitle">ТВОЙ МАЛЕНЬКИЙ ПУТЕВОДИТЕЛЬ</p>

                <h1>Открой для себя мир</h1>

                <p>
                    Находи удивительные места, мечтай о путешествиях
                    и открывай для себя что-то новое.
                </p>

                <a href="#places" className="main-button">
                    Посмотреть места
                </a>
            </section>

            <section className="places" id="places">
                <h2>Красивые места мира</h2>

                <div className="places-grid">
                    {places.map(place => (
                        <article className="place-card" key={place.id}>
                            <img src={place.image} alt={place.name} />

                            <div className="card-content">
                                <h3>{place.name}</h3>

                                <p className="country">
                                    {place.country}
                                </p>

                                <p>{place.description}</p>

                                <button
                                    onClick={() => addFavorite(place)}
                                    className="favorite-button"
                                >
                                    {favorites.includes(place.id)
                                        ? "♥ В избранном"
                                        : "♡ В избранное"}
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="message">{message}</p>

                <div id="favorites">
                    <h3>Моё избранное: {favorites.length}</h3>

                    {favorites.length === 0 && (
                        <p>Пока здесь ничего нет. Добавь любимые места ♡</p>
                    )}

                    {favorites.map(id => {
                        const place = places.find(item => item.id === id);

                        return (
                            <p key={id}>
                                ♥ {place.name} — {place.country}
                            </p>
                        );
                    })}
                </div>
            </section>

            <section className="about" id="about">
                <h2>О моем проекте</h2>

                <p>
                    DREAM ATLAS — это небольшой путеводитель
                    по красивым уголкам нашей планеты.
                    Здесь можно находить интересные места
                    и сохранять в избранное.
                </p>
            </section>
        </main>
    );
}

export default MainBlock;