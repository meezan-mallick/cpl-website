import React from "react";
import fixtureDimg from "../Assets/images/fixtures/fixture_desktop.svg";
import fixtureMimg from "../Assets/images/fixtures/fixture_mobile.svg";
import "./fixture.css";
const Fixture = () => {
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
        id="fixture_desktop"
        style={{ width: "90vw" }}
        src={"/assets/fixtures/fixture_desktop.svg"}
        alt="fixture"
      />
      <img
        id="fixture_mobile"
        style={{ width: "90vw" }}
        src={fixtureMimg}
        alt="fixture"
      />
    </div>
  );
};

export default Fixture;
