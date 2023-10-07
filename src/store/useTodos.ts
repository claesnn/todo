import { useState, useRef } from "react";
import { todos as initialData } from "@/data/todos";
import { TodoData } from "@/types/types";

export const useTodos = () => {
  const [todos, setTodos] = useState(initialData);
  const nextId = useRef(todos.length + 1);

  const addTodo = (data: TodoData) => {
    const newTodo = {
      id: nextId.current++,
      title: data.title,
      completed: data.completed,
      priority: data.priority,
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
