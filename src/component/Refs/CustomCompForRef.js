import React, { Component } from "react";

export class CustomCompForRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div style={{ background: "#F8C2F5", margin: 20 }}>
        <h2>Custom Component</h2>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default CustomCompForRef;
