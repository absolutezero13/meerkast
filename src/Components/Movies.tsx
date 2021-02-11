import { render } from "@testing-library/react";
import React from "react";
import "./MoviesAndSeries.css";
import ListShowItem from "./ListShowItem";
import { getVisibleShows } from "../Redux/Selector";
import { connect } from "react-redux";

const Movies: React.FC = (props: any) => {
  return (
    <div className="movies">
      {props.movies.map((movie: any) => {
        return <ListShowItem key={Math.random()} {...movie} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    movies: getVisibleShows(state.movies, state.filters),
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(Movies);
