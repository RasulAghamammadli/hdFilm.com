// import React from 'react'
import { Helmet } from "react-helmet";

// Components
import PopularMovies from "./PopularMovies";
import LastAddedMovies from "./LastAddedMovies";

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
            {/* <div className="muveqqqq" style={{ color: "#fff", width: "250px" }}>
              Akula necəsən? <br />
              Tələsmə burda Filterləmə olacaq.
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
