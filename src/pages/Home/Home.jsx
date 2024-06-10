// import React from 'react'
import { Helmet } from "react-helmet";

// Components
import PopularMovies from "./PopularMovies";
import LastAddedMovies from "./LastAddedMovies";
import FilterMovies from "./FilterMovies";
import HomeFooter from "../../components/Footer/HomeFooter";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HDFilmcehennemi | Film izle | HD Film izle</title>
      </Helmet>
      <PopularMovies />
      <section className="main-content">
        <div className="container">
          <div className="content-row">
            <LastAddedMovies />
            <FilterMovies />
          </div>
        </div>
      </section>
      <HomeFooter />
    </>
  );
};

export default Home;
