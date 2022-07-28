import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./createStudent.css";


import Card from "../../components/Card/card";
import Navigation from "../../components/Navigation/Navigation";





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



function CreateStudent(props) {
  const [show, setShow] = useState(false);

  



  return (
    <>
    <Navigation />
      <div className="" style={{ padding: '1rem', }}>

        <button style={{ fontSize: '1rem', padding: '2rem 2rem', cursor: 'pointer' }} onClick={() => setShow(true)}>
          +Add new student
        </button>


        <div style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          data.map((item, index) => (
            <Card key={index.toString()} {...item}/>
          ))
        }
        </div>
      </div>


        {
          show && 
            <div style={{ position: 'fixed', background: 'rgba(0,0,0,0.6)', width: '100vw', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <form className="side-2"  style={{padding: '2rem'}} onSubmit={() => {}}>
                  <p className="" onClick={() => setShow(false)} style={{cursor: 'pointer'}}>close</p>
                  <div className="input">
                      <input
                      className="form-control"
                      name="fullName"
                      placeholder="fullName"
                      value={''}
                      onChange={''}
                    />
                    <input
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={''}
                      onChange={""}
                    />
                    <div style={{ width: "100%" }}>
                      <button className="form-control" type="submit">
                        Create Student
                      </button>
                    </div>
                  </div>
                </form>
            </div>
        }

    </>
  )
}











// class CreateStudent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       fullName: "",
//     };
//   }
//   inputChange = (e) => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });
//   };

//   httpRegisterStudent = (e) => {
//     e.preventDefault();
//     axios.post(
//       "https://stark-eyrie-01735.herokuapp.com/createStudent",
//       this.inputChange,
//       {
//         headers: {
//           "content-Type": "applictaion/json",
//         },
//       }
//         .then((res) => res.json())
//         .catch((err) => {
//           console.log(err);
//         })
//     );
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <>
//         <h1>Create A student</h1>
//         <form className="side-2" onSubmit={this.httpRegisterStudent}>
//           <div className="input">
//             <input
//               className="form-control"
//               name="fullName"
//               placeholder="fullName"
//               value={this.state.fullName}
//               onChange={this.inputChange}
//             />
//             <input
//               name="email"
//               className="form-control"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={this.inputChange}
//             />
//             <div style={{ width: "100%" }}>
//               <Link to="/">
//                 <button className="form-control" type="submit">
//                   Create Student
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </form>
//       </>
//     );
//   }
// }

export default CreateStudent;
