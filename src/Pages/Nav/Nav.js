import React from "react";
import "./Nav.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import hamburgericon from "../Assets/images/nav/menu.png";
import vibraniumlogo from "../Assets/images/nav/vibranium.png";
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
          <img src={"/assets/logo.png"} alt="cpl logo" />
        </div>

        <div className="nav-links desktop-menu">
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/highestbids" end>
                Auction
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams">Teams</NavLink>
            </li>
            <li>
              <NavLink to="/schedules" end>
                Schedules
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/sponsors">Sponsors</NavLink>
            </li>
            <li></li>
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={closeHamburger}>
              <NavLink to="/auction">Auction</NavLink>
            </li>
            <li onClick={closeHamburger}>
              <NavLink to="/teams">Teams</NavLink>
            </li>
            <li onClick={closeHamburger}>
              <NavLink to="/schedules" end>
                Schedules
              </NavLink>
            </li>
            <li onClick={closeHamburger}>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="logo">
          <img style={{ height: "3vw" }} src={vibraniumlogo} alt="cpl logo" />
        </div>
      </div>
    </>
  );
};

export default Nav;
