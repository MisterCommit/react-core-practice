import React, { Component } from "react";
import CounterHoc from "./CounterHoc";

export class HoverCounter extends Component {
  render() {
    return (
      <div
        onMouseEnter={() => this.props.incrementValue(this.props.updateBy)}
        style={{ background: "#F5C3C3" }}
      >
        <h1>Hover to Update counter</h1>
        <h2> Current Value {this.props.value}</h2>
        <h1>
          Onhover value update by {this.props.updateBy} and this props send from
          parent
        </h1>
      </div>
    );
  }
}

export default CounterHoc(HoverCounter);
