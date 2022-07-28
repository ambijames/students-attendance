import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./createStudent.css";
class CreateStudent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullName: "",
    };
  }
  inputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  httpRegisterStudent = (e) => {
    e.preventDefault();
    axios.post(
      "https://stark-eyrie-01735.herokuapp.com/createStudent",
      this.inputChange,
      {
        headers: {
          "content-Type": "applictaion/json",
        },
      }
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        })
    );
    console.log(this.state);
  };

  render() {
    return (
      <>
        <h1>Create A student</h1>
        <form className="side-2" onSubmit={this.httpRegisterStudent}>
          <div className="input">
            <input
              name="email"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.inputChange}
            />
            <input
              className="form-control"
              name="fullName"
              placeholder="fullName"
              value={this.state.fullName}
              onChange={this.inputChange}
            />
            <div style={{ width: "100%" }}>
              <Link to="/">
                <button className="form-control" type="submit">
                  Create Student
                </button>
              </Link>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default CreateStudent;
