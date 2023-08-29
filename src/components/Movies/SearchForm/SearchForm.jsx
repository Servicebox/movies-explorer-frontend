import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form">
        <div className="search-form__item">
          <input className="search-form__input" placeholder="Фильм"></input>
          <button  className="search-form__button"  type="submit" />
        </div>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;