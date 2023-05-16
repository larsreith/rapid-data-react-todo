import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { Todo } from "./TodoItem";

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
    task: "Noch eine Aufgabe",
    isCompleted: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const todos = (state: RootState) => state.todos.values;

export default todoSlice.reducer;
