import React from "react";
import "./teams.css";
import { NavLink } from "react-router-dom";

const Teams = () => {
  return (
    <>
      <div className="auction-wrapper">
        {/* Auction Menu */}
        <div className="auction">
          <div className="auctionmenu">
            <h1>GUPL TEAMS | 2024</h1>
          </div>
        </div>
        {/* END of Auction menu */}

        {/* Teams Details */}
        <div className="teams">
          <div>
            <NavLink to="/teams/capitals">
              <img
                alt="capitals card"
                src={"/assets/teams/cards/capital_card.png"}
              />
            </NavLink>
            <NavLink to="/teams/indians">
              <img
                alt="indians card"
                src={"/assets/teams/cards/indians_card.png"}
              />
            </NavLink>
            <NavLink to="/teams/Kings_XI">
              <img
                alt="kings xi card"
                src={"/assets/teams/cards/kings_xi_card.png"}
              />
            </NavLink>
            <NavLink to="/teams/KnightRiders">
              <img
                alt="knights card"
                src={"/assets/teams/cards/knights_card.png"}
              />
            </NavLink>
            <NavLink to="/teams/Royal_Challengers">
              <img
                alt="Royal_Challengers card"
                src={"/assets/teams/cards/royal_challengers_card.png"}
              />
            </NavLink>
            <NavLink to="/teams/Royals">
              <img
                alt="Royals card"
                src={"/assets/teams/cards/royals_card.png"}
              />
            </NavLink>
            <NavLink to="/teams/Sunrisers">
              <img
                alt="Sunrisers card"
                src={"/assets/teams/cards/sunrisers_card.png"}
              />
            </NavLink>
            <NavLink to="/teams/Super_giants">
              <img
                alt="Super_giants card"
                src={"/assets/teams/cards/supergiants_card.png"}
              />
            </NavLink>
            <NavLink to="/teams/Super_Kings">
              <img
                alt="Super_Kings card"
                src={"/assets/teams/cards/superkings_card.png"}
              />
            </NavLink>
            <NavLink to="/teams/Titans">
              <img
                alt="Titans card"
                src={"/assets/teams/cards/titans_card.png"}
              />
            </NavLink>
          </div>

          {/* <NavLink to="/teams/indians">
            <div style={{ backgroundColor: "#133266" }} className="Team-box">
              <div style={{ backgroundColor: "#2d6ab1" }} className="bgbox">
                <img src={"/assets/teams/Indians.png"} alt="capitals" />
              </div>
              <h2>INDIANS</h2>
            </div>
          </NavLink>
          <NavLink to="/teams/Kings_XI">
            <div style={{ backgroundColor: "#283766" }} className="Team-box">
              <div style={{ backgroundColor: "#d71920" }} className="bgbox">
                <img src={"/assets/teams/Kings_XI.png"} alt="capitals" />
              </div>
              <h2>KINGS XI</h2>
            </div>
          </NavLink>

          <NavLink to="/teams/KnightRiders">
            <div style={{ backgroundColor: "#271f4a" }} className="Team-box">
              <div style={{ backgroundColor: "#ecc542" }} className="bgbox">
                <img src={"/assets/teams/Knight_Riders.png"} alt="KNIGHTS" />
              </div>
              <h2>KNIGHT RIDERS</h2>
            </div>
          </NavLink>

          <NavLink to="/teams/Royal_Challengers">
            <div style={{ backgroundColor: "#601f23" }} className="Team-box">
              <div style={{ backgroundColor: "#2b2a29" }} className="bgbox">
                <img
                  src={"/assets/teams/Royal_Challengers.png"}
                  alt="capitals"
                />
              </div>
              <h2>ROYAL CHALLENGERS</h2>
            </div>
          </NavLink>
          <NavLink to="/teams/Royals">
            <div style={{ backgroundColor: "#043268" }} className="Team-box">
              <div style={{ backgroundColor: "#eb83b5" }} className="bgbox">
                <img src={"/assets/teams/Royals.png"} alt="capitals" />
              </div>
              <h2>Royals</h2>
            </div>
          </NavLink>
          <NavLink to="/teams/Sunrisers">
            <div style={{ backgroundColor: "#702324" }} className="Team-box">
              <div style={{ backgroundColor: "#f26522" }} className="bgbox">
                <img src={"/assets/teams/Sunrisers.png"} alt="capitals" />
              </div>
              <h2>SUNRISERS</h2>
            </div>
          </NavLink>
          <NavLink to="/teams/Super_giants">
            <div style={{ backgroundColor: "#0248bc" }} className="Team-box">
              <div style={{ backgroundColor: "#ffffff" }} className="bgbox">
                <img src={"/assets/teams/Super_giants.png"} alt="capitals" />
              </div>
              <h2>SUPER GIANTS</h2>
            </div>
          </NavLink>
          <NavLink to="/teams/Super_Kings">
            <div style={{ backgroundColor: "#021934" }} className="Team-box">
              <div style={{ backgroundColor: "#ffcb05" }} className="bgbox">
                <img src={"/assets/teams/Super_Kings.png"} alt="capitals" />
              </div>
              <h2>SUPER KINGS</h2>
            </div>
          </NavLink>
          <NavLink to="/teams/Titans">
            <div style={{ backgroundColor: "#242937" }} className="Team-box">
              <div style={{ backgroundColor: "#77c7f2" }} className="bgbox">
                <img
                  style={{ height: "10vw", marginTop: "2vw" }}
                  src={"/assets/teams/Titans.png"}
                  alt="capitals"
                />
              </div>
              <h2>TITANS</h2>
            </div>
          </NavLink> */}
        </div>
        {/* End of Teams Details */}
      </div>
    </>
  );
};

export default Teams;
