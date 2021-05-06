import React from "react";

import "../Styles.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-container">
      <img className="poster" src={movie.Poster} />
      <div className="movie-info">
        <p>Title: {movie.Title}</p>
        <p>Year: {movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
