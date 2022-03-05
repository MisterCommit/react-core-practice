import React from "react";

function HoverCounterRP({ value, updateCounter }) {
  return (
    <div onMouseEnter={() => updateCounter()}>
      <h1>Hover to increment {value}</h1>
    </div>
  );
}

export default HoverCounterRP;
