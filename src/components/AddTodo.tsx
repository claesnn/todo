import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { TodoData, priorityMap } from "@/types/types";

const formSchema = z.object({
  title: z.string().min(3).max(20),
  finished: z.boolean(),
  priority: z.string(),
});

type Props = {
  addTodo: (data: TodoData) => void;
};

export function AddTodo({ addTodo }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      finished: false,
      priority: priorityMap[0],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    addTodo({
      title: data.title,
      completed: data.finished,
      priority: priorityMap.indexOf(data.priority) as 0 | 1 | 2,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <div className="flex w-full items-center space-x-2">
                  <Input placeholder="My awesome todo" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="finished"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Finished</FormLabel>
              <FormControl>
                <div className="flex w-full items-center space-x-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {priorityMap.map((p) => (
                    <SelectItem value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
}
