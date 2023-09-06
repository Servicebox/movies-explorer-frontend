import "./Techs.css";
import React from "react";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title ">Технологии</h2>
      <h3 className="techs__subtitle section__subtitle"> 7 технологий</h3>
      <p className="techs__caption">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__table-list">
        <li className="techs__table">HTML</li>
        <li className="techs__table">CSS</li>
        <li className="techs__table">JS</li>
        <li className="techs__table">React</li>
        <li className="techs__table">Git</li>
        <li className="techs__table">Express.js</li>
        <li className="techs__table">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;