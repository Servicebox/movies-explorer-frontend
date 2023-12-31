import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import student from "../../../images/student.jpg";

function AboutMe() {
  return (
    <section className="about-me section">
      <h2 className="about-me__title  section__title">Студент</h2>
      <div className="about-me__student-info">
        <article className="about-me__text-content">
          <h3 className="about-me__name"> Виталий</h3>
          <p className="about-me__subtitle">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__about">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а еще увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className="about-me__link-github"
            type="link"
            target="_blank" rel="noopener noreferrer"
            to="https://github.com/Servicebox"
          >
            Github
          </Link>
        </article>
        <img className="about-me__photo" alt="Фото" src={student} />
      </div>
    </section>
  );
}

export default AboutMe;