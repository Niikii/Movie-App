import { combineReducers } from "redux";
import popularReducer from "./popularReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  movies: searchReducer,
  // popular: popularReducer,
});
