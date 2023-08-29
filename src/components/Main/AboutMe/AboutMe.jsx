import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import student from "../../../images/student.jpg";

function AboutMe() {
  return (
    <section className="about">
      <h2 className="about__title section__title">Студент</h2>
      <div className="about__student-info">
        <div className="about__text-content">
          <h3 className="about__text-content_subtitle">
            {" "}
            Виталий
          </h3>
          <p className="about__text-content_student">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about__text-content_caption">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещt увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
        className="about__link-github"
        type="link"
        to="https://github.com/Servicebox"
      >
        Github
      </Link>
        </div>
        <img className="about__student_photo" alt="student" src={student} />
      </div>

    </section>
  );
}

export default AboutMe;