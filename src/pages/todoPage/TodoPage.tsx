import { t } from "i18next";
import TodoItem, { Todo } from "./TodoItem/TodoItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import TodoForm from "./TodoForm/TodoForm";
import styles from "./todoPage.module.scss";
import { completeTodo, deleteTodo } from "./todoSlice";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

function TodoPage() {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [deleteTodoItem, setDeleteTodoItem] = useState<Todo>();
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  function confirmDeletion() {
    setIsDeleteDialogOpen(false);
    dispatch(deleteTodo({ id: deleteTodoItem?.id }));
    setDeleteTodoItem(undefined);
  }

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
                  onChange={(value) => {
                    dispatch(completeTodo({ id: todo.id, isCompleted: value }));
                  }}
                  onDelete={() => {
                    setDeleteTodoItem(todo);
                    setIsDeleteDialogOpen(true);
                  }}
                />
              );
            })
          : t("pages.todo.empty")}
      </div>
      <Dialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
      >
        <DialogTitle>{t("pages.todo.deleteDialog.title")}</DialogTitle>
        <DialogContent>
          <DialogContentText>{deleteTodoItem?.task}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)}>
            {t("pages.todo.deleteDialog.abort")}
          </Button>
          <Button variant="contained" onClick={confirmDeletion}>
            {t("pages.todo.deleteDialog.confirm")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TodoPage;
