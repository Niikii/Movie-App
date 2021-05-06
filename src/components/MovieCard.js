import React from "react";

import "../Styles.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-container">
      <img className="poster" src={movie.Poster} />
      <div className="movie-info">
        <spam>Title: {movie.Title}</spam>
        <spam>Year: {movie.Year}</spam>
      </div>
    </div>
  );
};

export default MovieCard;
