import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList maxVisibleCards={3} />
    </section>
  );
}

export default SavedMovies;