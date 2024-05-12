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
    return (
      <main>
        <p>Signed in as {session.user.email}</p>
        <Link href="/dashboard">Dashboard</Link>
      </main>
    );
  }

  return <Link href="/api/auth/signin">Sign in</Link>;
}
/**
 * deployment, ci
 * local testing docker compose file for db
 * add loading state
 * tranistion between pages
 * login form
 * more login options
 * role based auth
 * pre registered email list
 * middleware for authorization (protected routes)
 * zustand/jotai state management for dashboard (naviation, subnavigation)
 * landing page UI
 * add custom FJA identity to the Dashboard design
 * animate FJA Logo (rive)
 * Implement Email Client UI to send emails (resend, react email)
 * professional email & domain name
 * e2e testing
 * add plausible
 */
