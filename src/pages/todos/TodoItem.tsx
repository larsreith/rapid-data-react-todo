export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

function TodoItem(todo: Todo) {
  return <div>{todo.task}</div>;
}

export default TodoItem;
