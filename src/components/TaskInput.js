import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./utils/todoSlice";

const TaskInput = () => {
  const [todoValue, setToDoValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo({ title: todoValue }));
    setToDoValue("");
  };
  return (
    <div className="container py-3 task-input">
      <h1 className="bg-success fw-bold text-white rounded-3 heading">
        To-Do app
      </h1>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <input
              type="input"
              value={todoValue}
              onChange={(e) => setToDoValue(e.target.value)}
              placeholder="create task..."
              className="form-control"
            ></input>
            <button type="submit" className="btn btn-primary fw-bold my-2">
              Add+
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TaskInput;
