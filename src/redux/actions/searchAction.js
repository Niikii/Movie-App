import { SEARCH_MOVIE, FETCH_MOVIES } from "./types";
import axios from "axios";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?s=${text}&apikey=65726dd8`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch((err) => console.log(err));
};
