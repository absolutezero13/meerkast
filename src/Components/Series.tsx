import { render } from "@testing-library/react";
import React from "react";
import "./MoviesAndSeries.css";
import ListShowItem from "./ListShowItem";
import { getVisibleShows } from "../Redux/Selector";
import { connect } from "react-redux";

const Series: React.FC = (props: any) => {
  return (
    <div className="series">
      {props.series.map((serie: any) => {
        return <ListShowItem key={Math.random()} {...serie} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    series: getVisibleShows(state.series, state.filters),
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(Series);
