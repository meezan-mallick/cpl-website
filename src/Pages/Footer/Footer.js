import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import gu from "../Assets/images/footer/gu.png";
import instagram from "../Assets/images/footer/instagram.png";
import telegram from "../Assets/images/footer/telegram.png";
import twitter from "./../Assets/images/footer/twitter.png";
import discord from "./../Assets/images/footer/discord.png";
import facebook from "./../Assets/images/footer/facebook.png";
import youtube from "./../Assets/images/footer/youtube.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="address">
            <div>
              <img src={gu} alt="guaim" className="guaim-img" />
            </div>

            <h4>Department of Animation & IT</h4>
            <p>
              3rd Floor, New Building, Opp. EMRC, Gujarat University,
              Navrangpura, Ahmedabad, Gujarat,India - 380009
              <br />
              Call: +91 9978067641
            </p>
          </div>
          <div className="all-links">
            <h1>Useful Links</h1>
            <div className="link-add">
              <div className="l1">
                <a href="/home">Home</a>
                <a href="/home">Auction</a>
                <a href="/home">Teams</a>
                <a href="/home">Dashboard</a>
                <a href="/home">Terms & Conditions</a>
                <a href="/home">Last Years Results</a>
              </div>
              <div className="l2">
                <a href="/">Players</a>
                <a href="/">Photo Gallery</a>
                <a href="/">About CPL</a>
                <a href="/">Sponsors</a>
                <a href="/">contact Us</a>
                <a href="/">Previous Results</a>
              </div>
            </div>
          </div>
          <div className="social-media">
            <div className="l3">
              <h1>
                <b>Follow Us</b>
              </h1>

              <div className="social-btns">
                <button>
                  <img src={twitter} alt="Twiter" />
                </button>
                <button>
                  <img src={facebook} alt="Facebook" />
                </button>
                <button>
                  <img src={youtube} alt="Youtube" />
                </button>
                <button>
                  <img src={instagram} alt="Instagram" />
                </button>
                <button>
                  <img src={telegram} alt="Telegram" />
                </button>
                <button>
                  <img src={discord} alt="Discord" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>
            Copyright © CPL 2023 All Rights Reserved. | Developed by Meezan
            Mallick
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
