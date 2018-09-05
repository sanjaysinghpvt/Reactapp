import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { LoginView, DashboardView } from "./views";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" exact component={LoginView} />
            <Route path="/dashboard" exact component={DashboardView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default Routes;
