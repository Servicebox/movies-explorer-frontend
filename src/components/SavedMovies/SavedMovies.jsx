import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { moviesList } from "../../utils/constants";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <main className=" movies movies_saved">
      <SearchForm />
      <MoviesCardList moviesList={moviesList.slice(0,3)} isSavedMoviesPage={true} /> {' '}
    </main>
  );
}

export default SavedMovies;