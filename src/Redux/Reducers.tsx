import data from "../feed/sample.json"; // same with require (I guess)

// Data Interfaces
export interface Show {
  description: string;
  id: number;
  images: Images;
  programType: string;
  releaseYear: number;
  title: string;
}
interface Images {
  ["Poster Art"]: Poster;
}
interface Poster {
  url: string;
  width: number;
  height: number;
}
export interface Shows extends Array<Show> {}

export interface State {
  movies: Shows;
  series: Shows;
  filters: {
    text: string;
    sortBy: string;
  };
}
// Organizing Data
const getData = (typeOfProgram: string) =>
  data.entries
    .filter(
      (entry) =>
        entry.programType === typeOfProgram && entry.releaseYear >= 2010
    )
    .slice(0, 22)
    .sort((a, b) => {
      if (a.title === b.title) {
        return 0;
      }
      if (typeof a.title === typeof b.title) {
        return a.title < b.title ? -1 : 1;
      }
      return typeof a.title < typeof b.title ? -1 : 1;
    });
export const movieData: Shows = getData("movie").map((movie, i) => ({
  ...movie,
  id: i,
}));
export const serieData: Shows = getData("series").map((serie, i) => ({
  ...serie,
  id: i * 50,
}));
const moviesReducerDefaultState = [...movieData];
export const moviesReducer = (state: Object = moviesReducerDefaultState) => {
  return state;
};
const seriesReducerDefaultState = [...serieData];
export const seriesReducer = (state: Object = seriesReducerDefaultState) => {
  return state;
};
export type Action = {
  type: string;
  text?: string;
  sortBy?: string;
};
const filterReducersDefaultState = {
  text: "",
  sortBy: "",
};
export const filterReducer = (
  state: Object = filterReducersDefaultState,
  action: Action
): Object => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_ASCENDING_YEAR":
      return { ...state, sortBy: "ascending-year" };
    case "SORT_BY_DESCENDING_YEAR":
      return { ...state, sortBy: "descending-year" };
    case "SORT_BY_ASCENDING_TITLE":
      return { ...state, sortBy: "ascending-title" };
    case "SORT_BY_DESCENDING_TITLE":
      return { ...state, sortBy: "descending-title" };
    default:
      return state;
  }
};
