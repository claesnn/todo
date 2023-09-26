import { TodoTable } from "./components/TodoTable";
import { useTodos } from "./store/useTodos";
import { AddTodo } from "./components/AddTodo";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="m-5">
      <div className="card">
        <AddTodo addTodo={addTodo} />
        <div className="mt-5" />
        <TodoTable
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
