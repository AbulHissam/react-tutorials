import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
    // Option 3
    // this.clickHandler = this.clickHandler.bind(this);
  }
  // clickHandler() {
  //   this.setState({ message: "Goodbye" });
  // }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Option 1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Option 2 */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Option 3 */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* Option 4 */}
        <button onClick={() => this.setState({ message: "GoodBye" })}>
          Click
        </button>
      </div>
    );
  }
}
export default EventBind;
