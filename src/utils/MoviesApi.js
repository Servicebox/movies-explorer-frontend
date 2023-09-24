import { getCheckResponse } from "./functionHelpers"

export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies"

export function getMovies() {
  return fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => getCheckResponse(res))
  .then((data) => data)
  .catch((err) => {
    throw new Error(`Ошибка: ${err.status}`);
  });
}