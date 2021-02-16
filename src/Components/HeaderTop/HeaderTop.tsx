import React from "react";
import "./HeaderTop.css";
import logo from "../../images/mirket.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../Redux/Auth";

interface headerProps {
  startLogout: () => {};
}
const HeaderTop: React.FC<headerProps> = ({ startLogout }) => {
  return (
    <div className="header-top">
      <img src={logo} />
      <Link to="/meerkast">
        <h1>Meerkast </h1>
      </Link>
      <div className="nav">
        <Link to="/">
          <button>Log in</button>
        </Link>

        <button onClick={startLogout}>Log out</button>
        <p>Start your Free trial</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(HeaderTop);
