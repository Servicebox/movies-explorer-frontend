import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
      <div className="search__form-item">
          <input className="search__form-input" placeholder="Фильм"></input>
          <button className="search__form-button" type="button" />
        </div>
        <div className="search__filterCheckbox">
        <button className="search__filterCheckbox-slider " type="button" />
        <span className="search__filterCheckbox-span">Короткометражки</span>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;