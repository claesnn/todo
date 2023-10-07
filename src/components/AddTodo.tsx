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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

// TODO: Make it possible to submit on enter

const formSchema = z.object({
  title: z.string().min(3).max(20),
  finished: z.boolean(),
});

type Props = {
  addTodo: (title: string, finished: boolean) => void;
};

export function AddTodo({ addTodo }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      finished: false,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    addTodo(data.title, data.finished);
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
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
}
