import { t } from "i18next";
import TodoItem from "./TodoItem/TodoItem";
import { useAppSelector } from "../../store/hooks";
import TodoForm from "./TodoForm/TodoForm";
import styles from "./todoPage.module.scss";

function TodoPage() {
  const todos = useAppSelector((state) => state.todos);

  return (
    <div className={styles.page}>
      <h1>{t("pages.todo.headline")}</h1>
      <TodoForm
        cta={t("pages.todo.form.cta")}
        inputLabel={t("pages.todo.form.inputLabel")}
        abortLabel={t("pages.todo.form.abortButton")}
        submitLabel={t("pages.todo.form.submitButton")}
      />
      <div className={styles.todoList}>
        {todos && todos.length > 0
          ? todos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  isCompleted={todo.isCompleted}
                />
              );
            })
          : t("pages.todo.empty")}
      </div>
    </div>
  );
}

export default TodoPage;
