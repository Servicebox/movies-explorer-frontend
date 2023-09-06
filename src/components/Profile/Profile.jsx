import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <main className="profileMain">
      <section className="profile">
      <h2 className="profile__title"> Привет, Виталий!</h2>
      <form className="profile__form">
        <div className="profile__form-item" id="profile__item-name">
          <label className="profile__form-label">Имя</label>
          <input className="profile__form-input" 
          placeholder="Виталий"
          type="text"
          name="name"
          maxLength={30}
          minLength={2}
          ></input>
        </div>
        <div className="profile__form-item ">
          <label className="profile__form-label">E-mail</label>
          <input
            className="profile__form-input"
            placeholder="pochta@yandex.ru"
              type="email"
              name="email"
              maxLength={30}
              minLength={5}
              
          ></input>
        </div>
        <button className="profile__form-button" type="button">
          Редактировать
        </button>
      </form>
      <button className="profile__button-exit" type="button">
        Выйти из аккаунта
      </button>
    </section>
    </main>
  );
}

export default Profile;