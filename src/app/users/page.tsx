import Link from "next/link";
import { fetchUsers } from "@/lib/api";

// NOTE: SSG (can revalidate on demand)
export default async function UsersPage() {
  console.log("users page");
  const users = await fetchUsers();
  return (
    <main>
      <h1 className="text-4xl">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
