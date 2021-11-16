const redux = require("redux");
const createStore = redux.createStore;
// Action is an object with a type property
const BUY_CAKE = "BUY_CAKE";
// Action creator is a function that returns action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// REDUCER
// (prevState, action) => newState
// We can suse multiple initial state and they can
const intialState = {
  numOfCakes: 10,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // make copy of state and override numOfCakes alone
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Intial state", store.getState());
// Subscribing is a listener which will be called on dispatch and it will return a fucntion which can be used to unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
