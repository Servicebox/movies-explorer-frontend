import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <nav className="footer__navigation">
        <p className="footer__caption"> © 2023</p>
        <div className="footer__links">
          <Link
            className="footer__link"
            type="link"
            target="_blank" rel="noopener noreferrer"
            to="https://practicum.yandex.ru/"
          > 
            Яндекс.Практикум
          </Link>
          <Link
            className="footer__link"
            type="link"
            to="https://github.com/Servicebox"
            target="_blank" rel="noopener noreferrer"
          >
            Github
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;