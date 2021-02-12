import { Shows } from "./Reducers";

export const getVisibleShows = (
  showData: Shows,
  { text, sortBy }: { text: string; sortBy: string }
): Shows => {
  return showData
    .filter((show) => {
      if (text.length >= 3) {
        const textMatch = show.title.toLowerCase().includes(text.toLowerCase());
        return textMatch;
      } else {
        return showData;
      }
    })
    .sort((a, b) => {
      if (sortBy === "ascending-year") {
        return a.releaseYear > b.releaseYear ? 1 : -1;
      } else if (sortBy === "descending-year") {
        return a.releaseYear < b.releaseYear ? 1 : -1;
      } else if (sortBy === "ascending-title") {
        return a.title > b.title ? 1 : -1;
      } else if (sortBy === "descending-title") {
        return a.title < b.title ? 1 : -1;
      } else {
        return 1;
      }
    });
};
