import dynamic from "next/dynamic";
// NOTE: force CSR
// import CommentList from "./_features/CommentList";
const CommentList = dynamic(() => import("./_features/CommentList"), {
  ssr: false,
});

// NOTE: SSG + force CSR
export default async function CommentsPage() {
  return (
    <main>
      <h1 className="text-4xl">Comments</h1>
      <CommentList />
    </main>
  );
}
