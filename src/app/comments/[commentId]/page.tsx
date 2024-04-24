import { fetchComment } from "@/lib/api";

// NOTE: SSR
export default async function CommentDetailPage({
  params,
}: {
  params: { commentId: string };
}) {
  console.log(`comment ${params.commentId} page`);
  const comment = await fetchComment(params.commentId);
  return (
    <main>
      <h1 className="text-4xl">{comment.name}</h1>
      <div>{comment.body}</div>
    </main>
  );
}
