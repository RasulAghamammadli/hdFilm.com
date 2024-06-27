// import React from 'react'

// Components
import Categories from "./Categories";
import MovieRobot from "./MovieRobot";
import Years from "./Years";

const FilterMovies = () => {
  return (
    <div className="filter-movies">
      <MovieRobot />
      <Categories />
      <Years />
    </div>
  );
};

export default FilterMovies;
