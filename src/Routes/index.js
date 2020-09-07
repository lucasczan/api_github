import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import Notfound from "../Pages/NotFound";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:full_name+" component={Details} />
      <Route component={Notfound} />
    </Switch>
  );
};

export default Routes;
