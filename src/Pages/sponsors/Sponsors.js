import React from "react";
import sponsorDimg from "../Assets/images/sponsors/sponsor_desktop.svg";
import sponsorMimg from "../Assets/images/sponsors/sponsor_mobile.svg";
import "./sponsor.css";
const Sponsors = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "5vw",
        backgroundColor: "#0B1D46",
      }}
      className="fixture-wrapper"
    >
      <img
        id="sponsor_desktop"
        style={{ width: "90vw" }}
        src={sponsorDimg}
        alt="fixture"
      />
      <img
        id="sponsor_mobile"
        style={{ width: "90vw" }}
        src={sponsorMimg}
        alt="fixture"
      />
    </div>
  );
};

export default Sponsors;
