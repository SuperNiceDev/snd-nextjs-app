"use client";

import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import ReactJson from "@/components/ReactJson";

const signinUrl = "/auth/signin";

export default function LoginForm() {
  const [data, setData] = useState<Session | undefined | null>();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  // const callbackUrl = searchParams.get("callbackUrl");

  useEffect(() => {
    setData(session);
  }, [session]);

  const onSignInBtnClick = (provider: string) => () => {
    signIn(provider, { callbackUrl: signinUrl }, "TEST_TEST_TEST");
  };

  const onSignOutBtnClick = () => {
    signOut({ callbackUrl: signinUrl });
  };

  // console.log("data: ", data);

  return (
    <div className="LoginForm">
      <code>{`<LoginForm>`}</code>
      <div className="px-4">
        <div className="mb-4">
          {error && <div className="text-red-600">error: {error}</div>}
          <div>
            <b>status: </b>
            {status}
          </div>
          <div className="wrap-break-word">
            <b>session: </b>
            {data && <ReactJson src={data} />}
          </div>
        </div>
        {!session && (
          <>
            <div>
              <Button
                className="mb-2"
                variant="outlined"
                onClick={onSignInBtnClick("google")}
              >
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
