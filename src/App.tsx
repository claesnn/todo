import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TodoTable } from './components/TodoTable'
import { useTodos } from './store/useTodos'
import { AddTodo } from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos()
  

  return (
    <div className='m-5'>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <AddTodo addTodo={addTodo} />
        <TodoTable todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
      <p className="read-the-docs">
        Click on the Vite! and React logos to learn more
      </p>
    </div>
  )
}

export default App
