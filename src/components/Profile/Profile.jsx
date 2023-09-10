import React, { useState, useContext, useEffect } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import { useNavigate } from "react-router-dom";


function Profile({
  onUpdateUser,
  isLoading,
  errorMessage,
  successMessage,
  isFormActivated,
  setFormActivated,
}) {
  useEffect(() => {
    localStorage.setItem("currentPath", "/profile");
  }, []);
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("query");
    localStorage.removeItem("isShortFilm");
    localStorage.removeItem("searchResults");
    navigate("/");
  };
  const currentUser = useContext(CurrentUserContext);
  const [value, setValue] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const handleActivated = () => {
    setFormActivated(true);
  };

  React.useEffect(() => {
    setValue({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFormActivated(false);
    onUpdateUser(value);
  }
  return (
    <main className="profileMain">
      <section className="profile">
      <h2 className="profile__title"> {`Привет,  ${currentUser.name}!`}</h2>
      <form className="profile__form"onSubmit={handleSubmit} noValidate>
        <div className="profile__form-item" id="profile__item-name">
          <label className="profile__form-label">Имя</label>
          <input className="profile__form-input" 
          placeholder="Виталий"
          type="text"
          name="name"
          id="Username"
          maxLength={30}
          minLength={2}
          value={value.name ?? ""}
          onChange={handleChange}
          disabled={!isFormActivated || isLoading}
          ></input>
        </div>
        <div className="profile__form-item ">
          <label className="profile__form-label">E-mail</label>
          <input
            className="profile__form-input"
            placeholder="pochta@yandex.ru"
              type="email"
              name="email"
              id="email"
              maxLength={30}
              minLength={5}
              value={value.email ?? ""}
              onChange={handleChange}
              disabled={!isFormActivated || isLoading}
              
          ></input>
        </div>
        <div className="profile__form-info">
            {errorMessage && (
              <p className="profile__form-message form__message-error">
                {errorMessage}
              </p>
            )}
            {successMessage && (
              <p className="profile__form-message form__message-ok">
                {successMessage}
              </p>
            )}
            {!isFormActivated && (
              <button
                className="profile__form-button"
                type="button"
                onClick={handleActivated}
              >
                Редактировать
              </button>
            )}
            {isFormActivated && (
              <button className= {`profile__button-save ${isLoading ? 'profile__button-disable' : ''}`}
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                Сохранить
              </button>
            )}
            <button className="profile__button-exit"
              id="profile__button-exit"
              type="button"
              onClick={signOut}
              disabled={isLoading}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Profile;