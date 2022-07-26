import { observer } from "mobx-react-lite";
import todolist from "../store/todolist";

function TodoHeader() {
  return (
    <div className="todoHeader">
      <label htmlFor="inp" className="inp">
        <input
          id="inp"
          onChange={(e) => {
            todolist.changeInputData(e.target.value);
          }}
          value={todolist.inputData}
          placeholder="&nbsp;"
        ></input>
        <span className="label">Введите...</span>
        <span className="focus-bg"></span>
      </label>
      <button
        className="btn"
        onClick={() => {
          todolist.addTodo(todolist.inputData);
          todolist.changeInputData("");
        }}
      >
        Создать
      </button>
    </div>
  );
}

export default observer(TodoHeader);
