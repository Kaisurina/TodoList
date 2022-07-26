import { observer } from "mobx-react-lite";
import todolist from "../store/todolist";

function TodoFilter() {
  return (
    <div className="todoFilter">
      <button
        className={todolist.filterCompleted ? "btn active" : "btn"}
        onClick={() => {
          todolist.showUncompleted(false);
          todolist.showOnlyCompleted(!todolist.filterCompleted);
        }}
      >
        Выполненные задачи
      </button>
      <button
        className={todolist.filterUncompleted ? "btn active" : "btn"}
        onClick={() => {
          todolist.showOnlyCompleted(false);
          todolist.showUncompleted(!todolist.filterUncompleted);
        }}
      >
        Невыполненные задачи{" "}
      </button>
    </div>
  );
}

export default observer(TodoFilter);
