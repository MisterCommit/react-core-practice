import { Button } from "antd";
import React, { Component } from "react";
import CustomCompForRef from "./CustomCompForRef";

class ParentRef extends Component {
  constructor(props) {
    super(props);

    this.customCompRef = React.createRef();
  }

  focusChild = () => {
    // console.log("sa", this.customCompRef.current.);
    this.customCompRef.current.focusInput();
  };
  render() {
    return (
      <div style={{ background: "#9EF5DB" }}>
        <h1>Custom Component Refs</h1>
        <h3>* you assign ref to any Custom Class Component</h3>
        <h3>
          * after assign ref to custom component you can it functions using
          current
        </h3>
        <h1>* This is A parent Component</h1>
        <Button onClick={this.focusChild}>
          Press To focus Child Component
        </Button>
        <CustomCompForRef ref={this.customCompRef} />
      </div>
    );
  }
}

export default ParentRef;
