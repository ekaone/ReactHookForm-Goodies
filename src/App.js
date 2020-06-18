import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignIn, SelectName, HandleError } from "./views";
import { Navigation } from "./components";
import "./mvp.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/select-name" component={SelectName} />
        <Route path="/handle-error" component={HandleError} />
      </Switch>
    </Router>
  );
}

export default App;
