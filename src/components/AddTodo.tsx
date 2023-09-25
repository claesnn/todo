import { useState } from "react"

export function AddTodo({addTodo}: {addTodo: (title: string) => void}) {

    const [title, setTitle] = useState('')
    return (
        <div className="card">
        <div className="card-header">
            <h3 className="card-title">Add Todo</h3>
        </div>
        <div className="card-body">
            <div className="form-group">
            <label htmlFor="todo-title">Title</label>
            <input
                id="todo-title"
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <button
            className="btn btn-primary"
            onClick={() => {
                addTodo && addTodo(title)
                setTitle('')
            }}
            >
            Add Todo
            </button>
        </div>
        </div>
    )
    }