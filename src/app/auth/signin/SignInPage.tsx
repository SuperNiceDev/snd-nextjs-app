import LoginForm from "@/components/mui/LoginForm";

export default async function SignInPage() {
  return (
    <div className="SignInPage tw:pt-20">
      <code>{`<SignInPage>`}</code>
      <div className="tw:px-4">
        <LoginForm />
      </div>
      <code>{`</SignInPage>`}</code>
    </div>
  );
}
