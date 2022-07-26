export interface Todos {
  id: number;
  title: string;
  completed: boolean;
}
export interface TodoProps {
  listTodo?: Todos[];
}
