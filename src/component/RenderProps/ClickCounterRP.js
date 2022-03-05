import React from "react";

function ClickCounterRP({ value, updateCounter }) {
  return (
    <div onClick={() => updateCounter()}>
      <h1> press to update value {value}</h1>
    </div>
  );
}

export default ClickCounterRP;
