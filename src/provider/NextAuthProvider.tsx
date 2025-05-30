"use client";

import { ReactNode } from "react";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
  session?: Session | null;
};

export default function NextAuthProvider({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
