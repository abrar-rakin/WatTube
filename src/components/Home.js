import "./Home.css";
import { Link } from "react-router-dom";

import React from "react";

function Home() {
  return (
    <div>
      <div className="full">
        <h1 className="title">WatTube</h1>
        <br />
        <Link to="/cs135search">
          <button className="btn">CS135</button>
        </Link>
        <Link to="/cs136search">
          <button className="btn">CS136</button>
        </Link>
        <Link to="/search">
          <button className="btn">Custom Search</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
