import React from "react";
import { connect } from "react-redux";

interface PosterArt {
  url: string;
}
interface ListShowItemProps {
  title: string;
  images: {
    ["Poster Art"]: PosterArt;
  };
}
const ListShowItem: React.FC<ListShowItemProps> = (props) => {
  return (
    <div>
      <img alt={props.title} src={props.images["Poster Art"].url} />
      <p>{props.title}</p>
    </div>
  );
};

export default connect()(ListShowItem);
