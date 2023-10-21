import React from "react";
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/nav/logo.png";
import hamburgericon from "../Assets/images/nav/menu.png";
import closeicon from "../Assets/images/nav/closeicon.png";
import { useEffect } from "react";
const Nav = () => {
  const [State, setState] = useState(false);

  useEffect(() => {
    if (State) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [State]);

  const toggleMenu = () => {
    setState(!State);
  };

  const closeHamburger = () => {
    setState(false);
  };
  const navClass = State ? "visible" : "hidden";
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="cpl logo" />
        </div>

        <div className="nav-links desktop-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auction">Auction</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu nav-links">
          <div
            className="hamburger"
            onClick={() => {
              toggleMenu();
            }}
          >
            <img className="hamburgericon" src={hamburgericon} alt="cpl logo" />
          </div>
        </div>
        <div id="mobile-nav" className={`menu-mobile ${navClass}`}>
          <div
            className="hamburger"
            onClick={() => {
              toggleMenu();
            }}
          >
            <img className="closeicon" src={closeicon} alt="cpl logo" />
          </div>
          <ul>
            <li onClick={closeHamburger}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeHamburger}>
              <Link to="/auction">Auction</Link>
            </li>
            <li onClick={closeHamburger}>
              <Link to="/teams">Teams</Link>
            </li>
            <li onClick={closeHamburger}>
              <Link to="/">Dashboard</Link>
            </li>
            <li onClick={closeHamburger}>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
