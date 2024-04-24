import { fetchPost, fetchPosts } from "@/lib/api";

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({
    params: { postId: `${post.id}` },
  }));
}

export default async function PostDetailPage({
  params,
}: {
  params: { postId: string };
}) {
  const post = await fetchPost(params.postId);
  return (
    <main>
      <h1 className="text-4xl">{post.title}</h1>
      <div>{post.body}</div>
    </main>
  );
}