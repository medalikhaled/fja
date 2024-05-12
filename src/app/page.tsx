"use client";
import Link from "next/link";
import { Dashboard } from "~/components/layouts/Dashboard";
import { SessionProvider, useSession } from "next-auth/react";

export default function HomePage() {
  return (
    <SessionProvider>
      <Index />
    </SessionProvider>
  );
}

function Index() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }

  return <Link href="/api/auth/signin">Sign in</Link>;
}
