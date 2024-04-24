import Link from "next/link";
import { fetchTodos } from "@/lib/api";

export default async function TodosPage() {
  console.log("todos page");
  const todos = await fetchTodos();
  return (
    <main>
      <h1 className="text-4xl">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
