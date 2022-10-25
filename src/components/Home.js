import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="type-container">
      <h1>Are you ready to go shopping?</h1>
      <Link style={{ textDecoration: "none" }} to="/list">
        <button className="subtitle">YES</button>
      </Link>
    </div>
  );
}

export default Home;
