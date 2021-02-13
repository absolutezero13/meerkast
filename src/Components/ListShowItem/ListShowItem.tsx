import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { Show } from "../../Redux/Reducers";

const ListShowItem: React.FC<Show> = (props) => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    axios.get(props.images["Poster Art"].url).then((res) => {
      setLink(props.images["Poster Art"].url);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <img alt={props.title} src={link} />
      <p>{props.title}</p>
    </div>
  );
};

export default connect()(ListShowItem);
