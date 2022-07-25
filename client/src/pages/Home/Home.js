import React from "react";
import Card from "../../components/Card/card";
import background from "../../assets/background.jpg";
import Navigation from "../../components/Navigation/Navigation";
import "./home.css";
const Home = () => {
  return (
    <section>
      <Navigation />
      <div className="background-overlay">
        <img className="background" src={background} alt="bg" />
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <h1>Browse Our Students Catelog</h1>
      </div>
      <Card />
    </section>
  );
};

export default Home;
