import styles from "./todoItem.module.scss";

export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

function TodoItem(todo: Todo) {
  return <div className={styles.todoItem}>{todo.task}</div>;
}

export default TodoItem;
