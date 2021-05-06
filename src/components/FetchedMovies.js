import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const FetchedMovies = (props) => {
  const { movies } = props;
  let content = "";

  content =
    movies.Response == "True"
      ? movies.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      : null;

  return <div className="fetched-movies">{content}</div>;
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(FetchedMovies);
