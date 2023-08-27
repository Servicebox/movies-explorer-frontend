// import App from "./App.css";
// import { useEffect, useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "../Movies/Preloader/Preloader";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from '../NotFound/NotFound';
// import { Context } from "../../contexts/CurrentUserContext";

function App() {

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header />
                <Register />
              </>
            }
          />
        </Routes>
    </div>
    </Router>
  );
}
export default App;