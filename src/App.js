import React, { Component } from "react";
// import { LoginSignup } from "./component/LoginSignup";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LoginSignup from "./component/LoginSignup";
import SignUp from "./component/SignUp";
export class App extends Component {
  render() {
    return (
      <div>
        {/* <LoginSignup /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginSignup} />
            <Route path="/signUP" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
