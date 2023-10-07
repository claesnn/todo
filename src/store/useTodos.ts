import { useState, useRef } from "react";
import { todos as initialData } from "@/data/todos";

export const useTodos = () => {
  const [todos, setTodos] = useState(initialData);
  const nextId = useRef(todos.length + 1);

  const addTodo = (title: string, finished: boolean) => {
    const newTodo = {
      id: nextId.current++,
      title,
      completed: finished,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
