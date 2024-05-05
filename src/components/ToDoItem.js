import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo, toggleComplete } from "./utils/todoSlice";

const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteToDo({ id: todo.id }));
  };
  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }));
  };
  return (
    <li
      className={`list-group-item ${
        todo.completed && "list-group-item-success"
      }`}
    >
      <div className="d-flex align-items-center todo-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCompleteClick}
          className="form-check-input me-3 border-black "
        ></input>
        <label className="form-check-label me-auto">{todo.title}</label>
        <button className="btn btn-danger fw-bold" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default ToDoItem;
