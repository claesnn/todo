export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export interface State {
  todos: Todo[];
}

export type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };


export type StateContext = {
  state: State;
  dispatch: React.Dispatch<Action>;
};