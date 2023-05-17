import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import { useState } from "react";
import styles from "./todoItem.module.scss";

export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
  onChange?(isCompleted: boolean): void;
  onDelete?(): void;
}

function TodoItem(todo: Todo) {
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] =
    useState<boolean>(false);

  return (
    <div
      className={`${styles.todoItem}${
        todo.isCompleted ? " " + styles["--checked"] : ""
      }`}
      onMouseEnter={() => setIsDeleteButtonVisible(true)}
      onMouseLeave={() => setIsDeleteButtonVisible(false)}
    >
      <div>
        <Checkbox
          onChange={(event, checked) => {
            if (todo.onChange) todo.onChange(checked);
          }}
          checked={todo.isCompleted}
        />
      </div>
      <div className={styles.task}>{todo.task}</div>
      <div className={styles.deleteButtonContainer}>
        {isDeleteButtonVisible ? (
          <IconButton
            onClick={() => {
              if (todo.onDelete) todo.onDelete();
            }}
          >
            <Delete />
          </IconButton>
        ) : null}
      </div>
    </div>
  );
}

export default TodoItem;
