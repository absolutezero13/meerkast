export const setTextFilter = (text: string = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
export const setSortByAscendingYear = () => ({
  type: "SORT_BY_ASCENDING_YEAR",
});
export const setSortByDescendingYear = () => ({
  type: "SORT_BY_DESCENDING_YEAR",
});
export const setSortByAscendingTitle = () => ({
  type: "SORT_BY_ASCENDING_TITLE",
});
export const setSortByDescendingTitle = () => ({
  type: "SORT_BY_DESCENDING_TITLE",
});
