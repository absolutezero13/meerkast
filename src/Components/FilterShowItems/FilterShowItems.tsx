import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  setSortByAscendingTitle,
  setSortByAscendingYear,
  setSortByDescendingTitle,
  setSortByDescendingYear,
} from "../../Redux/Actions";
import "./FilterShowItems.css";

const FilterShowItems: React.FC = (props: any) => {
  return (
    <div className="filter-show-items">
      <input
        placeholder="Search Shows.."
        type="search"
        value={props.filters.text}
        onChange={(e) => props.dispatch(setTextFilter(e.target.value))}
      />
      <select
        onChange={(e) => {
          if (e.target.value === "ascending-year") {
            props.dispatch(setSortByAscendingYear());
          } else if (e.target.value === "descending-year") {
            props.dispatch(setSortByDescendingYear());
          } else if (e.target.value === "ascending-title") {
            props.dispatch(setSortByAscendingTitle());
          } else if (e.target.value === "descending-title") {
            props.dispatch(setSortByDescendingTitle());
          }
        }}
      >
        <option defaultValue="nothing" value="nothing">
          Sort By
        </option>
        <option value="ascending-year">Year (ascending)</option>
        <option value="descending-year">Year (descending)</option>
        <option value="ascending-title">Title (ascending)</option>
        <option value="descending-title">Title (descending)</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(FilterShowItems);
