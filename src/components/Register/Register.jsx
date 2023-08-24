import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <form className="register__form form">
        <div className="register__form_tag form_tag"> Имя </div>
        <input className="register__form_input form_input"></input>

        <div className="register__form_tag form_tag">E-mail</div>
        <input className="register__form_input form_input"></input>

        <div className="register__form_tag form_tag">Пароль</div>
        <input className="register__form_input form_input"></input>

        <span className="register__form_span-error form_span-error"></span>
        <button className="register__form_button form_button" type="button">
          Зарегестрироваться
        </button>
        <span className="register__form_span-link form_span-link">
          Уже зарегистрированны?
          <Link
            className="register__form_link form_link"
            type="link"
            to="/signin"
          >
            Войти
          </Link>
        </span>
      </form>
    </section>
  );
}

export default Register;