import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: crypto.randomUUID(), task: "Workout", completed: false },
  { id: crypto.randomUUID(), task: "Study", completed: false },
  { id: crypto.randomUUID(), task: "Bath", completed: true },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toggle: (state, action) => {
      state.map((item) => {
        
        if (item.id == action.payload) {
          return (item.completed = !item.completed);
        }
      });
    },
  },
});
export const { addTodo, removeTodo, toggle } = todoSlice.actions;

export default todoSlice.reducer;
