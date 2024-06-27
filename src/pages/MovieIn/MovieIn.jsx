// import React from 'react'
import { Helmet } from "react-helmet";

// Components
import FilterMovies from "../../components/Filter/FilterMovies";
import MovieSide from "./MovieSide";

const MovieIn = () => {
  return (
    <>
      <Helmet>
        <title>Film adı | HDFilmcehennemi | Film izle | HD Film izle</title>
      </Helmet>
      <section className="movie-in">
        <div className="container">
          <div className="movie-content">
            <MovieSide />
            <FilterMovies />
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieIn;
