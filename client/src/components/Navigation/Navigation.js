import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <section className="navbar">
      <div className="logo-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshVBDzSkjkA4f_OU6yXjPV6ULfQ_i83zfee-ROSX6nIAIk1BX6VXZi5OfDSMZCjU1KUQ&usqp=CAU" alt="Logo" />
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
