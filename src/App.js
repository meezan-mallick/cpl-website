import Nav from "./Pages/Nav/Nav";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Teams from "./Pages/Teams/Teams";
import Auction from "./Pages/Auction/Auction";
import HighestBids from "./Pages/Auction/highest_bids/HighestBids";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="main-wrapper">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/highestbids" element={<HighestBids />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
