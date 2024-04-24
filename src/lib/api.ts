export async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  return posts;
}

export async function fetchPost(postId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { next: { revalidate: 10 } }
  );
  const post: Post = await res.json();
  return post;
}

export async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });
  const todos: Todo[] = await res.json();
  return todos;
}

export async function fetchTodo(todoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo: Todo = await res.json();
  return todo;
}

export async function fetchComments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments: PostComment[] = await res.json();
  return comments;
}

export async function fetchComment(commentId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`
  );
  const comment: PostComment = await res.json();
  return comment;
}
