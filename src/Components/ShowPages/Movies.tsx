import React from "react";
import "./MoviesAndSeries.css";
import ListShowItem from "../ListShowItem/ListShowItem";
import { getVisibleShows } from "../../Redux/Selector";
import { connect } from "react-redux";
import FilterShowItems from "../FilterShowItems/FilterShowItems";
import { State } from "../../Redux/Reducers";
import { Show } from "../../Redux/Reducers";

const Movies: React.FC<State> = (props) => {
  return (
    <div className="shows">
      <FilterShowItems />
      <div className="show__items">
        {props.movies.map((movie: Show) => {
          return <ListShowItem key={movie.title} {...movie} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    movies: getVisibleShows(state.movies, state.filters),
  };
};

export default connect(mapStateToProps)(Movies);
