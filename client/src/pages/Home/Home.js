import React, { Component } from "react";
import Card from "../../components/Card/card";
import background from "../../assets/background.jpg";
import Navigation from "../../components/Navigation/Navigation";
import "./home.css";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  // componentDidMount() {
  // // fetch(`https://stark-eyrie-01735.herokuapp.com/createStudent/${allData}`)
  // .then((res) => res.json())
  // .then((allData) => {
  // this.setState({ data: allData });
  // })
  // .catch((err) => {
  // console.log(err);
  // this.setState({ data: [] });
  // });
  // }
  render() {
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
        <Card
          email={this.setState.data.email}
          fullName={this.setState.fullName}
        />
      </section>
    );
  }
}

export default Home;
