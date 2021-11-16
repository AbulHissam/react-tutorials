import React from "react";
// Higher order component takes original component as an input and returns an enhanced version of the component
// withCounter=>function which will enhance the original componet
// WrappedComponent->Orginal component
// WithCounter->new Enhanced component

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return WithCounter;
};
export default withCounter;
