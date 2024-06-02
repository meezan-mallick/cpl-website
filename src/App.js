import Nav from "./Pages/Nav/Nav";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Teams from "./Pages/Teams/Teams";
import HighestBids from "./Pages/Auction/highest_bids/HighestBids";
import Fixture from "./Pages/fixtures/Fixture";
import Sponsors from "./Pages/sponsors/Sponsors";
import Teamsdetails from "./Pages/TeamsDetails/Teamsdetails";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="main-wrapper">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/highestbids" element={<HighestBids />} />
            <Route path="/schedules" element={<Fixture />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/teams/:id" element={<Teamsdetails />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
