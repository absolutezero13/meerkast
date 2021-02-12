import {
  filterReducer,
  moviesReducer,
  seriesReducer,
  movieData,
  serieData,
} from "../Redux/Reducers";

test("should set up filters to default values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "",
  });
});
test("should set up filters to default values", () => {
  const state = filterReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "saw",
  });
  expect(state).toEqual({
    text: "saw",
    sortBy: "",
  });
});
test("should set sort by to ascending year", () => {
  const state = filterReducer(undefined, {
    type: "SORT_BY_ASCENDING_YEAR",
  });
  expect(state).toEqual({
    text: "",
    sortBy: "ascending-year",
  });
});
test("should set sort by to descending year", () => {
  const state = filterReducer(undefined, {
    type: "SORT_BY_DESCENDING_YEAR",
  });
  expect(state).toEqual({
    text: "",
    sortBy: "descending-year",
  });
});

test("should set sort by to ascending title", () => {
  const state = filterReducer(undefined, {
    type: "SORT_BY_ASCENDING_TITLE",
  });
  expect(state).toEqual({
    text: "",
    sortBy: "ascending-title",
  });
});
test("should set sort by to descending title", () => {
  const state = filterReducer(undefined, {
    type: "SORT_BY_DESCENDING_TITLE",
  });
  expect(state).toEqual({
    text: "",
    sortBy: "descending-title",
  });
});

test("should set up filters to default values", () => {
  const state = moviesReducer(movieData);
  expect(state).toEqual([...movieData]);
});
test("should set up filters to default values", () => {
  const state = moviesReducer(serieData);
  expect(state).toEqual([...serieData]);
});
