import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export interface PrivateRoute {
  isLoggedIn: boolean;
  path: string;
  component: any;
  exact: boolean;
}

const PrivateRoute: React.FC<PrivateRoute> = ({
  isLoggedIn,
  component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
const mapStateToProps = (state: any) => ({
  isLoggedIn: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
