import { createStore, combineReducers } from "redux";
import { moviesReducer, filterReducer, seriesReducer } from "./Reducers";

export const store = createStore(
  combineReducers({
    movies: moviesReducer,
    series: seriesReducer,
    filters: filterReducer,
  })
);
