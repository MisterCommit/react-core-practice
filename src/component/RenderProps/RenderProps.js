import React from "react";
import ClickCounterRP from "./ClickCounterRP";
import CounterRenderProps from "./CounterRenderProps";
import HoverCounterRP from "./HoverCounterRP";

function RenderProps() {
  return (
    <div>
      <h1>RenderProps</h1>
      <h3>
        Is a technique to share common loginc and functionlity between
        components
      </h3>
      <h3>
        In which a Render component take core components as props and render it
        inside of it.
      </h3>
      <div>
        <CounterRenderProps
          render={(value, updateCounter) => (
            <HoverCounterRP value={value} updateCounter={updateCounter} />
          )}
        />
        <CounterRenderProps
          render={(value, updateCounter) => (
            <ClickCounterRP value={value} updateCounter={updateCounter} />
          )}
        />
      </div>
    </div>
  );
}

export default RenderProps;
