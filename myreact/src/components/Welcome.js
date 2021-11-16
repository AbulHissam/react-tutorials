import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, course } = this.props;
    return (
      <h1>
        Hello {name} studying {course}
        {this.props.children}
      </h1>
    );
  }
}
export default Welcome;
