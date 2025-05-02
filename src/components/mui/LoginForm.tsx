"use client";

import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const signinUrl = "/auth/signin";

export default function LoginForm() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  // const callbackUrl = searchParams.get("callbackUrl");

  const onSignInBtnClick = (provider: string) => () => {
    signIn(provider, { callbackUrl: signinUrl });
  };

  const onSignOutBtnClick = () => {
    signOut({ callbackUrl: signinUrl });
  };

  // console.log("error: ", error);

  return (
    <div className="LoginForm">
      <code>{`<LoginForm>`}</code>
      <div className="tw:px-4">
        {error && <div className="tw:text-red-600">error: {error}</div>}
        <div>session: {JSON.stringify(session)}</div>
        <div>status: {status}</div>
        {!session && (
          <>
            <div>
              <Button variant="outlined" onClick={onSignInBtnClick("google")}>
                SignIn Google
              </Button>
            </div>
            <div>
              <Button variant="outlined" onClick={onSignInBtnClick("linkedin")}>
                SignIn LinkedIn
              </Button>
            </div>
          </>
        )}

        {session && (
          // {true && (
          <div>
            <Button variant="outlined" onClick={onSignOutBtnClick}>
              SignOut
            </Button>
          </div>
        )}
      </div>
      <code>{`<LoginForm>`}</code>
    </div>
  );
}
