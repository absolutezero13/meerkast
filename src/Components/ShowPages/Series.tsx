import { render } from "@testing-library/react";
import React from "react";
import "./MoviesAndSeries.css";
import ListShowItem from "../ListShowItem/ListShowItem";
import { getVisibleShows } from "../../Redux/Selector";
import { connect } from "react-redux";
import FilterShowItems from "../FilterShowItems/FilterShowItems";
import { State } from "../../Redux/Reducers";
import Loader from "../Loader/Loader";
const Series: React.FC<State> = (props) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="shows">
      <FilterShowItems />
      <div className="show__items">
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
