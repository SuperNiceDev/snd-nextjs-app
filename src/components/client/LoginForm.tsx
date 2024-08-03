"use client";

import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginForm() {
  const { data: session, status } = useSession();
  console.log("session: ", session);
  console.log("status: ", status);

  return (
    <>
      <div>session: {JSON.stringify(session)}</div>
      <div>status: {status}</div>
      <div>
        <Button onClick={() => signIn("google")}>SignIn</Button>
      </div>
      <div>
        <Button onClick={() => signOut()}>SignOut</Button>
      </div>
    </>
  );
}
