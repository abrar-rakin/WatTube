import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <button
        className="btn"
        variant="link"
        onClick={handleLogout}
        style={{
          backgroundColor: "black",
          color: "#ffb26b",
          position: "absolute",
          top: "0",
          right: "0",
          width: "10%",
          height: "5%",
          padding: "0",
          fontWeight: "lighter",
          fontSize: "100%",
        }}
      >
        Log Out
      </button>
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
