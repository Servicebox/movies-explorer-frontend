import { URL_IMAGE_BEATFILM, BASE_URL } from "../utils/constants";

export default class Api {
  constructor({ baseUrl, baseUrlMovie }) {
    this._baseUrl = baseUrl;
    this._baseUrlMovie = baseUrlMovie;
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.error(`Ошибка в запросе: ${res.status} - ${res.statusText}`);
      return Promise.reject(`Ошибка в запросе: ${res.status} - ${res.statusText}`);
    }
  }
  

  _isOk(res) {
    if (res.ok) {
      return res.json();
    }
    console.log(res);
    return res.json().then((res) => {
      throw res;
    });
  }

  register = ({ name, email, password }) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._isOk);
  };

  authorize = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._isOk);
  };

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then(this._getResponseData);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: this._baseUrlMovie + movie.image.url,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: this._baseUrlMovie + movie.image.formats.thumbnail.url,
        movieId: movie.id,
      }),
    }).then(this._getResponseData);
  }
  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    });
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then(this._getResponseData);
  }
  udateProfile({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }).then(this._isOk);
  }
}
export const api = new Api({
  baseUrlMovie: URL_IMAGE_BEATFILM,
  baseUrl: BASE_URL,
});