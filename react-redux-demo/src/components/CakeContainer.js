// https://react-redux.js.org/using-react-redux/connect-mapstate

// https://react-redux.js.org/using-react-redux/connect-mapdispatch

import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes-{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>BuyCake</button>
    </div>
  );
}

// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// The mapDispatchToProps function will be called with dispatch as the first argument.
// You will normally make use of this by returning new functions that call dispatch() inside themselves, and either pass in a plain action object directly or pass in the result of an action creator.
const mapDispatchToPops = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToPops)(CakeContainer);
