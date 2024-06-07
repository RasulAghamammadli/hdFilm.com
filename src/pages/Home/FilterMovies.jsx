// import React from 'react'

// Components
import Categories from "../../components/Filter/Categories";
import MovieRobot from "../../components/Filter/MovieRobot";
import Years from "../../components/Filter/Years";

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
