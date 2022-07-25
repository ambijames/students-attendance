import React, {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function Login() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const navigate = useNavigate();


    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedAuth = {
            email: 'admin@mail.com',
            password: '12345'
        }

        if((emailInput === hardcodedAuth.email) && (passwordInput === hardcodedAuth.password)){
            console.log("yes")
            navigate('/create-student')
        }else {
            alert('wrong email or password combination');
        }
    }

    // const history = useHistory();
  return (
    <div className="login-page">
      <h2>Login In</h2>
      <form autoComplete="off" onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;