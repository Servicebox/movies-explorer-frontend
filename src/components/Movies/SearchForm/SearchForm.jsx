import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
      <div className="search__form_item">
        <input className="search__form_input" placeholder="Фильм"></input>
        <button className="search__form_button" type="button" />
        </div>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;