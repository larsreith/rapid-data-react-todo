import { t } from "i18next";
import TodoItem, { Todo } from "./TodoItem";
import { useAppSelector } from "../../store/hooks";

function TodoPage() {
  const todos = useAppSelector((state) => state.todos);

  return (
    <>
      <h1>{t("pages.todo.headline")}</h1>
      {todos && todos.length > 0
        ? todos.map((todo) => {
            return (
              <TodoItem
                id={todo.id}
                task={todo.task}
                isCompleted={todo.isCompleted}
              />
            );
          })
        : t("pages.todo.empty")}
    </>
  );
}

export default TodoPage;
