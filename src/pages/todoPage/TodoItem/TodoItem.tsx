import styles from "./todoItem.module.scss";
import { Checkbox } from "@mui/material";

export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
  onChange?(isCompleted: boolean): void;
}

function TodoItem(todo: Todo) {
  return (
    <div
      className={`${styles.todoItem}${
        todo.isCompleted ? " " + styles["--checked"] : ""
      }`}
    >
      <Checkbox
        onChange={(event, checked) => {
          if (todo.onChange) todo.onChange(checked);
        }}
        checked={todo.isCompleted}
      />
      {todo.task}
    </div>
  );
}

export default TodoItem;
