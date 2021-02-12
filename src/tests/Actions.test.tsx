import {
  setTextFilter,
  setSortByAscendingTitle,
  setSortByAscendingYear,
  setSortByDescendingTitle,
  setSortByDescendingYear,
} from "../Redux/Actions";

test("Should change the text value to the passing parameter", () => {
  expect(setTextFilter("hunger")).toEqual({
    type: "SET_TEXT_FILTER",
    text: "hunger",
  });
});

test("Should change the sortby value to ascending title", () => {
  expect(setSortByAscendingTitle()).toEqual({
    type: "SORT_BY_ASCENDING_TITLE",
  });
});

test("Should change the sortby value to descending title", () => {
  expect(setSortByDescendingTitle()).toEqual({
    type: "SORT_BY_DESCENDING_TITLE",
  });
});

test("Should change the sortby value to ascending year", () => {
  expect(setSortByAscendingYear()).toEqual({
    type: "SORT_BY_ASCENDING_YEAR",
  });
});

test("Should change the sortby value to descending year", () => {
  expect(setSortByDescendingYear()).toEqual({
    type: "SORT_BY_DESCENDING_YEAR",
  });
});
