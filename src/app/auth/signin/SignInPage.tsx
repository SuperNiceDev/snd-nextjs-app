import LoginForm from "../../../components/client/LoginForm";

export default async function SignInPage() {
  return (
    <div className="tw-p-5 tw-pt-40">
      <h1 className="font-bold text-3xl">{`<SignInPage />`}</h1>
      <LoginForm />
    </div>
  );
}
