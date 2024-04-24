export async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  return posts;
}

export async function fetchPost(postId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post: Post = await res.json();
  return post;
}
