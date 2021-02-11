import React from "react";
import { connect } from "react-redux";
const ListShowItem: React.FC = (props: any) => {
  return (
    <div>
      <img alt={props.title} src={props.images["Poster Art"].url} />
      <p>{props.title}</p>
    </div>
  );
};

export default connect()(ListShowItem);
