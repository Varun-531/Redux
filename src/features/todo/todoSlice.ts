import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Todo } from "@/lib/type";

const initialState = {
  todos: [] as Todo[],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("Adding Todo:", action.payload);
      if (!action.payload || action.payload.trim() === "") return;
      const todo: Todo = { id: nanoid(), title: action.payload };
      state.todos.push(todo);
      console.log("Updated Todos:", state.todos);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); // Ensure the correct id is used
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
    removeAll: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo, updateTodo, removeAll } = todoSlice.actions;
export default todoSlice.reducer;
