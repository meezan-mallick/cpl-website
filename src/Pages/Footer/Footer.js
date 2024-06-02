import React from "react";
import "./Footer.css";
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
              <img src={"/assets/logo.png"} alt="guaim" className="guaim-img" />
            </div>

            <h4>Department of Animation & IT</h4>
            <p>
              New Building, Opp. EMRC, Gujarat University, Navrangpura,
              Ahmedabad, Gujarat,India - 380009
              <br />
            </p>
          </div>
          <div className="all-links">
            <h2>Useful Links</h2>
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
                <a href="/">About GUPL</a>
                <a href="/">Sponsors</a>
                <a href="/">contact Us</a>
                <a href="/">Previous Results</a>
              </div>
            </div>
          </div>
          <div className="social-media">
            <div className="l3">
              <h2>
                <b>Follow Us</b>
              </h2>

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
            Copyright © GUPL {new Date().getFullYear()} All Rights Reserved. |
            Developed by Meezan Mallick
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
