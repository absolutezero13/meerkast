import React from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { Show } from "../../Redux/Reducers";
import ErrorPage from "../ErrorPage/ErrorPage";
const ListShowItem: React.FC<Show> = (props) => {
  const [link, setLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [throwError, setErrorStatus] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get(props.images["Poster Art"].url)
      .then((res) => {
        setLink(props.images["Poster Art"].url);
        setLoading(false);
      })
      .catch((error) => {
        setErrorStatus(true);
      });
  }, []);
  if (throwError) {
    return <ErrorPage />;
  }
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

export default ListShowItem;
