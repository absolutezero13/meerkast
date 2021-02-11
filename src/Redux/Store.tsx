import { createStore, combineReducers } from "redux";
import { setTextFilter } from "./Actions";
import { moviesReducer, filterReducer, seriesReducer } from "./Reducers";
import { getVisibleShows } from "./Selector";

export const store = createStore(
  combineReducers({
    movies: moviesReducer,
    series: seriesReducer,
    filters: filterReducer,
  })
);

const state = store.getState();

console.log(getVisibleShows(state.series, state.filters));
