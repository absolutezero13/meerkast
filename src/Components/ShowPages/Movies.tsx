import React from "react";
import "./MoviesAndSeries.css";
import ListShowItem from "../ListShowItem/ListShowItem";
import { getVisibleShows } from "../../Redux/Selector";
import { connect } from "react-redux";
import FilterShowItems from "../FilterShowItems/FilterShowItems";
import { State } from "../../Redux/Reducers";
import { setTimeout } from "timers";
import Loader from "../Loader/Loader";

const Movies: React.FC<State> = (props) => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="shows">
        <FilterShowItems />
        <div className="show__items">
          {props.movies.map((movie: any) => {
            return <ListShowItem key={movie.id} {...movie} />;
          })}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state: State) => {
  return {
    movies: getVisibleShows(state.movies, state.filters),
  };
};

export default connect(mapStateToProps)(Movies);
