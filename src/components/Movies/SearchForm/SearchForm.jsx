import React from "react";
import "./SearchForm.css";

function SearchForm({
  query,
  setQuery,
  isShortFilm,
  setIsShortFilm,
  onSearch,
  onFilter,
}) {

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleShortFilmToggle = () => {
    setIsShortFilm(!isShortFilm);
    onFilter(query, !isShortFilm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch(query, isShortFilm);
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
      <div className="search__form-item">
          <input className="search__form-input" placeholder="Фильм"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          required
          ></input>
          <button className="search__form-button" type="submit" />
        </div>
        <div className="search__filterCheckbox">
        <button className={`search__filterCheckbox-slider ${
              isShortFilm ? "search__filterCheckbox-slider_on" : ""
            }`}
            type="button"
            onClick={handleShortFilmToggle}
          />
        <span className="search__filterCheckbox-span">Короткометражки</span>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;