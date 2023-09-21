import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ getSearchMovies, onFilterMovies, isShortMovies }) {
  const [isQueryError, setIsQueryError] = useState(false);
  const location = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (location.pathname === "/movies" && localStorage.getItem("movieSearch")) {
      const localQuery = localStorage.getItem("movieSearch");
      setQuery(localQuery);
    }
  }, [location]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      getSearchMovies(query);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="search">
      <form className="search__form" id="form" onSubmit={handleFormSubmit}>
        <input
          className="search__form-input"
          name="query"
          placeholder="Фильм"
          type="text"
          value={query}
          onChange={handleInputChange}
          required
        ></input>
        <button className="search__form-button" type="submit"></button>
      </form>
      <FilterCheckbox
        onFilterMovies={onFilterMovies}
        isShortMovies={isShortMovies}
      />
      {isQueryError && (
        <span className="search__form-error">Введите ключевое слово</span>
      )}
    </section>
  );
}

export default SearchForm;