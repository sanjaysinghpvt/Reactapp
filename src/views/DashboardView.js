import React, { Component } from "react";
import LeftMenu from "./LeftMenu.js";
import Header from "./Header.js";
import Content from "./Content.js";

class DashboardView extends Component {
  render() {
    return (
      <React.Fragment>
        <LeftMenu />
        <div id="right-panel" className="right-panel">
          <Header />
          <Content />
        </div>
      </React.Fragment>
    );
  }
}
export default DashboardView;
