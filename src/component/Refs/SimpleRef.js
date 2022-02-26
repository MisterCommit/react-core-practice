import React, { Component } from "react";

export class SimpleRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(null);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <h1>Refs</h1>
        <h2> Refs lets you access DOM node drirectly in react</h2>
        <pre>
          {`  constructor(props) {
    super(props);
    this.inputRef = React.createRef(null);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }`}
        </pre>
        <h3>* this code foucs the input element when component is mount</h3>
        <h3>
          * you can create ref using React.createRef, and assifn to any element
          using ref attribute
        </h3>
        <pre>
          <pre>{`<input type="text" ref={this.inputRef} />`}</pre>
        </pre>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default SimpleRef;
