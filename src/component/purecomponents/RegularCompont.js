import React, { Component } from "react";
let a = 1;
export default class RegularComponent extends Component {
  componentDidUpdate() {
    a++;
  }
  render() {
    console.log("Regular Component Render");
    return (
      <div style={{ background: "#0a7b", padding: 20 }}>
        <h1 style={{ color: "#fff" }}>Regular PureComponent</h1>
        <h3 style={{ color: "#e7e7e7" }}> Auth Name {this.props.name}</h3>
        <h3 style={{ color: "#e7e7e7" }}> Render {a} times</h3>
      </div>
    );
  }
}
