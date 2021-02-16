import React from "react";
import "./LoginPage.css";
import { connect } from "react-redux";
import { startLogin } from "../../Redux/Auth";

interface loginProps {
  startLogin: any;
}
const LoginPage: React.FC<loginProps> = ({ startLogin }) => {
  return (
    <div className="body">
      <button onClick={startLogin} className="login-btn">
        Log in with Google
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
