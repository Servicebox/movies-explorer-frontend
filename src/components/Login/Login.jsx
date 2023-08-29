import { Link } from "react-router-dom";
import"./Login.css";

function Login (){
  return(
    <section className="login">
      <form className="login__form form">
        <div className="login__form_tag form_tag">E-mail</div>
        <input className="login__form_input form_input"></input>
        <div className="login__form_tag form_tag">Пароль</div>
        <input className="login__form_input form_input"></input>
        <span className="login__form_span-error form_span-error"></span>
        <button className="login__form_button form_button" type="button">
          Войти
        </button>
        <span className="login__form_span-link form_span-link">Ещё не зарегистрированы?
        <Link className="login__form_link form_link"
      type="link"
      to="/signup">Регистрация</Link></span>
      </form>
    </section>
  )
}

export default Login;