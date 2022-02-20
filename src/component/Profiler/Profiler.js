import React, { Component, Profiler } from "react";

class MyProfiler extends Component {
  constructor(props) {
    super(props);
    this.renderValue = 1;

    this.state = {
      name: "Ahmed",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.renderValue++;
      this.setState({
        name: "ahmed",
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1> Profiler</h1>
        <h3>
          A Profiler can be added anywhere in a React tree to measure the cost
          of rendering that part of the tree. It requires two props: an id
          (string) and an onRender callback (function) which React calls any
          time a component within the tree “commits” an update.
        </h3>

        <Profiler
          id="pro"
          onRender={() => {
            console.log("Component Render", this.renderValue);
          }}
        >
          <h1>
            {" "}
            My Name is {this.state.name} render value {this.renderValue}
          </h1>
        </Profiler>

        <h3>You can also see console for confromation</h3>
      </div>
    );
  }
}

export default MyProfiler;
