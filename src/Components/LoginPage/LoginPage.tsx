import React from "react";
import "./LoginPage.css";
import { connect } from "react-redux";
import { startLogin, startLoginFacebook } from "../../Redux/Auth";
import SignIn from "../SingIn/SignIn";
import signWithGoogle from "../../images/signGoogle.png";
import facebookLogin from "../../images/facebookLogin.png";
interface loginProps {
  startLogin: any;
  startLoginFacebook: any;
}
const LoginPage: React.FC<loginProps> = ({
  startLogin,
  startLoginFacebook,
}) => {
  return (
    <div className="body login">
      <img
        src={signWithGoogle}
        onClick={startLogin}
        className="login-btn"
        alt="login with google"
      />
      <img
        src={facebookLogin}
        onClick={startLoginFacebook}
        className="login-btn"
        alt="login with facebook"
      />
      <p>Or Sign In</p>
      <SignIn />
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  startLogin: () => dispatch(startLogin()),
  startLoginFacebook: () => dispatch(startLoginFacebook()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
