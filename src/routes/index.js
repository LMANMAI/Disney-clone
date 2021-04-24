import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, HomePage } from "../pages";
import Header from "../pages/components/Header";
const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
