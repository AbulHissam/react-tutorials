import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Counter;
