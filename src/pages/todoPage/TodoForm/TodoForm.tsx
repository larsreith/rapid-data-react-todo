import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { addTodo } from "../todoSlice";
import styles from "./todoForm.module.scss";

export interface TodoFormProps {
  cta: string;
  inputLabel: string;
  abortLabel: string;
  submitLabel: string;
}

function TodoForm(props: TodoFormProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const dispatch = useAppDispatch();

  function reset() {
    setTask("");
  }

  function abort() {
    reset();
    setIsActive(false);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    dispatch(addTodo({ task }));
    reset();
  }

  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>{props.cta}</Button>
      {isActive ? (
        <form className={styles.todoForm} onSubmit={submit} onReset={abort}>
          <TextField
            value={task}
            label={props.inputLabel}
            variant="outlined"
            onChange={(event) => setTask(event.target.value)}
          />
          <div className={styles.buttonRow}>
            <Button type="reset" variant="outlined">
              {props.abortLabel}
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={task.length === 0}
            >
              {props.submitLabel}
            </Button>
          </div>
        </form>
      ) : null}
    </>
  );
}

export default TodoForm;
