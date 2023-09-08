import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__navigation">
      <p className="footer__caption">&copy; 2023</p>
        <ul className="footer__list">
        <li className="footer__list-item">
          <Link
            className="footer__link"
            type="link"
            target="_blank" rel="noopener noreferrer"
            to="https://practicum.yandex.ru/"> 
            Яндекс.Практикум
          </Link>
          </li>
          <li className="footer__list-item">
          <Link
            className="footer__link"
            type="link"
            to="https://github.com/Servicebox"
            target="_blank" rel="noopener noreferrer">
            Github
          </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;