import { fetchTodo } from "@/lib/api";

// NOTE: SSR
export default async function TodoDetailPage({
  params,
}: {
  params: { todoId: string };
}) {
  console.log(`todo ${params.todoId} page`);
  const todo = await fetchTodo(params.todoId);
  return (
    <main>
      <h1 className="text-4xl">{todo.title}</h1>
      <div>{todo.completed ? "done" : "not yet"}</div>
    </main>
  );
}
