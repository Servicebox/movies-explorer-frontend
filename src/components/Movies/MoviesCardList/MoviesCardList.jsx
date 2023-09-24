import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../../SearchError/SearchError";
import {
  DESKTOP_MOVIE_COUNT,
  TABLET_MOVIE_COUNT,
  MOBILE_MOVIE_COUNT,
} from "../../../utils/constants";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList({
  cards,
  isLoading,
  isSavedFilms,
  savedMovies,
  isReqError,
  isNotFound,
  getLikeMovie,
  onDeleteCard,
}) {
  const { pathname } = useLocation();
  const [shownMovies, setShownMovies] = useState(0);

  function showMoviesDisplay() {
    const display = window.innerWidth;
    if (display > 1023) {
      setShownMovies(12);
    } else if (display > 767) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  }

  useEffect(() => {
    showMoviesDisplay();
  }, [cards]);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", showMoviesDisplay);
    }, 500);
  }, []);

  function getShowCountMovies() {
    const display = window.innerWidth;
    if (display > 1023) {
      setShownMovies(shownMovies + DESKTOP_MOVIE_COUNT);
    } else if (display > 767) {
      setShownMovies(shownMovies + TABLET_MOVIE_COUNT);
    } else {
      setShownMovies(shownMovies + MOBILE_MOVIE_COUNT);
    }
  }

  function getSavedMovieFromList(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchError errorText={"По данному запросу ни чего не найдено"} />
      )}
      {isReqError && !isLoading && (
        <SearchError
          errorText={
            "Во время поискового запроса произошла ошибка.Подождите немного и попробуйте ещё раз"
          }
        />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          <ul className="movies__list">
            {pathname === "/saved-movies"
              ? cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    card={card}
                    cards={cards}
                    saved={getSavedMovieFromList(savedMovies, card)}
                    getLikeMovie={getLikeMovie}
                    onDeleteCard={onDeleteCard}
                    isSavedFilms={isSavedFilms}
                    savedMovies={savedMovies}
                  />
                ))
              : cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={getSavedMovieFromList(savedMovies, card)}
                    cards={cards}
                    card={card}
                    getLikeMovie={getLikeMovie}
                    onDeleteCard={onDeleteCard}
                    isSavedFilms={isSavedFilms}
                    savedMovies={savedMovies}
                  />
                ))}
          </ul>
          <div className="cards__button-container">
            {cards.length > shownMovies && (
              <button onClick={getShowCountMovies} className="cards__button">
                Ещё
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;