import Todo from "./components/Todo";
import todolist from "../src/store/todolist";
import { observer } from "mobx-react-lite";

function App() {
  return (
    <div className="App">
      <Todo listTodo={todolist.acceptFilters()} />
    </div>
  );
}

export default observer(App);
