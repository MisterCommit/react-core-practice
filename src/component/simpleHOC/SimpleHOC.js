import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export class SimpleHOC extends Component {
  render() {
    return (
      <div style={{ background: "#f5f5f5" }}>
        <div>
          <h1>High Order Component(HOC)</h1>
          <h3>
            * High Order Component is Way to share Common functionlity between
            components
          </h3>
          <h3>
            * HOC is pattern in which a function take a component as argument
            and return a New Component with some other functionlity
          </h3>
        </div>

        <div>
          <ClickCounter />
          <HoverCounter updateBy={100} />
        </div>
      </div>
    );
  }
}

export default SimpleHOC;
