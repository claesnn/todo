import { ColumnDef } from "@tanstack/react-table";
import { Todo, priorityMap } from "@/types/types";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/DataTableHeader";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

// TODO: Make list paginatable
// TODO: Make list editable
// TODO: Make list exportable
// TODO: Make list importable
// TODO: Make completed column a checkbox

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoTable({ todos, toggleTodo, deleteTodo }: Props) {
  const columns: ColumnDef<Todo>[] = [
    {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
      accessorKey: "id",
    },
    {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      accessorKey: "title",
    },
    {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Priority" />
      ),
      accessorKey: "priority",
      cell: (row) => priorityMap[row.row.original.priority],
    },
    {
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Completed" />
      ),
      accessorKey: "completed",
      cell: (row) =>
        row.row.original.completed ? <CheckIcon /> : <Cross1Icon />,
    },
    {
      header: "Actions",
      cell: (row) => (
        <>
          <Button
            className="mr-2"
            onClick={() => toggleTodo(row.row.original.id)}
          >
            {row.row.original.completed ? "Reopen" : "Finish"}
          </Button>
          <Button onClick={() => deleteTodo(row.row.original.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return <DataTable<Todo, string> columns={columns} data={todos} />;
}
