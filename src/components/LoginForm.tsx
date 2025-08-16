"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import ReactJson from "@/components/ReactJson";
import { Button } from "@/components/ui/button";

const signinUrl = "/auth/signin";

export default function LoginForm() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  // const callbackUrl = searchParams.get("callbackUrl");

  const onSignInBtnClick = (provider: string) => () => {
    signIn(
      provider,
      { callbackUrl: signinUrl },
      // { key1: "value1", key2: "value2" },
    );
  };

  const onSignOutBtnClick = () => {
    signOut({ callbackUrl: signinUrl });
  };

  // console.log("data: ", data);

  return (
    <div className="LoginForm">
      <code>{`<LoginForm>`}</code>
      <div className="px-4">
        {!session && (
          <>
            <div>
              <Button
                className="mb-2"
                variant="default"
                onClick={onSignInBtnClick("google")}
              >
                SignIn Google
              </Button>
            </div>
            <div>
              <Button
                className="mb-2"
                variant="default"
                onClick={onSignInBtnClick("linkedin")}
              >
                SignIn LinkedIn
              </Button>
            </div>
          </>
        )}

        {session && (
          <div>
            <Button variant="default" onClick={onSignOutBtnClick}>
              SignOut
            </Button>
          </div>
        )}

        <div className="">
          {error && <div className="text-red-600">error: {error}</div>}
          <div>
            <b>status: </b>
            {status}
          </div>
          <div className="wrap-break-word">
            <b>session: </b>
            <ReactJson src={session} />
          </div>
        </div>
      </div>
      <code>{`<LoginForm>`}</code>
    </div>
  );
}
