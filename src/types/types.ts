export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  priority: 0 | 1 | 2;
};

export type TodoData = Omit<Todo, "id">;

export const priorityMap = [
  { label: "Low", value: 0 },
  { label: "Medium", value: 1 },
  { label: "High", value: 2 },
];
