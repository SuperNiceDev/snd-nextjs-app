import LoginForm from "../../../components/client/LoginForm";

export default async function SignInPage() {
  return (
    <div className="SignInPage tw:mt-10 tw:p-5 tw:pt-40">
      {`<SignInPage>`}
      <div className="tw:px-4">
        <h1 className="tw:font-bold tw:text-3xl">SignInPage</h1>
        <LoginForm />
      </div>
      {`</SignInPage>`}
    </div>
  );
}
