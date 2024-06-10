// import React from 'react'
import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// data
import { movies } from "../../data";

// Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import flag from "../../assets/icons/dublaj.webp";

// Icons
import {
  FaRegClosedCaptioning,
  FaCalendarAlt,
  FaRegPlayCircle,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const PopularMovies = () => {
  // react slick
  let sliderRef = useRef(null);

  // settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 9000,

    // breakpoints
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 448,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="popular-movies">
      <div className="container">
        <div className="carousel-inner">
          <div className="slider-container">
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
              {movies
                .map((movie) => (
                  <div className="movie-box" key={movie.id} ref={sliderRef}>
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
                ))
                .slice(0, 24)}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularMovies;
