import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Results } from "./Results";

const Router = () => {
  return (
    <div className="p-5">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path="/search" >
        {<Results />}
        </Route>
      </Switch>
      
    </div>
  );
};

export default Router;
