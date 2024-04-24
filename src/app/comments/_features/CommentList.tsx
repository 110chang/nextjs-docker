"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchComments } from "@/lib/api";

export default function CommentList() {
  const [comments, setComments] = useState<PostComment[]>([]);

  useEffect(() => {
    (async () => {
      const comments = await fetchComments();
      setComments(comments);
    })();
  }, []);

  return (
    <>
      {comments.length === 0 ? (
        <div>No comments...</div>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
