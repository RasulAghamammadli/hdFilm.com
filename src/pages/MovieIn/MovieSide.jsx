// import React from 'react'

// Components
import CommentContent from "./CommentContent";
import ExtraContent from "./ExtraContent";
import SingleContent from "./SingleContent";

const MovieSide = () => {
  return (
    <div className="movie-side">
      <SingleContent />
      <ExtraContent />
      <CommentContent />
    </div>
  );
};

export default MovieSide;
