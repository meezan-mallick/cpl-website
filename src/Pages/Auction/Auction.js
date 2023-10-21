import React from "react";
import "./Auction.css";
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
import { Link } from "react-router-dom";

const Auction = () => {
  return (
    <>
      <div className="auction-wrapper">
        {/* Auction Menu */}
        <div className="auction">
          <div className="auctionmenu">
            <h1>CPL AUCTION | 2023</h1>
            <div className="btns">
              <Link to="/auction">
                <button>TEAMS</button>
              </Link>
              <Link to="/highestbids">
                <button>TOP BUYS</button>
              </Link>

              <button>UNSOLD</button>
            </div>
          </div>
        </div>
        {/* END of Auction menu */}

        {/* Teams Details */}
        <div className="teams">
          <div className="Team">
            <div className="Tdetails">
              <img src={knights} alt="KNIGHTS" />

              <h2>KNIGHTS</h2>
              <p>Funds Remaining</p>
              <h4>2,800</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={hurricanes} alt="HURRICANES" />
              <h2>HURRICANES</h2>
              <p>Funds Remaining</p>
              <h4>4,600</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={empire} alt="EMPIRE" />
              <h2>EMPIRE</h2>
              <p>Funds Remaining</p>
              <h4>7,200</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={royals} alt="ROYALS" />
              <h2>ROYALS</h2>
              <p>Funds Remaining</p>
              <h4>100</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={blasters} alt="BLASTERS" />
              <h2>BLASTERS</h2>
              <p>Funds Remaining</p>
              <h4>8,300</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div
            className="Team"
            // style=""
          >
            <div className="Tdetails">
              <img src={stars} alt="STARS" />
              <h2>STARS</h2>
              <p>Funds Remaining</p>
              <h4>12,800</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={panther} alt="PANTHERS" />
              <h2>PANTHERS</h2>
              <p>Funds Remaining</p>
              <h4>3,700</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={falcons} alt="FALCONS" />
              <h2>FALCONS</h2>
              <p>Funds Remaining</p>
              <h4>0</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={titans} alt="TITANS" />
              <h2>TITANS</h2>
              <p>Funds Remaining</p>
              <h4>100</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={strikers} alt="STRIKERS" />
              <h2>STRIKERS</h2>
              <p>Funds Remaining</p>
              <h4>8,400</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={super_kings} alt="SUPER KINGS" />
              <h2>SUPER KINGS</h2>
              <p>Funds Remaining</p>
              <h4>600</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>

          <div className="Team">
            <div className="Tdetails">
              <img src={wolves} alt="WOLVES" />
              <h2>WOLVES</h2>
              <p>Funds Remaining</p>
              <h4>100</h4>
            </div>
            <div className="Tplayer">
              {/* <p>
                SEM1 <br></br> Students <br></br> 3
              </p> */}
              <p>
                Total Players <br></br>
                <br></br> 16
              </p>
            </div>
          </div>
        </div>
        {/* End of Teams Details */}
      </div>
    </>
  );
};

export default Auction;
