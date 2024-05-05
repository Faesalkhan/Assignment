import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const TaskList = () => {
  const allToDo = useSelector((store) => store.todo);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {allToDo.map((todo) => (
              <ToDoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TaskList;
