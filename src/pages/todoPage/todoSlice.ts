import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { Todo } from "./TodoItem/TodoItem";

const initialState: Todo[] = [
  {
    id: 1,
    task: "Willkommen bei deiner Aufgabenübersicht.",
    isCompleted: false,
  },
  {
    id: 2,
    task: "Hier kannst du neue Aufgaben erstellen.",
    isCompleted: false,
  },
  {
    id: 3,
    task: "Erledigte Ausgaben kannst du abhaken oder löschen.",
    isCompleted: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: Date.now(),
        task: action.payload.task,
        isCompleted: false,
      };
      state.unshift(newTodo);
    },
    completeTodo: (state, action) => {
      const index = state.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      const todo = state[index];
      if (todo) todo.isCompleted = action.payload.isCompleted;
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      state.splice(index, 1);
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;

export const todos = (state: RootState) => state.todos.values;

export default todoSlice.reducer;
