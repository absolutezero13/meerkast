import { render } from "@testing-library/react";
import React from "react";
import "./MoviesAndSeries.css";
import ListShowItem from "./ListShowItem";
import { getVisibleShows } from "../Redux/Selector";
import { connect } from "react-redux";
import FilterShowItems from "./FilterShowItems";
const Movies: React.FC = (props: any) => {
  return (
    <div className="movies">
      <FilterShowItems />
      <div className="movies__items">
        {props.movies.map((movie: any) => {
          return <ListShowItem key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    movies: getVisibleShows(state.movies, state.filters),
  };
};

export default connect(mapStateToProps)(Movies);
