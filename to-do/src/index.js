import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import "./index.css";

// const AddTask = ({ addTask }) => {
//   const [value, updateValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (value !== "") {
//       addTask(value);
//       updateValue("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={value}
//         placeholder="Enter the task to do"
//         onChange={(e) => updateValue(e.target.value)}
//       />
//       <button type="submit">
//         <ion-icon name="add"></ion-icon>
//       </button>
//     </form>
//   );
// };
// const ToDoList = () => {
//   const addTask = (text) => updateTask([...tasks, { text }]);
//   const [tasks, updateTask] = useState([]);
//   const toggleTask = (index) => {
//     const newTask = [...tasks];
//     if (newTask[index].isCompleted) {
//       newTask[index].isCompleted = false;
//     } else {
//       newTask[index].isCompleted = true;
//     }
//     updateTask(newTask);
//   };
//   const removeTask = (index) => {
//     const newTask = [...tasks];
//     newTask.splice(index, 1);
//     updateTask(newTask);
//   };
//   return (
//     <div className="list-of-tasks-todo">
//       <h1>TO DO Tasks</h1>
//       {tasks.map((task, index) => {
//         return (
//           <div className="task-status">
//             <span
//               onClick={() => toggleTask(index)}
//               className={
//                 task.isCompleted ? "task-name completed-task" : "task-name"
//               }
//             >
//               {task.text}
//             </span>
//             <button onClick={() => removeTask(index)}>
//               <ion-icon name="trash"></ion-icon>
//             </button>
//           </div>
//         );
//       })}
//       <AddTask addTask={addTask} />
//     </div>
//   );
// };
ReactDOM.render(<Clock />, document.getElementById("root"));
