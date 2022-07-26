import { observer } from "mobx-react-lite";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoHeader from "./TodoHeader";
import { TodoProps } from "../interfaces";

function Todo({ listTodo }: TodoProps) {
  console.log(listTodo);
  return (
    <div className="wrapper">
      <TodoHeader />
      <TodoFilter />
      <TodoList listTodo={listTodo} />
    </div>
  );
}

export default observer(Todo);
