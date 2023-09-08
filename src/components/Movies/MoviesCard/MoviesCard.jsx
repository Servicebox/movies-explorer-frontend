import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { movie } = props;
  return (
    <li className="movies__card">
      <img
        className="movies__card-image" src={movie.image} alt={movie.nameRU}
      />
      <div className="movies__card-about">
        <div className="movies__card-title">
          <h2 className="movies__card-subtitle">{movie.nameRU}</h2>
          <span className="movies__card-time">{movie.duration}</span>
        </div>
        <button className={`movies__button ${
          props.isSavedMoviesPage ? "movies__card-delete" : "movies__card-checkBox"
        }`} type="button" />
      </div>
    </li>
  );
}

export default MoviesCard;