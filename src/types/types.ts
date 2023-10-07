export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  priority: 0 | 1 | 2;
};

export type TodoData = Omit<Todo, "id">;

export const priorityMap = ["Low", "Medium", "High"];
