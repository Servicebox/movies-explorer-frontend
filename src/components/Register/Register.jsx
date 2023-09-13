import React, { useState, useEffect } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { EMAIL_VALID } from "../../utils/constants";

function Register({ handleRegister, errorMessage, isLoading }) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, password, email } = formValue;
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(true);

  useEffect(() => {
    const isInputValid = () => {
      const isNameValid = name.trim().length >= 2 && name.trim().length <= 20;
      const isEmailValid = EMAIL_VALID.test(email.trim());
      const isPasswordValid = password.trim().length >= 8;

      return isNameValid && isEmailValid && isPasswordValid;
    };

    setIsFormValid(isInputValid());
    setIsFormEmpty(
      name.trim() === "" || email.trim() === "" || password.trim() === ""
    );
  }, [name, email, password]);

  const goToLogin = () => {
    navigate("/signin");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });

    if (name === "email") {
      const email = e.target;
      const isEmailValid = /^\S+@\S+\.\S+$/.test(value.trim());

      if (isEmailValid) {
        email.classList.remove("form__input-invalid");
      } else {
        email.classList.add("form__input-invalid");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ name, password, email });
  };

  return (
    <main className="signup">
      <section className="register">
        <form className="register__form form" onSubmit={handleSubmit} noValidate>
          <label className="register__form-label form__label"> Имя </label>
          <input className="register__form-input form__input"
            placeholder="Виталий"
            maxLength={30}
            minLength={2}
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={handleChange}
            disabled={isLoading}
            required
          ></input>
          <label className="register__form-label form__label ">E-mail</label>
          <input className="register__form-input form__input"
            placeholder="pochta@yandex.ru"
            maxLength={30}
            minLength={5}
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            disabled={isLoading}
            required
          ></input>

          <label className="register__form-label form__label">Пароль</label>
          <input className="register__form-input form__input"
            placeholder="••••••••••••••"
            maxLength={12}
            minLength={8}
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={handleChange}
            disabled={isLoading}
            required
          ></input>
          <p className="register__form-error form__error "> {errorMessage}</p>
          <button
            className={`register__form-button  form__button ${
              isLoading || isFormEmpty || !isFormValid
                ? "form__button-disable"
                : ""
            }`}
            type="submit"
            disabled={isLoading || isFormEmpty || !isFormValid}
          >
            Зарегистрироваться
          </button>
          <span className="register__form-span-link form__span-link">
            Уже зарегистрированны?
            <button
              className="register__form-button form__button-reg"
              type="button"
              onClick={goToLogin}
              disabled={isLoading}
            >
              Войти
            </button>
          </span>
        </form>
      </section>
    </main>
  );
}

export default Register;