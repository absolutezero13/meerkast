import { Shows } from "../Redux/Reducers";
// Dummy data for Tests
export const testShowData: Shows = [
  {
    title: "A new film",
    id: 9999,
    description: "Lorem",
    programType: "movie",
    images: {
      "Poster Art": {
        url:
          "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2020,
  },
  {
    title: "Saw",
    id: 998,
    description: "Lorem",
    programType: "movie",
    images: {
      "Poster Art": {
        url:
          "https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2004,
  },
  {
    title: "South Park",
    id: 997,
    description: "Lorem",
    programType: "series",
    images: {
      "Poster Art": {
        url:
          "https://streamcoimg-a.akamaihd.net/000/117/25/11725-PosterArt-deecf8dbd786dfa2d964413b0bf83726.jpg",
        width: 720,
        height: 1080,
      },
    },
    releaseYear: 1997,
  },
  {
    title: "Breaking Bad",
    id: 995,
    description: "Lorem",
    programType: "series",
    images: {
      "Poster Art": {
        url:
          "https://streamcoimg-a.akamaihd.net/000/175/7/1757-PosterArt-fc0e2a5b18d4a662717f3cbb1827871d.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2008,
  },
];
