import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <section className="navbar">
      <div className="logo-section">
        <img src="" alt="Logo" />
      </div>
      <div className="options">
        <ul className="options">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Admin</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};
export default Navigation;
