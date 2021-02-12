import { Action } from "./Reducers";
export const setTextFilter = (text: string = ""): Action => ({
  type: "SET_TEXT_FILTER",
  text,
});
export const setSortByAscendingYear = (): Action => ({
  type: "SORT_BY_ASCENDING_YEAR",
});
export const setSortByDescendingYear = (): Action => ({
  type: "SORT_BY_DESCENDING_YEAR",
});
export const setSortByAscendingTitle = (): Action => ({
  type: "SORT_BY_ASCENDING_TITLE",
});
export const setSortByDescendingTitle = (): Action => ({
  type: "SORT_BY_DESCENDING_TITLE",
});
