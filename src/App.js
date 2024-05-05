import React from "react";
import TaskInput from "./components/TaskInput";
import { Provider } from "react-redux";
import { todoStore } from "./components/utils/todoStore";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <Provider store={todoStore}>
      <div className="appContainer">
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};
export default App;
