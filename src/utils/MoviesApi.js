import { URL_BEATFILM } from "../utils/constants";
class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _handelResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
    })
      .then(this._handelResponse)
      .then((movies) => {
        return movies;
      });
  }
}

export const MoviesApi = new Api({
  baseUrl: URL_BEATFILM,
});