import { ColumnDef } from "@tanstack/react-table";
import { Todo } from "@/types/types";
import { DataTable } from "@/components/DataTable";

export const TodoTable = ({todos, toggleTodo, deleteTodo}: {todos:Todo[], toggleTodo: (id: number) => void, deleteTodo: (id: number) => void}) => {

    const columns: ColumnDef<Todo>[] = [
        {
          header: "ID",
          accessorKey: "id",
        },
        {
          header: "Title",
          accessorKey: "title",
        },
        {
          header: "Completed",
          accessorKey: "completed",
        },
        {
          header: "Actions",
          cell: (row) => (
            <>
            <button
              className="btn btn-warning"
              onClick={() => toggleTodo(row.row.original.id)}
            >
              Toggle
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(row.row.original.id)}
            >
              Delete
            </button>
            </>
          ),
        },
      ];
    
    return (
        <DataTable<Todo, string>
        columns={columns}
        data={todos}
        />
    );
}