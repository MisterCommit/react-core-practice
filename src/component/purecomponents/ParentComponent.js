import React, { Component } from "react";
import MyPureComponent from "./PureComponent";
import RegularCompont from "./RegularCompont";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ahmed Raza",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Ahmed Raza" });
    }, 2000);
  }

  render() {
    console.log("================ Parent Component Render ================");
    return (
      <div>
        <h1>This Parent Component this will Re-Render in Every 2 Second.</h1>
        <h4>
          For Re-Render i use set setInterval. which cause state update in every
          2 second. and return same name while update.
        </h4>
        <h4>
          In bottom use can see two Components. one is green and second in blue.
          green one is PureComponent that will not re-render if the value of
          previos state or props pass to it same.
        </h4>
        <h4 style={{ color: "#f00" }}>You Should See Console for Out Put</h4>
        <MyPureComponent name={this.state.name} />
        <RegularCompont name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
