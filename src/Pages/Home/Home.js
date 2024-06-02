import React from "react";
import "./Home.css";
import icc from "../Assets/images/home/icc.png";
import iccmobile from "../Assets/images/home/hero_bg_mobile.webp";

import midimage from "../Assets/images/home/mid_image.png";
import midimagemobile from "../Assets/images/home/mid_image_mobile.png";
import bghelmet from "../Assets/images/home/helmet.png";
import bgplayer from "../Assets/images/home/batsman.png";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        {/* HERO BANNER ICC IMAGE */}
        <div className="top-img">
          <img id="hero_bg_desktop" src={icc} alt="poster banner" />
          <img id="hero_bg_mobile" src={iccmobile} alt="poster banner" />
        </div>
        {/* -------------------------------------- */}

        {/* <!-- About CPL  --> */}
        {/* <div className="cpl-teams">
          <img src={"/assets/teams/capitals.png"} alt="capital logo" />
          <img src={"/assets/teams/Indians.png"} alt="indians logo" />
          <img src={"/assets/teams/Kings_XI.png"} alt="kings logo" />
          <img
            style={{ height: "12vw", marginTop: "1vw" }}
            src={"/assets/teams/Knight_Riders.png"}
            alt="knights logo"
          />
          <img
            style={{ height: "12vw", marginTop: "1vw" }}
            src={"/assets/teams/Royal_Challengers.png"}
            alt="royal challengers logo"
          />
        </div> */}

        <div className="about-cpl">
          <div className="cpl-details">
            <h1>
              Unleash the Power of Cricketing Passion: Join the Ultimate Battle
              OF GUPL
            </h1>

            <p>
              GUPL is an exciting event that brings together passionate cricket
              enthusiasts from our department to showcase their skills and
              compete for the ultimate glory. This tournament serves as a
              platform for young and talented cricketers to exhibit their
              talent, foster sportsmanship, and create lifelong memories of
              their college time
            </p>
          </div>
          <div>
            <img
              style={{ height: "34vw", marginRight: "7vw" }}
              src={"/assets/home/all_team_group.png"}
              alt="Royals logo"
            />
          </div>
        </div>
        {/* <div className="cpl-teams">
          <img src={"/assets/teams/Royals.png"} alt="Royals logo" />
          <img src={"/assets/teams/Sunrisers.png"} alt="Sunrisers logo" />
          <img src={"/assets/teams/Super_giants.png"} alt="Super_giants logo" />
          <img src={"/assets/teams/Super_Kings.png"} alt="Super_Kings logo" />
          <img
            style={{ height: "10vw", marginTop: "1vw" }}
            src={"/assets/teams/Titans.png"}
            alt="Titans logo"
          />
        </div> */}
        {/* -- -------------------------------- -- */}

        {/* <!-- Mid Photo --> */}
        <div className="mid-img">
          <img id="midimage_desktop" src={midimage} alt="" />
          <img id="midimage_mobile" src={midimagemobile} alt="" />
        </div>
        {/* <!-- ------ --> */}

        {/* <!-- Roadmap Timeline --> */}
        <div className="roadmap-timeline">
          <div className="bg-img">
            <img src={bghelmet} alt="bg helmet" />
            <img src={bgplayer} alt="bg player" />
          </div>

          <div className="roadmap-data">
            <h1>
              <b>Roadmap Timeline</b>
            </h1>

            <table>
              <tr>
                <td>
                  <p className="t-l t-left">Player Selection </p>
                  <div
                    style={{ background: "lightgreen" }}
                    className="round-ball"
                  ></div>
                </td>
                <td>
                  <p className="pt-right">30 Sept 2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="pt-left">16 Oct 2023</p>
                  <div
                    style={{ background: "lightgreen" }}
                    className="round-ball"
                  ></div>
                </td>
                <td>
                  <p className="t-l ">Player Auction</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="t-l t-left">First Match</p>
                  <div className="round-ball"></div>
                </td>
                <td>
                  <p className="pt-right">30 Oct 2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="pt-left">06 Nov 2023</p>
                  <div className="round-ball"></div>
                </td>
                <td>
                  <p className="t-l">Grand Finale</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* ----------------------- */}

        {/* YOUTUBE EMBEDED */}
        <iframe
          id="youtube-embed"
          src="https://www.youtube.com/embed/_LhDpL7Lfa0?si=Rqv_9E6WORi4QaEb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {/* ----------------------------- */}
      </div>
    </>
  );
};

export default Home;
