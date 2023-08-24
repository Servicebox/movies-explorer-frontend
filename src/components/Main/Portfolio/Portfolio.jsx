import React from "react";
import "./Portfolio.css"
import { Link } from "react-router-dom";
function Portfolio (){
  return (
    <section className="portfolio">
    <h4 className="portfolio__title">Портфолио</h4>
    <Link
      className="portfolio__link"
      type="link"
      to="https://github.com/Servicebox/how-to-learn"
    >
      <p className="portfolio-link__text">Статичный сайт</p>
      <div
        className="about__portfolio-link_image"
      />
    </Link>
    <Link
      className="portfolio__link"
      type="link"
      to="https://github.com/Servicebox/russian-travel"
    >
      <p className="portfolio-link__text">Адаптивный сайт</p>

      <div
        className="about__portfolio-link_image"
      />
    </Link>
    <Link
      className="portfolio__link"
      type="link"
      to="https://github.com/Servicebox/react-mesto-api-full-gha"
    >
      <p className="portfolio-link__text">Одностраничное приложение</p>
      <div
        className="about__portfolio-link_image"
      />
    </Link>
  </section>
  )
}

export default Portfolio;