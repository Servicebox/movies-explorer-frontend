import React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import mobileMenu from "../../images/burger.svg"
import headerLogo from "../../images/logo.svg"
import Navigation from "../Navigation/Navigation"
import "./Header.css"
import profileMenu from "../../images/profile.svg"
import handleOpenMobileMenu from "../../images/burgermini.svg"

function Header({ loggedIn }) {
  const [isClicked, setIsClicked] = React.useState(false)
  const location = useLocation()

  function handleOpenMobileMenu() {
    setIsClicked(true)
  }

  function handleCloseMobileMenu() {
    setIsClicked(false)
  }

  const activeColorHeaderLink = ({ isActive }) =>
    isActive ? "header__button_active" : "header__button"

  const isHomePage = location.pathname === "/"

  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <Link to="/" className="form__logo">
            <img src={headerLogo} alt="Логотип сайта" />
          </Link>
          <div className="header__links">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button-in">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className={`header ${isHomePage ? "header__color-blue" : "header__color-dark"}`}>
          <Link to="/" className="form__logo">
            <img src={headerLogo} alt="Логотип" />
          </Link>
          <div className="header__links header__links_films">
            <NavLink to="/movies" className={activeColorHeaderLink}>
              Фильмы
            </NavLink>

            <NavLink to="/saved-movies" className={activeColorHeaderLink}>
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__links">
            <Link to="/profile" className="header__account-btn">
              <img 
              src={profileMenu}
              alt="аккаунт" />
            </Link>
            <button
              className="header__mobile-btn"
              onClick={handleOpenMobileMenu}
            >
              <img
                src={mobileMenu}
                alt="бургер меню"
              />
            </button>
          </div>
          {isClicked ? (
            <Navigation handleCloseMobileMenu={handleCloseMobileMenu} />
          ) : (
            ""
          )}
        </header>
      )}
    </>
  )
}

export default Header