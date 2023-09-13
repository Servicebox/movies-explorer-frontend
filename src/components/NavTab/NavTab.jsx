import React from "react";
import "./NavTab.css";
import { useLocation, useNavigate } from "react-router-dom";

function NavTab({ closeNavTab }) {
  const navigate = useNavigate();
  const location = useLocation();


  const goToMain = () => {
    navigate("/");
  };
  const goToMovies = () => {
    navigate("/movies");
  };

  const goToSavedMovies = () => {
    navigate("/saved-movies");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="navigate">
      <button className="navigate__button-close" onClick={closeNavTab}/>
      <div className="navigate__text-buttons">
      <button
        className={`navigate__button ${
            location.pathname === "/" ? "navigate__button_active" : ""
          }`}
          onClick={goToMain}
        >
          Главная
        </button>
        <button className={`navigate__button ${
            location.pathname === "/movies" ? "navigate__button_active" : ""
          }`}
          onClick={goToMovies}
        >
          Фильмы
        </button>
        <button className={`navigate__button ${
            location.pathname === "/saved-movies" ? "navigate__button_active" : ""
          }`}
          onClick={goToSavedMovies}
        >
          Сохраненные фильмы
        </button>
      </div>

      <button className="navigate__button-profile"
        onClick={goToProfile}
      />
    </nav>
  );
}

export default NavTab;