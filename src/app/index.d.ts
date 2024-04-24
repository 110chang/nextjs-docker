declare interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

declare interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

declare interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

declare interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
