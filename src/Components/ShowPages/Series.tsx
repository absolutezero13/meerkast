import React from "react";
import "./MoviesAndSeries.css";
import ListShowItem from "../ListShowItem/ListShowItem";
import { getVisibleShows } from "../../Redux/Selector";
import { connect } from "react-redux";
import FilterShowItems from "../FilterShowItems/FilterShowItems";
import { State, Show } from "../../Redux/Reducers";

const Series: React.FC<State> = (props) => {
  return (
    <div className="shows">
      <FilterShowItems placeholder={"series"} />
      <div className="show__items">
        {props.series.map((serie: Show) => {
          return <ListShowItem key={serie.title} {...serie} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    series: getVisibleShows(state.series, state.filters),
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(Series);
