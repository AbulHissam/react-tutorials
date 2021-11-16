import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          // This is not the safe way of updating count.We need to use previous state value and update it
          // return setCount(count + 1);
          // To use previous state pass a function the the setter method
          return setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >
        Click {count}
      </button>
    </div>
  );
}

export default HookCounter;
