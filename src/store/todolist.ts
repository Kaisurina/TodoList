import { makeAutoObservable } from "mobx";
import { Todos } from "../interfaces";

class Todo {
  todos: Todos[] = [
    { id: 1, title: "Сделать домашнее задание", completed: false },
    { id: 2, title: "Тестовое задание", completed: false },
    { id: 3, title: "Сходить в магазин", completed: true },
    { id: 4, title: "Позвонить маме", completed: false },
    {
      id: 5,
      title: "Do something nice for someone I care about",
      completed: true,
    },
    { id: 6, title: "Сделать что-нибудь", completed: false },
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
      title: todo || "Пустая задача",
      completed: false,
    };
    this.todos.push(newTodo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((el) => el.id !== id);
  }

  statusTodo(id: number) {
    this.todos.map((el) =>
      el.id === id ? (el.completed = !el.completed) : null
    );
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
