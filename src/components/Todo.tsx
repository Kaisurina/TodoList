import { Todos } from "../interfaces";
import { observer } from "mobx-react-lite";
import todolist from "../store/todolist";

interface TodoProps {
  listTodo: Todos[];
}

function Todo({ listTodo }: TodoProps) {
  return (
    <div>
      <input
        onChange={(e) => {
          todolist.changeInputData(e.target.value);
        }}
        value={todolist.inputData}
        placeholder="Введите..."
      ></input>
      <button
        onClick={() => {
          todolist.addTodo(todolist.inputData);
          todolist.changeInputData("");
        }}
      >
        Создать
      </button>
      {listTodo.map((todo) => (
        <div
          className={todo.completed ? "todoItem active" : "todoItem"}
          key={todo.id}
        >
          <input
            onChange={() => todolist.statusTodo(todo.id)}
            checked={todo.completed}
            type={"checkbox"}
          ></input>
          {todo.title}
          <button onClick={() => todolist.removeTodo(todo.id)}>x</button>
        </div>
      ))}
      <div>
        <button
          onClick={() => {
            todolist.showUncompleted(false);
            todolist.showOnlyCompleted(!todolist.filterCompleted);
          }}
        >
          Показать выполненные{" "}
          <span>{todolist.filterCompleted ? "x" : ""}</span>
        </button>
        <button
          onClick={() => {
            todolist.showOnlyCompleted(false);
            todolist.showUncompleted(!todolist.filterUncompleted);
          }}
        >
          Показать невыполненные{" "}
          <span>{todolist.filterUncompleted ? "x" : ""}</span>
        </button>
      </div>
    </div>
  );
}

export default observer(Todo);
