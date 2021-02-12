import React from "react";
import "./MoviesAndSeries.css";
import ListShowItem from "../ListShowItem/ListShowItem";
import { getVisibleShows } from "../../Redux/Selector";
import { connect } from "react-redux";
import FilterShowItems from "../FilterShowItems/FilterShowItems";
import { State } from "../../Redux/Reducers";
import { setTimeout } from "timers";

const Movies: React.FC<State> = (props) => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return (
      <div className="loading">
        <p> Your shows are loading..</p>
        <div className="loader"></div>
      </div>
    );
  } else {
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
  }
};

const mapStateToProps = (state: State) => {
  return {
    movies: getVisibleShows(state.movies, state.filters),
  };
};

export default connect(mapStateToProps)(Movies);
