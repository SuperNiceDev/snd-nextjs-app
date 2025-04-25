import { NextAuthOptions } from "next-auth";

import { jwtCallback } from "@/app/api/auth/[...nextauth]/authOptions/callbacks/jwtCallback";
import { sessionCallback } from "@/app/api/auth/[...nextauth]/authOptions/callbacks/sessionCallback";
import { signInCallback } from "@/app/api/auth/[...nextauth]/authOptions/callbacks/signInCallback";
import { googleProvider } from "@/app/api/auth/[...nextauth]/authOptions/providers/googleProvider";
import { linkedinProvider } from "@/app/api/auth/[...nextauth]/authOptions/providers/linkedinProvider";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [googleProvider, linkedinProvider],
  session: { strategy: "jwt" },
  jwt: { secret: process.env.NEXTAUTH_SECRET },
  callbacks: {
    signIn: signInCallback,
    jwt: jwtCallback,
    session: sessionCallback,
  },
};
