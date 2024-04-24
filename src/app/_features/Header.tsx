"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center">
      <h1 className="text-2xl">
        <Link href="/">Home</Link>
      </h1>
      <nav className="flex gap-2 ml-4">
        <Link href="/posts">Posts</Link>
        <Link href="/todos">Todos</Link>
      </nav>
    </header>
  );
}
