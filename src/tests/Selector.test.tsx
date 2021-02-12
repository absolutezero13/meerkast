import { getVisibleShows } from "../Redux/Selector";
import { testShowData } from "../fixtures/testShowData";
test("should sort by ascending year", () => {
  const filters = {
    text: "",
    sortBy: "ascending-year",
  };
  const result = getVisibleShows(testShowData, filters);
  expect(result).toEqual([
    testShowData[2],
    testShowData[1],
    testShowData[3],
    testShowData[0],
  ]);
});
test("should sort by descending year", () => {
  const filters = {
    text: "",
    sortBy: "descending-year",
  };
  const result = getVisibleShows(testShowData, filters);
  expect(result).toEqual([
    testShowData[0],
    testShowData[3],
    testShowData[1],
    testShowData[2],
  ]);
});
test("should sort by descending title", () => {
  const filters = {
    text: "",
    sortBy: "descending-title",
  };
  const result = getVisibleShows(testShowData, filters);
  expect(result).toEqual([
    testShowData[2],
    testShowData[1],
    testShowData[3],
    testShowData[0],
  ]);
});
test("should sort by ascending title", () => {
  const filters = {
    text: "",
    sortBy: "ascending-title",
  };
  const result = getVisibleShows(testShowData, filters);
  expect(result).toEqual([
    testShowData[0],
    testShowData[3],
    testShowData[1],
    testShowData[2],
  ]);
});
