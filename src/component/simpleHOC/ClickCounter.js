import React, { Component } from "react";
import CounterHoc from "./CounterHoc";
export class ClickCounter extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.incrementValue()}
        style={{ background: "#DDF7CE", cursor: "pointer" }}
      >
        <h1>Click to Update counter</h1>
        <h2> Current Value {this.props.value}</h2>
      </div>
    );
  }
}

export default CounterHoc(ClickCounter);
