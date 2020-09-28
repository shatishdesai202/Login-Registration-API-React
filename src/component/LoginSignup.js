import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class LoginSignup extends Component {
  // constructor(props){
// super(props)
  //demo
  state = {
    detail: {
      email: "",
      password: "",
    },
  }
  // };
  // login() {
  //   console.warn("state", this.state.detail);
  //   debugger;
  //   fetch("http://localhost:3000/api/login", {
  //     method: "post",
  //     headers: {
  //       Accept: "application/JSON",
  //       "Content-Type": "application/JSON",
  //     },
  //     body: JSON.stringify(this.state.detail),
  //   }).then((result)=>{
  //     result.json().then((resp)=>{
  //       console.log(resp.success.token);
  //     })
  //   })
  // }
  onSubmitForm = (event) => {
    // window.axios.post('/login',{email:this.state.detail.email,password:this.state.detail.password});
    // .then(Response=>{
    //   console.log('response');
    // })
    event.preventDefault();
    axios.post("http://localhost:3000/api/login", this.state.detail)
    .then((response) => {
      console.log(response.data);
      debugger
      // localStorage.setItem("login",response.data)
    this.setState({
      ...this.state,
      detail: {
        email: "",
        password: "",
      },
    });
    console.log(this.state);
  })
  .catch((error) => {
    console.log(error);
  })
  };

  formChangeHandler = (event) => {
    this.setState({
      ...this.state,
      detail: {
        ...this.state.detail,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="form">
        {/* form start */}
        <form>
          <div className="container">
            <div className="col-md-4 mb-3">
        <h2>Login</h2>
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                required
                value={this.state.detail.email}
                onChange={(event) => this.formChangeHandler(event)}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
                value={this.state.detail.password}
                onChange={(event) => this.formChangeHandler(event)}
              />
            </div>
            <div className="form-group form-check ml-3">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Check me out</label>
            </div>
            <button
              type="submit"
              className="btn ml-3 btn-primary text-white"
              onClick={(event) => this.onSubmitForm(event)}
            >
              Login
            </button>
            <button type="" className="btn text-white">
              <Link to="/signUP">Sign Up</Link>
            </button>
            <p className="message">Not registered? Create an account</p>
          </div>
        </form>
        {/* form end */}
      </div>
    );
  }
}

export default LoginSignup;
