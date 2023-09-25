import { ColumnDef } from "@tanstack/react-table";
import { Todo } from "@/types/types";
import { DataTable } from "@/components/DataTable";
import { useAppContext } from "@/store/context";

export function TodoTable() {
    const { state } = useAppContext();

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
      ];
    
    return (
        <DataTable<Todo, string>
        columns={columns}
        data={state.todos}
        />
    );
}