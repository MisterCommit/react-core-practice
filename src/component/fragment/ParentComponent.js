import React, { Component } from "react";
import Row from "./Row";

class parentcomponent extends Component {
  render() {
    return (
      <div>
        <h1>
          Fragment is a way return group of element with createing extra node in
          dom
        </h1>
        <h3>
          Blow is table Tag which have Row child. Row child return more then one
          row with any div. you can inspect element to verify it.
        </h3>
        <h3 style={{ color: "#ff0000" }}>
          import you should use tbody, thead or tfoot when working with table in
          react here i use just for demo
        </h3>
        <table>
          <Row />
        </table>
      </div>
    );
  }
}

export default parentcomponent;
