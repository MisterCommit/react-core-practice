import React, { Component } from "react";

const CounterHoc = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        value: 0,
      };
    }

    incrementValue = (inceBy = 1) => {
      this.setState({ value: this.state.value + inceBy });
    };

    render() {
      return (
        <OriginalComponent
          value={this.state.value}
          incrementValue={this.incrementValue}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default CounterHoc;
