import LoginForm from "@/components/mui/LoginForm";

export default function SignInPage() {
  return (
    <div className="SignInPage twCenterContent">
      <code>{`<SignInPage>`}</code>
      <div className="tw:px-4 tw:flex">
        <div className="tw:lg:w-1/2">
          <LoginForm />
        </div>
      </div>
      <code>{`</SignInPage>`}</code>
    </div>
  );
}
