import { useRouter } from "next/router";

export default function ErrorPage() {
  const { query } = useRouter();
  const error = query.error;

  let errorMessage = "An unknown error occurred.";
  if (error === "InvalidGoogleDomain") {
    errorMessage = "You must sign in with a company email.";
  } else if (error === "OAuthAccountNotLinked") {
    errorMessage =
      "This account is already linked with another sign-in method.";
  }

  return (
    <div>
      <h1>Sign-in Error</h1>
      <p>{errorMessage}</p>
    </div>
  );
}
