import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import PageNotFound from "../../navbar/Pagenotfound";
import Logo from "../../assets/IMAGES/logo.jpeg";
import CustomerHome from "./Customer-Home";
import "../../navbar/css/navbar.css";

function CustomerNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Clear login state
    navigate("/");
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container1-fluid">
            <ul className="nav navbar-nav">
              <li>
                <span className="logo-mobile hide-in-mobile">
                  <img src={Logo} height="55px" width="65px" alt="Logo" />
                </span>
              </li>
              <li>
                <Link to="/customerHome">XperienceAuto</Link>
              </li>
            </ul>
            <button
              type="button"
              className="navbar-toggle right"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/customerHome">
                    <i className="fas fa-home"></i> HOME
                  </Link>
                </li>
                <li>
                  <Link to="/customerSpare">
                    <i className="fas fa-shopping-cart"></i>&nbsp;PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link to="/customerServiceReq">
                    <i className="fas fa-cogs"></i>&nbsp;SERVICES
                  </Link>
                </li>
                <li>
                  <Link to="/viewmyrequests">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    &nbsp;MY REQUESTS
                  </Link>
                </li>
                  <li className="user-dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fas fa-user-circle"></i>&nbsp;&nbsp;cname
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/customerProfile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/customerHome" element={<CustomerHome />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default CustomerNavbar;
