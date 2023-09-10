import React from "react";
import "./Portfolio.css"
import { Link } from "react-router-dom";
function Portfolio (){
  return (
    <section className="portfolio">
    <h3 className="portfolio__title">Портфолио</h3>
    <ul className="portfolio__list">
    <li className="portfolio__list-item">

    <Link
      className="portfolio__link"
      to="https://github.com/Servicebox/how-to-learn"
      target="_blank" rel="noopener noreferrer"
    >
      <p className="portfolio__link-title">Статичный сайт</p>
      <div
        className="portfolio__link-image"
      />
    </Link>
    </li>
    <li className="portfolio__list-item">
    <Link
      className="portfolio__link"
      to="https://servicebox.github.io/russian-travel/"
      target="_blank" rel="noopener noreferrer"
    >
      <p className="portfolio__link-title">Адаптивный сайт</p>

      <div
        className="portfolio__link-image"
      />
    </Link>
    </li>
    <li className="portfolio__list-item">
    <Link
      className="portfolio__link"
      to="https://github.com/Servicebox/react-mesto-api-full-gha"
      target="_blank" rel="noopener noreferrer"
    >
      <p className="portfolio__link-title">Одностраничное приложение</p>
      <div
        className="portfolio__link-image"
      />
    </Link>
    </li>
    </ul>
  </section>
  );
}

export default Portfolio;