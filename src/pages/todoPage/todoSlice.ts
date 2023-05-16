import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { Todo } from "./TodoItem/TodoItem";

const initialState: Todo[] = [
  {
    id: 1,
    task: "Erste Aufgabe",
    isCompleted: false,
  },
  {
    id: 2,
    task: "Noch eine Aufgabe",
    isCompleted: false,
  },
  {
    id: 3,
    task: "Und noch eine Aufgabe",
    isCompleted: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(state);

      const newTodo: Todo = {
        id: Date.now(),
        task: action.payload.task,
        isCompleted: false,
      };
      state.unshift(newTodo);
    },
    completeTodo: (state, action) => {
      console.log(state);

      const index = state.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      const todo = state[index];
      if (todo) todo.isCompleted = action.payload.isCompleted;
      state.slice();
    },
  },
});

export const { addTodo, completeTodo } = todoSlice.actions;

export const todos = (state: RootState) => state.todos.values;

export default todoSlice.reducer;
