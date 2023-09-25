import { ColumnDef } from "@tanstack/react-table";
import { Todo } from "@/types/types";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoTable({todos, toggleTodo, deleteTodo}: Props) {

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
            <Button
              className="mr-2"
              onClick={() => toggleTodo(row.row.original.id)}
            >
              Toggle
            </Button>
            <Button
              onClick={() => deleteTodo(row.row.original.id)}
            >
              Delete
            </Button>
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