import React from "react";
import "./Movies.css";
import AddMoviesTable from "./AddMoviesTable/AddMoviesTable";
import SearchForm from "./SearchForm/SearchForm";
import NavTab from "../NavTab/NavTab";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesList } from "../../utils/constants";

function Movies (){
  return(
    <section className="movies">
      <SearchForm />
      <MoviesCardList
       movieCardList={moviesList.slice(0)}
       />
      <AddMoviesTable />
    </section>
  );
}

export default Movies;