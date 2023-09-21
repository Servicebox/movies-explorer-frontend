import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navigation.css";
import account from "../../images/profile.svg"

function Navigation({ handleCloseMobileMenu }) {
  const setActiveColorHeaderLink = ({ isActive }) =>
    isActive ? "navigation__link_active" : "navigation__link"

  return (
    <div className="navigation__block">
      <div className="navigation__block-overlay"></div>
      <div className="navigation__menu">
        <button
          onClick={handleCloseMobileMenu}
          className="navigation__button-close"
        ></button>
        <nav className="navigation__links">
          <NavLink to="/" className={setActiveColorHeaderLink}>
            Главная
          </NavLink>
          <NavLink to="/movies" className={setActiveColorHeaderLink}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={setActiveColorHeaderLink}>
            Сохранённые фильмы
          </NavLink>
        </nav>
      </div>
      <Link to="/profile" className="navigation__profile-button">
          <img src={account} alt="Иконка аккаунт" />
        </Link> 
    </div>
  )
}

export default Navigation