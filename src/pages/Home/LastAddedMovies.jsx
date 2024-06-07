// import React from 'react'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// data
import { movies } from "../../data";

// Images
import flag from "../../assets/icons/dublaj.webp";

// Icons
import {
  FaUpload,
  FaArrowRight,
  FaRegClosedCaptioning,
  FaCalendarAlt,
  FaRegPlayCircle,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const LastAddedMovies = () => {
  // show Data
  const [num, setNum] = useState(20);

  return (
    <div className="incontent">
      <div className="title">
        <h5 className="head">
          <FaUpload className="icon" />
          Son Eklenen Filmler
        </h5>
        <Link to="/" className="see-all">
          <FaArrowRight className="icon" />
          Tümünü Gör
        </Link>
      </div>
      <div className="content-movies">
        {movies
          .map((movie) => (
            <div className="list-movie" key={movie.id}>
              <div className="movie-box">
                <div className="year">
                  <FaCalendarAlt className="icon" /> {movie.releaseYear}
                </div>
                <div className="rating">
                  <FaStar className="icon" /> {movie.rating}
                </div>
                <Link to="/" className="poster">
                  <div className="overlay"></div>
                  <div className="scale"></div>
                  <img src={movie.image} alt="" />
                  <div className="play-btn">
                    <FaRegPlayCircle className="icon" />
                  </div>
                </Link>
                <div className="about">
                  <Link to="/" className="name">
                    {movie.name}
                  </Link>
                  <div className="language">
                    <img src={flag} alt="" />
                    <FaRegClosedCaptioning className="icon" />
                    <span>Dublaj & Altyazı</span>
                  </div>
                </div>
              </div>
            </div>
          ))
          .slice(0, num)}
      </div>
      <div className="pagination">
        <Link to="/" className="arrow-btn">
          «
        </Link>
        <NavLink to="/" className="num" onClick={() => setNum(num + 5)}>
          1
        </NavLink>
        <NavLink to="/2" className="num">
          2
        </NavLink>
        <NavLink to="/3" className="num">
          3
        </NavLink>
        <NavLink to="/4" className="num">
          4
        </NavLink>
        <Link to="" className="arrow-btn">
          »
        </Link>
        <Link to="" className="arrow-btn">
          Son »
        </Link>
      </div>
    </div>
  );
};

export default LastAddedMovies;
