import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";
import "./teamsDetails.css";
import { NavLink } from "react-router-dom";

// import img from "../Assets/images/teams/players/AadilRushnaiwala.png";

const Teamsdetails = () => {
  const { id } = useParams();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "2vw",
        backgroundColor: "#0B1D46",
      }}
      className="teams-D-wrapper"
    >
      <div className="teamDetailsWrapper">
        <NavLink to="/teams">{"<< "}Back</NavLink>
        <h1 className="teamName">{data[id].name}</h1>
        <div
          className="teamDcard"
          style={{ backgroundColor: data[id].cardColor }}
        >
          <div>
            <img id="team-logo" src={data[id].logo} alt={"logo"} />
          </div>
          <div className="teamDlines">
            <ul>
              <li>
                <span style={{ color: "#FFD600" }}>
                  MENTOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;
                </span>
                {data[id].mentor.toUpperCase()}
              </li>
              <li>
                <span style={{ color: "#FFD600" }}>
                  CAPTAIN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;
                </span>
                {data[id].captain.name.toUpperCase()}
              </li>
              <li>
                <span style={{ color: "#FFD600" }}>
                  V CAPTAIN &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                </span>
                {data[id].vcaptain.name.toUpperCase()}
              </li>
            </ul>
          </div>
        </div>

        <div className="topCardswrapper">
          <div
            className="playerCard"
            style={{ width: "20vw", border: "5px solid #FFD600" }}
          >
            <img style={{ height: "17vw" }} src={data[id].captain.img} alt="" />
            <p style={{ fontSize: "1.7vw" }}>
              {data[id].captain.name.toUpperCase()}
            </p>
            <p style={{ fontSize: "1.5vw", color: "#FFD600" }}>CAPTAIN</p>
            <p style={{ fontSize: "1vw" }}>
              {data[id].captain.course.toUpperCase()} - SEM{" "}
              {data[id].captain.sem}
            </p>
          </div>
          <div
            className="playerCard"
            style={{ width: "20vw", border: "5px solid #FFD600" }}
          >
            <img
              style={{ height: "17vw" }}
              src={data[id].vcaptain.img}
              alt=""
            />
            <p style={{ fontSize: "1.7vw" }}>
              {data[id].vcaptain.name.toUpperCase()}
            </p>
            <p style={{ fontSize: "1.5vw", color: "#FFD600" }}>VICE CAPTAIN</p>
            <p style={{ fontSize: "1vw" }}>
              {data[id].vcaptain.course.toUpperCase()} - SEM{" "}
              {data[id].vcaptain.sem}
            </p>
          </div>
        </div>

        <div className="playerCardswrapper">
          {data[id].players.map((item, index) => (
            <div className="playerCard" key={index}>
              <img src={item.img} alt="" />
              <p>{item.name.toUpperCase()}</p>
              <p style={{ fontSize: "1vw" }}>{item.course.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teamsdetails;
