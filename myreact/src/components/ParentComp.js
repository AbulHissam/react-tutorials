import React, { Component } from "react";
import { PureComponent } from "react";
import PureComp from "./PureComponent";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abul",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Abul",
      });
    }, 2000);
  }

  render() {
    console.log("ParentComponent render");
    return (
      <div>
        Parent component
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
