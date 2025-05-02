import GoogleProvider from "next-auth/providers/google";

export const googleProvider = GoogleProvider({
  // https://next-auth.js.org/providers/google
  // https://console.cloud.google.com/auth/clients/551670901458-q7q1j4c7f1rs187o7hi8gcsei64be523.apps.googleusercontent.com
  clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET as string,
  // authorization: {
  //   params: {
  //     prompt: "consent",
  //     access_type: "offline",
  //     response_type: "code",
  //   },
  // },
});
