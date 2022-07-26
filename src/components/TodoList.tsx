import { observer } from "mobx-react-lite";
import todolist from "../store/todolist";
import bin from "../img/bin.svg";
import { TodoProps } from "../interfaces";

function TodoList({ listTodo }: TodoProps) {
  return (
    <div className="todoList">
      {listTodo?.map((todo?: any) => (
        <div
          className={todo.completed ? "todoItem active" : "todoItem"}
          key={todo.id}
        >
          <label className="todoCheckbox">
            <input
              onChange={() => todolist.statusTodo(todo.id)}
              checked={todo.completed}
              type="checkbox"
            ></input>
            <div className="checkbox__checkmark"></div>
            <div className="checkbox__body">{todo.title}</div>
          </label>
          <input
            onClick={() => todolist.removeTodo(todo.id)}
            type="image"
            src={bin}
          ></input>
        </div>
      ))}
    </div>
  );
}

export default observer(TodoList);
