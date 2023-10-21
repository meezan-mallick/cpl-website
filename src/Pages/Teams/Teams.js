import React from "react";
import blasters from "../Assets/images/teams/blasters.png";
import falcons from "../Assets/images/teams/falcons.png";
import hurricanes from "../Assets/images/teams/hurricaneslogo.png";
import panther from "../Assets/images/teams/panther.png";
import royals from "../Assets/images/teams/royals.png";
import stars from "../Assets/images/teams/start.png";
import strikers from "../Assets/images/teams/strikers.png";
import super_kings from "../Assets/images/teams/super kings.png";
import empire from "../Assets/images/teams/empire.png";
import knights from "../Assets/images/teams/the knights.png";
import titans from "../Assets/images/teams/titans.png";
import wolves from "../Assets/images/teams/wolves.png";
import "./teams.css";

const Teams = () => {
  return (
    <>
      <div className="auction-wrapper">
        {/* Auction Menu */}
        <div className="auction">
          <div className="auctionmenu">
            <h1>CPL TEAMS | 2023</h1>
          </div>
        </div>
        {/* END of Auction menu */}

        {/* Teams Details */}
        <div className="teams">
          <div style={{ backgroundColor: "#283665" }} className="Team-box">
            <div style={{ backgroundColor: "#CB2031" }} className="bgbox">
              <img src={knights} alt="KNIGHTS" />
            </div>
            <h2>KNIGHTS</h2>
          </div>

          <div style={{ backgroundColor: "#005D96" }} className="Team-box">
            <div
              style={{ backgroundColor: "#E0EDFF" }}
              className="bgbox secImg"
            >
              <img
                className="hurricanes-logo"
                src={hurricanes}
                alt="hurricanes"
              />
            </div>
            <h2>HURRICANES</h2>
          </div>
          <div style={{ backgroundColor: "#011847" }} className="Team-box">
            <div style={{ backgroundColor: "#DE2C26" }} className="bgbox">
              <img src={empire} alt="EMPIRE" />
            </div>
            <h2>EMPIRE</h2>
          </div>
          <div style={{ backgroundColor: "#5E2B88" }} className="Team-box">
            <div style={{ backgroundColor: "#DCF73B" }} className="bgbox">
              <img src={royals} alt="ROYALS" />
            </div>
            <h2>ROYALS</h2>
          </div>
          <div style={{ backgroundColor: "#9C2221" }} className="Team-box">
            <div
              style={{ backgroundColor: "#452929" }}
              className="bgbox secImg"
            >
              <img className="hurricanes-logo" src={blasters} alt="BLASTERS" />
            </div>
            <h2>BLASTERS</h2>
          </div>
          <div style={{ backgroundColor: "#03346E" }} className="Team-box">
            <div
              style={{ backgroundColor: "#ECF9FF" }}
              className="bgbox secImg"
            >
              <img className="hurricanes-logo" src={stars} alt="STARS" />
            </div>
            <h2>STARS</h2>
          </div>
          <div style={{ backgroundColor: "#DB8216" }} className="Team-box">
            <div
              style={{ backgroundColor: "#E8E9FF" }}
              className="bgbox secImg panther"
            >
              <img className="panther-logo" src={panther} alt="PANTHERS" />
            </div>
            <h2>PANTHERS</h2>
          </div>
          <div style={{ backgroundColor: "#DE2C26" }} className="Team-box">
            <div style={{ backgroundColor: "#FCFFEB" }} className="bgbox">
              <img src={falcons} alt="FALCONS" />
            </div>
            <h2>FALCONS</h2>
          </div>
          <div style={{ backgroundColor: "#60241B" }} className="Team-box">
            <div
              style={{ backgroundColor: "#77C7F2" }}
              className="bgbox secImg"
            >
              <img className="hurricanes-logo" src={titans} alt="TITANS" />
            </div>
            <h2>TITANS</h2>
          </div>
          <div style={{ backgroundColor: "#A01F23" }} className="Team-box">
            <div
              style={{ backgroundColor: "#E88A19" }}
              className="bgbox secImg"
            >
              <img className="hurricanes-logo" src={strikers} alt="STRIKERS" />
            </div>
            <h2>STRIKERS</h2>
          </div>
          <div style={{ backgroundColor: "#19398A" }} className="Team-box">
            <div style={{ backgroundColor: "#DADADA" }} className="bgbox">
              <img src={super_kings} alt="SUPER KINGS" />
            </div>
            <h2>SUPER KINGS</h2>
          </div>
          <div style={{ backgroundColor: "#D3910E" }} className="Team-box">
            <div style={{ backgroundColor: "#FCFFEB " }} className="bgbox">
              <img  src={wolves} alt="WOLVES" />
            </div>
            <h2>WOLVES 11</h2>
          </div>
        </div>
        {/* End of Teams Details */}
      </div>
    </>
  );
};

export default Teams;
