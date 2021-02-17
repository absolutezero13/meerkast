import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

const PublicRoute: React.FC<PrivateRoute> = ({
  isLoggedIn,
  component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isLoggedIn ? <Redirect to="/meerkast" /> : <Component {...props} />
      }
    />
  );
};
const mapStateToProps = (state: any) => ({
  isLoggedIn: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
