import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],

  reducers: {
    addToDo: (state, action) => {
      const newToDo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newToDo);
    },
    deleteToDo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});
export const { addToDo, deleteToDo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
