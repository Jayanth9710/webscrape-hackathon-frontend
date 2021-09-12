import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <div className="input-group" id="nav">
        <Link to="/amzn">
          <a className="nav-link collapsed">
            <i className="fas fa-fw fa-cog"></i>
            {/* <span>Amazon</span> */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" className="amznlogo"/>
          </a>
        </Link>
        <Link to="/flip">
          <a className="nav-link collapsed">
            <i className="fas fa-fw fa-cog"></i>
            {/* <span>Flipkart</span> */}
            <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png" className="fliplogo"/>
          </a>
        </Link>
        <Link to="/">
          <a className="nav-link collapsed">
            <i className="fas fa-fw fa-cog"></i>
            <span>Home</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Topbar;