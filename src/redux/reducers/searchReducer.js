import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_POPULAR } from "../actions/types";

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
  popular: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}
