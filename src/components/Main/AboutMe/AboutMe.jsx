import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import student from "../../../images/mi1.jpeg";

function AboutMe() {
  return (
    <section className="about-me section">
      <h2 className="about-me__title  section__title">Студент</h2>
      <div className="about-me__student-info">
        <article className="about-me__text-content">
          <h3 className="about-me__name"> Тамара</h3>
          <p className="about-me__subtitle">
            Фронтенд-разработчик, 36 лет
          </p>
          <p className="about-me__about">
          Я родом из города Иваново, но уже много лет живу в городе Вологде.
          Мои первые шаги в образовании были связаны с социальной работой, педагогикой и психологией,
          но всегда было ясно, что моя страсть лежит в другом направлении - в компьютерах и всем, что с ними связано.
          С 2016 года я начала работать в сфере ремонта цифровой техники, и за эти годы приобрела ценный опыт.
          Однако, в 2022 году я осознала, что для развития сервисного центра необходимо получить образование в области веб-разработки.
          Именно здесь мне помог курс Яндекс.Практикума, который дал мне необходимые знания и навыки.
          Кроме работы и учебы, я также наслаждаюсь музыкой и увлекаюсь сноубордом.
          Но недавно я открыла для себя еще одну страсть - программирование.
          Мне нравится писать код, потому что это настоящее творчество и созидание.
          Когда я занимаюсь программированием, время пролетает незаметно.
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