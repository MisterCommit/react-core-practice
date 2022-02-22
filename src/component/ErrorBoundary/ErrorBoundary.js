import React, { Component } from "react";
import Person from "./Person";
import FallBackUI from "./FallBackUI";

export class ErrorBoundary extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Error Boundaries</h1>
          <h3>
            * Error boundaries are React components that catch JavaScript errors
            anywhere in their child component tree
          </h3>
          <h3>
            * Error boundaries catch errors during rendering, in lifecycle
            methods, and in constructors of the whole tree below them.
          </h3>
          <h3>
            * Error boundaries logs errors, and display a fallback UI instead of
            the component tree that crashed
          </h3>
          <h3>
            * You can click any blow component they will throw error, but app
            will not crash
          </h3>
        </div>
        <div style={{ background: "#E2DBB9" }}>
          <FallBackUI>
            <Person name="ahmed" />
          </FallBackUI>
          <FallBackUI>
            <Person name="basit" />
          </FallBackUI>
          <FallBackUI>
            <Person name="zain" />
          </FallBackUI>
          <FallBackUI>
            <Person name="haris" />
          </FallBackUI>
          <FallBackUI>
            <Person name="ali" />
          </FallBackUI>
          <FallBackUI>
            <Person name="" />
          </FallBackUI>
        </div>
      </React.Fragment>
    );
  }
}

export default ErrorBoundary;
