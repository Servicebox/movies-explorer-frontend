import { BASE_IMAGE_URL, BASE_MYAPI_URL } from "../utils/constants";
export default class Api {
  constructor({ baseUrl, baseUrlMovie }) {
    this._baseUrl = baseUrl;
    this._baseUrlMovie = baseUrlMovie;
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.message}`);
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

  register = async ({ name, email, password }) => {
    const res = await fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    return this._isOk(res);
  };

  authorize = async (email, password) => {
    const res = await fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return this._isOk(res);
  };

  async getSavedMovies() {
    const res = await fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    });
    return this._getResponseData(res);
  }

  async saveMovie(movie) {
    const res = await fetch(`${this._baseUrl}/movies`, {
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
    });
    return this._getResponseData(res);
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

  async getProfile() {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    });
    return this._getResponseData(res);
  }
  async udateProfile({ name, email }) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    return this._isOk(res);
  }
}
export const api = new Api({
  baseUrlMovie: BASE_IMAGE_URL,
  baseUrl: BASE_MYAPI_URL,
});