import { fetchUser, fetchUsers } from "@/lib/api";

export async function generateStaticParams() {
  const users = await fetchUsers();
  return users.map((user) => ({ userId: `${user.id}` }));
}

// NOTE: SSG (can revalidate on demand)
export default async function UserDetailPage({
  params,
}: {
  params: { userId: string };
}) {
  console.log(`user ${params.userId} page`);
  const user = await fetchUser(params.userId);
  return (
    <main>
      <h1 className="text-4xl">{user.name}</h1>
      <div>{user.phone}</div>
    </main>
  );
}
