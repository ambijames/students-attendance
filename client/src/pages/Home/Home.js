import React from "react";
import Card from "../../components/Card/card";
import background from "../../assets/background.jpg";
import Navigation from "../../components/Navigation/Navigation";
import "./home.css";


const data = [
  {
    fullName: 'John Doe',
    email: 'john@email.com',
    photoUrl: ''
  },
  {
    fullName: 'Sarah Doe',
    email: 'sarah@email.com',
    photoUrl: ''
  },
  {
    fullName: 'Peter Doe',
    email: 'peter@email.com',
    photoUrl: ''
  },
  {
    fullName: 'Kate Doe',
    email: 'kate@email.com',
    photoUrl: ''
  },
]


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
        <h1>ITF/NECA Student attendance system</h1>
      </div>
      <div style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          data.map((item, index) => (
            <Card key={index.toString()} {...item}/>
          ))
        }
 
      </div>
    </section>
  );
};

export default Home;
