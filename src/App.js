import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignIn, SelectName } from "./views";
import { Navigation } from "./components";
import "./mvp.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/select-name" component={SelectName} />
      </Switch>
    </Router>
  );
}

export default App;
