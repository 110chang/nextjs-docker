import Link from "next/link";
import { fetchPosts } from "@/lib/api";

export default async function PostsPage() {
  console.log("posts page");
  const posts = await fetchPosts();
  return (
    <main>
      <h1 className="text-4xl">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
