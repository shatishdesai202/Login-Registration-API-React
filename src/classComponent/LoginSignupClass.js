import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class LoginSignup extends Component {
  // constructor(props){
  // super(props)
  //demo
  state = {
    detail: {
      email: "",
      password: "",
      errors: {},
      // emailError: "",
      // passwordError: "Password Required",
    },
  };
  validate = () => {
    debugger
    const { email, passsword } = this.state.detail;
    let isvalid = true;
    const errors = {};
    if (!this.state.detail.email.includes("@")) {
      errors.this.state.detail.email = "email must have @";
      isvalid = false;
    }
    if (this.state.detail.password.trim().length < 8) {
      errors.passwordLength = "password must be of length 8 or higher";
      isvalid = false;
    }
    this.setState( this.state.details.errors );
    // return isValid;
    // let emailError = "";
    // let passwordError = "";
    // if (!this.state.detail.email.includes("@")) {
    //   emailError = "invalid email";
    // }
    // if (emailError) {
    //   this.setState({ emailError });
    //   return false;
    // }
    // return true;
  };
  // notify = () => {
  //   toast("error");
  // };
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
    const isValid = this.validate();
    // window.axios.post('/login',{email:this.state.detail.email,password:this.state.detail.password});
    // .then(Response=>{
    //   console.log('response');
    // })
    // event.preventDefault();
    if(isValid){
    axios
      .post("http://localhost:3000/api/login", this.state.detail)
      .then((response) => {
        // if(this.valid())
        // {
        //   alert("form has been submitted")
        // }
        console.log(response.data);
        // debugger
        localStorage.setItem("login", response.data);
        this.setState({
          ...this.state,
          detail: {
            email: "",
            password: "",
          },
        });
        // const isValid = this.validate();
        // if (isValid) {
        //   console.log(this.state);
        // }
        this.props.history.push("/");
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
    }
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
    const { email, password, errors } = this.state.detail;
    return (
      <div className="form">
        {/* form start */}
        {/* <div className="col-md-4 mb-3">
            <button onClick={this.notify}>Notify !</button>
            <ToastContainer />
          </div> */}
        <form>
          <div className="container">
            <div className="col-md-4 mb-3">
              <h2>Login</h2>
              <label style={{ fontSize: 20 }}>Email address</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter email"
                // required
                value={this.state.detail.email}
                onChange={(event) => this.formChangeHandler(event)}
              />
              <div style={{ color: "red" }}>{this.state.detail.emailError}</div>
            </div>
            <div className="col-md-4 mb-3">
              <label style={{ fontSize: 20 }}>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                // required
                value={this.state.detail.password}
                onChange={(event) => this.formChangeHandler(event)}
              />
              <div style={{ color: "red" }}>
                {this.state.detail.passwordError}
              </div>
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
              <Link to="/SignUp">Sign Up</Link>
            </button>
            <p className="message">Not registered? Create an account</p>
          </div>
          {Object.keys(errors).map((key)=>{
            return <div style={{color:"red"}}key={key}>{errors[key]}</div>
          })}
        </form>
        {/* form end */}
      </div>
    );
  }
}

export default LoginSignup;
