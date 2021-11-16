import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

function Clock() {
  const [time, updateTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    let intervalId = setInterval(() => {
      updateTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return <div>{time}</div>;
}

export default Clock;
