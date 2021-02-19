import React, { useState } from "react";
import "./HeaderTop.css";
import logo from "../../images/mirket.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../Redux/Auth";
import { firebase } from "../../firebase/firebase";

interface headerProps {
  startLogout: () => {};
}
const HeaderTop: React.FC<headerProps> = ({ startLogout }) => {
  const [isLoggedIn, setLoginStatus] = useState<boolean>(false);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  });
  return (
    <div className="header-top">
      <img src={logo} />
      <Link to="/">
        <h1>Meerkast </h1>
      </Link>
      <div className="nav">
        {!isLoggedIn && (
          <Link to="/">
            <button>Log in</button>
          </Link>
        )}

        {isLoggedIn && <button onClick={startLogout}>Log out</button>}
        <p>Start your Free trial</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(HeaderTop);
