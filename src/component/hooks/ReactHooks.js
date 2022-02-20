import React, { Component } from "react";

export default class ReactExplain extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>What is Hooks ?</h1>
          <h3>
            Hooks let you use state and other React features in functional
            component or custom hooks
          </h3>
        </div>
        <div>
          <h1>Basic Hooks of React</h1>
          <h4>* UseState</h4>
          <h4>* UseEffect </h4>
        </div>
        <div>
          <h1>Optimzation Hooks of React</h1>
          <h4>* UseMemo</h4>
          <h4>* UseCallBack </h4>
          <h4>* UseLayoutEffect </h4>
        </div>
        <div>
          <h1>Additional Hooks</h1>
          <h4>* UseReducer</h4>
          <h4>* UseImperativeHandle </h4>
          <h4>* UseDebugValue </h4>
          <h4>* UseContext </h4>
        </div>
      </div>
    );
  }
}
