import React, { useState, useEffect } from "react";

function HookEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  }, [count]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={name} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click {count}
      </button>
    </div>
  );
}

export default HookEffectOne;
