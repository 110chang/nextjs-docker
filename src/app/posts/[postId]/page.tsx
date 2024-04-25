import { fetchPost } from "@/lib/api";

export async function generateStaticParams() {
  // NOTE: ビルド時の生成を避けつつISRを有効にするにはgenerateStaticParamsで空の配列を返す
  // const posts = await fetchPosts();
  // return posts.map((post) => ({
  //   postId: `${post.id}`,
  // }));
  return [];
}

// NOTE: SSG (revalidate in 10s)
export default async function PostDetailPage({
  params,
}: {
  params: { postId: string };
}) {
  console.log(`post ${params.postId} page`);
  const post = await fetchPost(params.postId);
  return (
    <main>
      <h1 className="text-4xl">{post.title}</h1>
      <div>{post.body}</div>
    </main>
  );
}
