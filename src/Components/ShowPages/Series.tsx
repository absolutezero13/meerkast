import { render } from "@testing-library/react";
import React from "react";
import "./MoviesAndSeries.css";
import ListShowItem from "../ListShowItem/ListShowItem";
import { getVisibleShows } from "../../Redux/Selector";
import { connect } from "react-redux";
import FilterShowItems from "../FilterShowItems/FilterShowItems";
import { State } from "../../Redux/Reducers";

const Series: React.FC<State> = (props) => {
  return (
    <div className="series">
      <FilterShowItems />
      <div className="series__items">
        {props.series.map((serie: any) => {
          return <ListShowItem key={serie.id} {...serie} />;
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
