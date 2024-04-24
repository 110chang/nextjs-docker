"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center">
      <h1 className="text-2xl">
        <Link href="/">Home</Link>
      </h1>
      <nav className="flex gap-2 ml-4">
        <Link href="/posts">Posts (SSG/ISR)</Link>
        <Link href="/todos">Todos (SSR)</Link>
        <Link href="/comments">Comments (force CSR)</Link>
        <Link href="/users">Users (On demand ISR)</Link>
      </nav>
    </header>
  );
}
