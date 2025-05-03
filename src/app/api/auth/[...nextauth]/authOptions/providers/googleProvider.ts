import GoogleProvider from "next-auth/providers/google";

export const googleProvider = GoogleProvider({
  clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET as string,
});
