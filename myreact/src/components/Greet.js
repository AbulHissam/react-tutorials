import React from "react";

// function Greet() {
//   return <h1>Hello Abul</h1>;
// }
const Greet = (props) => {
  console.log(props);
  const { name, course } = props;
  return (
    <h1>
      Hello {name} studying {course}
    </h1>
  );
};

export default Greet;
