// import React from 'react'
import { Helmet } from "react-helmet";

// Components
import PopularMovies from "./PopularMovies";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HDFilmcehennemi | Film izle | HD Film izle</title>
      </Helmet>
      <PopularMovies />
    </>
  );
};

export default Home;
