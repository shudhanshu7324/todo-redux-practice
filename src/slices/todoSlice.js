import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  //name
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload.text);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
