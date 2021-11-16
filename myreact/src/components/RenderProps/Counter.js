import React, { Component } from "react";
//Counter is the component which takes care of the common functionality or common code
// render()->It is a method passed down as a prop from the Parent component and current state.count and incrementCount are passed as params .render is a naming convention here
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}
export default Counter;
