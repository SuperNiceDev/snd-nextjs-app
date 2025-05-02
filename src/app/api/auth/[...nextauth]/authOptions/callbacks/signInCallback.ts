export async function signInCallback({ account, profile }: any) {
  if (account.provider === "google") {
    return profile.email_verified;
  }
  return true;
}
