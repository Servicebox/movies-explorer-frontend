import React from "react";
import { Link } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ movie, isSavedMoviesPage, savedMovies, onSave,onDelete}) {
  const baseUrl = "https://api.nomoreparties.co/";
  const imageUrl = isSavedMoviesPage ? movie.image : baseUrl + movie.image.url;
  const isSaved =
    !isSavedMoviesPage && savedMovies.some((item) => item.movieId === movie.id);
  const movieButtonClassName = `movies__button movies__card-checkBox ${
    isSaved && 'movies__card-checkBox_on'
  }`;

  function minutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} ч ${remainingMinutes} мин`;
  }
  const formattedDuration = minutesToHoursAndMinutes(movie.duration);

  function handleSaveClick() {
    onSave(movie);
  }

  function handleDeliteClick() {
    onDelete(movie);
  }
  return (
    <li className="movies__card" key={movie.id}>
      <Link to={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movies__card-image" src={imageUrl} alt={movie.nameRU} />
      </Link>
      <div className="movies__card-about">
        <div className="movies__card-title">
          <h2 className="movies__card-subtitle">{movie.nameRU}</h2>
          <span className="movies__card-time">{formattedDuration}</span>
        </div>
        <button className={`movies__button ${
            isSavedMoviesPage ? "movies__card-delete" : movieButtonClassName
          }`}
          type="button"
          onClick={!isSavedMoviesPage ? handleSaveClick : handleDeliteClick}
        />
      </div>
    </li>
  );
}

export default MoviesCard;