import React, { Component } from "react";
import { createPortal } from "react-dom";

function Child() {
  return createPortal(
    <div
      style={{
        zIndex: 99,
        width: 800,
        height: 500,
        position: "absolute",
        background: "#f7f7f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 200,
        left: 400,
        boxShadow: "0px 10px 5px #000",
      }}
    >
      <h1 style={{ textAlign: "center", padding: 50 }}>
        You can check using inspect element this render out side of root div
      </h1>
    </div>,
    document.getElementById("portal")
  );
}

export default class Portal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ShowModal: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Portal</h1>
        <h4>Portal Provide a way to render child out side of DOM node </h4>
        <h4>This Modal Render out side of DOM</h4>
        <button
          onClick={() => {
            this.setState({
              ShowModal: !this.state.ShowModal,
            });
          }}
        >
          Show Modal
        </button>
        {this.state.ShowModal && Child()}
      </div>
    );
  }
}
