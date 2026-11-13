import { useState } from "react";
import Cards from "./Cards";
import places from "../data/places";

function MainBlock() {
    const [favorites, setFavorites] = useState([]);
    const [message, setMessage] = useState("");

    function addFavorite(place) {
        if (favorites.includes(place.id)) {
            setFavorites(favorites.filter((id) => id !== place.id));
            setMessage(`${place.name} удалён из избранного`);
        } else {
            setFavorites([...favorites, place.id]);
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

                <p className="places-description">
                    20 удивительных направлений для твоих будущих путешествий.
                </p>

                <Cards
                    places={places}
                    favorites={favorites}
                    onFavoriteClick={addFavorite}
                />

                <p className="message">{message}</p>

                <section className="favorites" id="favorites">
                    <h3>Моё избранное: {favorites.length}</h3>

                    {favorites.length === 0 && (
                        <p>Пока здесь ничего нет. Добавь любимые места ♡</p>
                    )}

                    {favorites.map((id) => {
                        const place = places.find(
                            (item) => item.id === id
                        );

                        return (
                            <p key={id}>
                                ♥ {place.name} — {place.country}
                            </p>
                        );
                    })}
                </section>
            </section>

            <section className="about" id="about">
                <h2>DREAM ATLAS</h2>

                <p>
                    DREAM ATLAS — это небольшой путеводитель
                    по красивым уголкам нашей планеты.
                    Здесь можно находить интересные места,
                    узнавать о них больше и сохранять в избранное.
                </p>
            </section>
        </main>
    );
}

export default MainBlock;