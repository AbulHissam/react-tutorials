import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  // Second argument to useEffect is a array and it represents dependency list
  // state and props can be passed in this list and React will re render only if any values of the dependencies change
  // [] signifes it's not depedent on any state or props and will render only once.similar to componentDidMount
  useEffect(() => {
    console.log("Mouse event called");
    window.addEventListener("mousemove", logMouseMove);

    // Cleanup function
    // A function can be returned and it will execute after excuting the useEffect's callback function
    return () => {
      window.removeEventListener("mousemove", logMouseMove);
    };
  }, []);
  return (
    <div>
      Mouse X-{x} Y-{y}
    </div>
  );
}

export default HookMouse;
