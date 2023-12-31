const isNameValid = formValue.name.length >= 2 && formValue.name.length <= 20;
  const isEmailValid = /^\S+@\S+\.\S+$/.test(formValue.email);
  const isPasswordValid = formValue.password.length >= 8;

  const isNameNotEmpty = formValue.name.trim() !== "";
  const isEmailNotEmpty = formValue.email.trim() !== "";
  const isPasswordNotEmpty = formValue.password.trim() !== "";

  export {isNameValid, isEmailValid, isPasswordValid, isNameNotEmpty, isEmailNotEmpty, isPasswordNotEmpty   }
/*import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";
import image9 from "../images/9.jpg";
import image10 from "../images/10.jpg";
import image11 from "../images/11.jpg";
import image12 from "../images/12.jpg";
import image13 from "../images/13.jpg";
import image14 from "../images/14.jpg";
import image15 from "../images/15.jpg";
import image16 from "../images/16.jpg";

const moviesList = [
  {
    duration: "1ч42м",
    image: image1,
    movieId: 1,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image2,
    movieId: 2,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image3,
    movieId: 3,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image4,
    movieId: 4,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image5,
    movieId: 5,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image6,
    movieId: 6,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image7,
    movieId: 7,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image8,
    movieId: 8,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image9,
    movieId: 9,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image10,
    movieId: 10,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image11,
    movieId: 11,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image12,
    movieId: 12,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image13,
    movieId: 13,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image14,
    movieId: 14,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image15,
    movieId: 15,
    nameRU: "33 слова о дизайне",
  },
  {
    duration: "1ч42м",
    image: image16,
    movieId: 16,
    nameRU: "33 слова о дизайне",
  },
];

export { moviesList };
*/