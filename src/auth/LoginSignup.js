import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginSignup() {
  const [login, setlogin] = useState({
    detail: {
      email: "",
      password: "",
    },
  });
  const obj = localStorage.getItem("login");
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/login", login.detail)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("login", response.data);
        if (response.data) {
          setlogin({
            ...login,
          });
          history.push({
            pathname: "/home",
          });
          return "/";
        }
        console.log(login);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formChangeHandler = (event) => {
    setlogin({
      ...login,
      detail: {
        ...login.detail,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <div>
      {!obj && (
        <div className="form">
          {/* form start */}
          <form onSubmit={(event) => onSubmitForm(event)}>
            <div className="container">
              <div className="col-md-4 mb-3">
                <h2>Login</h2>
                <label style={{ fontSize: 20 }}>Email address</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                  value={login.detail.email}
                  onChange={(event) => formChangeHandler(event)}
                />
                <div style={{ color: "red" }}>{login.detail.emailError}</div>
              </div>
              <div className="col-md-4 mb-3">
                <label style={{ fontSize: 20 }}>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  value={login.detail.password}
                  onChange={(event) => formChangeHandler(event)}
                />
                <div style={{ color: "red" }}>{login.detail.passwordError}</div>
              </div>
              <div className="form-group form-check ml-3">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn ml-3 btn-primary text-white">
                Login
              </button>
              <button type="" className="btn text-white">
                <Link to="/SignUp">Sign Up</Link>
              </button>
              <p className="message">Not registered? Create an account</p>
            </div>
          </form>
          {/* form end */}
        </div>
      )}
      {obj && <Home />}
    </div>
  );
}

export default LoginSignup;

