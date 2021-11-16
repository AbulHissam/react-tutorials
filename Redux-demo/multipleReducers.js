const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// Action is an object with a type property
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creator is a function that returns action
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// const intialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

// const reducer = (state = intialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         // make copy of state and override numOfCakes alone
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };

//     default:
//       return state;
//   }
// };

const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecreams: 20,
};

// REDUCER
// (prevState, action) => newState
// We can use multiple initial state and they can be manged by multiple reducers(each one for each state)

const cakeReducer = (state = initialCakeState, action) => {
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

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        // make copy of state and override numOfCakes alone
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

// combining reducers
// by convention it's better to use rootReducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(rootReducer);

console.log("Intial state", store.getState());

// Subscribing is a listener which will be called on dispatch and it will return a fucntion which can be used to unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

//When we dispatch an action both the reducers will receive the action,only of them acts on them and the other simply ignores it
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
