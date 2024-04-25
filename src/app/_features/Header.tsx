"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = async () => {
    await fetch("/api/login", { method: "POST", cache: "no-cache" });
    location.href = "/todos";
  };

  const logout = async () => {
    await fetch("/api/logout", { method: "POST", cache: "no-cache" });
    location.href = "/";
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/login", {
        method: "GET",
        cache: "no-cache",
      });
      setIsLoggedIn(res.ok);
    })();
  });

  return (
    <header className="flex items-center">
      <h1 className="text-2xl">
        <Link href="/" className={`${isLoggedIn && "line-through"}`}>
          Home
        </Link>
      </h1>
      <nav className="flex gap-2 ml-4">
        <Link href="/posts">Posts (SSG/ISR)</Link>
        <Link href="/todos" className={`${!isLoggedIn && "line-through"}`}>
          Todos (SSR)
        </Link>
        <Link href="/comments" className={`${!isLoggedIn && "line-through"}`}>
          Comments (force CSR)
        </Link>
        <Link href="/users" className={`${!isLoggedIn && "line-through"}`}>
          Users (On demand ISR)
        </Link>
      </nav>
      <nav className="flex gap-2 ml-auto">
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </nav>
    </header>
  );
}
