import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={(e) => {
            return setName({ ...name, firstName: e.target.value });
          }}
        />
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={(e) => {
            return setName({ ...name, lastName: e.target.value });
          }}
        />
      </form>
      <div>Your Firstname is:{name.firstName}</div>
      <div>Your Lastname is:{name.lastName}</div>
      <div>{JSON.stringify(name)}</div>
    </div>
  );
}
export default HookCounterThree;
