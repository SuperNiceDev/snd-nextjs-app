import LoginForm from "@/components/mui/LoginForm";

export default function SignInPage() {
  return (
    <div className="SignInPage twCenterContent">
      <code>{`<SignInPage>`}</code>
      <div className="px-4 flex">
        <div className="lg:w-1/2">
          <LoginForm />
        </div>
      </div>
      <code>{`</SignInPage>`}</code>
    </div>
  );
}
