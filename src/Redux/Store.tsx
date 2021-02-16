import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { moviesReducer, filterReducer, seriesReducer } from "./Reducers";
import thunk from "redux-thunk";
import authReducer from "./AuthReducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export const store = createStore(
  combineReducers({
    movies: moviesReducer,
    series: seriesReducer,
    filters: filterReducer,
    auth: authReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
