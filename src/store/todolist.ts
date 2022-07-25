import { makeAutoObservable } from "mobx";
import { Todos } from "../interfaces";

class Todo {
  todos: Todos[] = [
    { id: 1, title: "Сделать домашнее задание", completed: false },
    { id: 2, title: "Выгулять собаку", completed: false },
    { id: 3, title: "Сходить в магазин", completed: true },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  inputData: string = "";

  filterCompleted: boolean = false;

  filterUncompleted: boolean = false;

  addTodo(todo: string) {
    const newTodo: Todos = {
      id: Number(new Date()),
      title: todo,
      completed: false,
    };
    this.todos.push(newTodo);
    console.log(newTodo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((el) => el.id !== id);
  }

  statusTodo(id: number) {
    this.todos.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
    });
  }

  changeInputData(value: string) {
    this.inputData = value;
  }

  showOnlyCompleted(value: boolean) {
    this.filterCompleted = value;
  }

  showUncompleted(value: boolean) {
    this.filterUncompleted = value;
    return this.todos.filter((e) => e.completed);
  }

  acceptFilters() {
    if (!this.filterUncompleted && !this.filterCompleted) return this.todos;
    if (this.filterUncompleted) return this.todos.filter((e) => !e.completed);
    if (this.filterCompleted) return this.todos.filter((e) => e.completed);
  }
}

export default new Todo();
