import { useState, useReducer } from 'react'
import { Button } from '@/components/ui/button'
import { AppContext } from '@/store/context'
import { reducer } from '@/store/reducer'
import { todos } from '@/data/todos'
import { TodoTable } from './components/TodoTable'

const initialState = {
  todos: todos,
}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='m-5'>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <TodoTable />
        </div>
        <p className="read-the-docs">
          Click on the Vite! and React logos to learn more
        </p>
      </div>
    </AppContext.Provider>
  )
}

export default App
