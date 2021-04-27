import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, HomePage, DetailPage } from "../pages";
import Header from "../pages/components/Header";
import { selectUserName } from "../features/user/userSlice";
import { useSelector } from "react-redux";
const Routes = () => {
  const username = useSelector(selectUserName);
  console.log(username);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        {username && (
          <>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/detail/:id" component={DetailPage} />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
