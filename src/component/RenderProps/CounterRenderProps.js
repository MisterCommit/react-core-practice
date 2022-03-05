import React, { Component } from "react";

export class CounterRenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter() {
    console.log("aaa");
    this.setState({ value: this.state.value + 1 });
  }
  render() {
    return <div>{this.props.render(this.state.value, this.updateCounter)}</div>;
  }
}

export default CounterRenderProps;
