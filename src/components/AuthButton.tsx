"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span>Olá {session.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("azure-ad")}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Entrar com Microsoft 365
    </button>
  );
}
