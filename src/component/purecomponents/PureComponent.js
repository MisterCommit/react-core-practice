import React, { PureComponent } from "react";
let a = 1;
export default class RegularComponent extends PureComponent {
  componentDidUpdate() {
    a++;
  }
  render() {
    console.log("PureComponent Render");
    return (
      <div style={{ background: "#07b", padding: 20 }}>
        <h1 style={{ color: "#fff" }}>Regular PureComponent</h1>
        <h3 style={{ color: "#e7e7e7" }}> Auth Name {this.props.name}</h3>
        <h3 style={{ color: "#e7e7e7" }}> Render {a} times</h3>
      </div>
    );
  }
}
