import React, { Component } from "react";

export class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
    };
  }
  componentDidUpdate() {
    if (this.props.name === "" || this.state.isError) {
      throw new Error("no ");
    }
  }

  componentDidMount() {
    if (!this.props.name) {
      throw new Error("no");
    }
  }

  render() {
    return (
      <div
        onClick={() => {
          this.setState({ isError: true });
        }}
      >
        <h3>Person Name is {this.props.name}</h3>
      </div>
    );
  }
}

export default Person;
