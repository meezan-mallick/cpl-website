import React from "react";
import "./Home.css";
import icc from "../Assets/images/home/icc.png";
import iccmobile from "../Assets/images/home/hero_bg_mobile.webp";
import empirelogo from "../Assets/images/teams/empire.png";
import hurricaneslogo from "../Assets/images/teams/hurricaneslogo.png";
import blasterslogo from "../Assets/images/teams/blasters.png";
import royalslogo from "../Assets/images/teams/royals.png";
import falconslogo from "../Assets/images/teams/falcons.png";
import strikerslogo from "../Assets/images/teams/strikers.png";
import wolveslogo from "../Assets/images/teams/wolves.png";
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
        <div className="about-cpl">
          <div className="cpl-details">
            <h1>
              Unleash the Power of Cricketing Passion: Join the Ultimate
              <br></br> Battle OF CPL
            </h1>

            <p>
              CPL is an exciting event that brings together passionate cricket
              enthusiasts from various colleges to showcase their skills and
              compete for the ultimate glory. This tournament serves as a
              platform for young and talented cricketers to exhibit their
              talent, foster sportsmanship, and create lifelong memories.
            </p>
          </div>

          <div className="cpl-teams">
            <img className="t-1" src={empirelogo} alt="Empire" />
            <img className="t-2" src={hurricaneslogo} alt="Hurricans" />
            <img className="t-3" src={blasterslogo} alt="blasters" />
            <img className="t-4" src={royalslogo} alt="Royals" />
            <img className="t-5" src={falconslogo} alt="Falcons" />
            <img className="t-6" src={strikerslogo} alt="Strikers" />
            <img className="t-7" src={wolveslogo} alt="Wolves" />
          </div>
        </div>
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
                  <p className="pt-left">18 Nov 2023</p>
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
