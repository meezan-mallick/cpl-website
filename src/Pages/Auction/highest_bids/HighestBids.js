import React from "react";
import "../Auction.css";
import { Link } from "react-router-dom";

const HighestBids = () => {
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

        <h1>Top 10 Highest Bids</h1>

        <div className="topbids-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Base Price</th>
                <th>Bid Price</th>
                <th>Purchased by</th>
              </tr>
            </thead>
            <tbody>
              <tr className="topbid-row">
                <td>Ovesh Shaikh Bashir</td>
                <td>₹ 200</td>
                <td>₹ 29,000</td>
                <td>Strikers</td>
              </tr>
              <tr>
                <td>Vatsal Shah</td>
                <td>₹ 200</td>
                <td>₹ 29,000</td>
                <td>Knights</td>
              </tr>
              <tr>
                <td>Patel Ghanshyam</td>
                <td>₹ 1,000</td>
                <td>₹ 28,000</td>
                <td>Royals</td>
              </tr>
              <tr>
                <td>Harsh Rami</td>
                <td>₹ 200</td>
                <td>₹ 25,000</td>
                <td>Panthers</td>
              </tr>
              <tr>
                <td>Nikhil Maru</td>
                <td>₹ 200</td>
                <td>₹ 22,000</td>
                <td>Hurricanes</td>
              </tr>
              <tr>
                <td>Navid khanusiya</td>
                <td>₹ 200</td>
                <td>₹ 21,000</td>
                <td>Titans</td>
              </tr>
              <tr>
                <td>Kirtan Soni</td>
                <td>₹ 500</td>
                <td>₹ 21,000</td>
                <td>Wolves XI</td>
              </tr>
              <tr>
                <td>Afzal malek</td>
                <td>₹ 1,000</td>
                <td>₹ 19,000</td>
                <td>Super Kings</td>
              </tr>
              <tr>
                <td>Harshil Chauhan</td>
                <td>₹ 200</td>
                <td>₹ 19,000</td>
                <td>Falcons</td>
              </tr>
              <tr>
                <td>Patel Het</td>
                <td>₹ 200</td>
                <td>₹ 18,000</td>
                <td>Super Kings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HighestBids;
