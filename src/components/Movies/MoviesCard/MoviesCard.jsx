import React from "react";
import btnRemoveMovie from "../../../images/d8.svg";
import { converterDurationMovie } from "../../../utils/functionHelpers";
import "./MoviesCard.css";

function MoviesCard({
  card,
  saved,
  savedMovies,
  isSavedFilms,
  getLikeMovie,
  onDeleteCard,
}) {
  const onCardClick = () => {
    if (saved) {
      const movieToDelete = savedMovies.find((m) => m.movieId === card.id);
      onDeleteCard(movieToDelete);
    } else {
      getLikeMovie(card);
    }
  };

  const onDelete = () => {
    onDeleteCard(card);
  };

  const movieLikeBtnClassName = saved
    ? "card__like-button card__like-button_active"
    : "card__like-button";

  return (
    <li className="movies__card" key={card.id}>

        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="card__photo"
            alt={card.nameRU}
            src={
              isSavedFilms
                ? card.image
                : `https://api.nomoreparties.co/${card.image.url}`
            }
          />
        </a>
  
        <div className="card__about">
          <div className="card__text">
          <h2 className="card__title">{card.nameRU}</h2>
          <span className="card__time">
            {converterDurationMovie(card.duration)}
          </span>
          {isSavedFilms ? (
          <button
            type="button"
            className="card__like-remove"
            onClick={onDelete}
          >
            <img
              className="card__like-remove"
              src={btnRemoveMovie}
              alt="крестик удаления карточки с фильмом"
            />
          </button>
        ) : (
          <button
            className={movieLikeBtnClassName}
            onClick={onCardClick}
            type="button"
          ></button>
        )}
        </div>
        </div>
    </li>
  );
}

export default MoviesCard;