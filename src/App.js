import React from "react";
// import { LoginSignup } from "./component/LoginSignup";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LoginSignup from "./component/LoginSignup";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
function App() {
  return (
    <div>
      {/* <LoginSignup /> */}
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              let obj = localStorage.getItem("Login");
              console.log(obj);
              if (obj !== null) {
                return <Home />;
              } else return <LoginSignup />;
            }}
          />
          <Route path="/loginSignup" component={LoginSignup} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
