// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import NameList from "./components/NameList";
// import StyleSheet from "./components/Stylesheet";
// import Inline from "./components/Inline";
// import style from "./appStyle.module.css";
// import Form from "./components/Form";
// import PureComp from "./components/PureComponent";
// import ParentComp from "./components/ParentComp";
import "./App.css";
import "./appStyles.css";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import ClickCounterTwo from "./components/RenderProps/ClickCounterTwo";

import Counter from "./components/RenderProps/Counter";

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <Message /> */}
      {/* <Greet name="Abul" course="CSE" /> */}
      {/* <Greet name="Hissam" course="EEE" /> */}
      {/* <Welcome name="Abul" course="CSE">
        <p>Something Heading</p>
      </Welcome> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={style.success}>Success</h1> */}
      {/* <Form /> */}
      {/* <ParentComp /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      <Counter
        // render is method which is passed a prop to Counter component
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
