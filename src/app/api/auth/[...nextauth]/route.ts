import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";

const STRAPI_DOMAIN = process.env.NEXT_PUBLIC_CMS_DOMAIN;

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    LinkedinProvider({
      // https://www.linkedin.com/developers/apps/219502882/auth
      // http://localhost:3000/api/auth/callback/linkedin
      clientId: process.env.NEXTAUTH_LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_LINKEDIN_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async signIn({ account, profile }: any) {
      // console.log("--------------------------------");
      // console.log("signIn() account: ", account);
      // console.log("--------------------------------");
      if (account.provider === "google") {
        return profile.email_verified;
      }
      return true;
    },

    async jwt({ token, account }) {
      if (account) {
        // console.log("--------------------------------");
        // console.log("jwt() account: ", account);
        // console.log("- - - - - - - - - - - - - - - -");

        const strapiRes = await axios.get(
          `${STRAPI_DOMAIN}/api/auth/${account?.provider}/callback?access_token=${account?.access_token}`,
        );

        const jwt = strapiRes.data.jwt;
        // console.log("jwt() jwt: ", jwt);
        // console.log("- - - - - - - - - - - - - - - -");

        const res = await axios({
          method: "PUT",
          url: `${STRAPI_DOMAIN}/api/users/me`,
          data: JSON.stringify({
            lastLogin: new Date().getTime(),
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });

        // console.log("session() res: ", res?.data);
        // console.log("--------------------------------");
      }

      return token;
    },

    async session({ session, token, user }) {
      // console.log("--------------------------------");
      // console.log("session() session: ", session);
      // console.log("- - - - - - - - - - - - - - - -");
      // console.log("session() token: ", token);
      // console.log("- - - - - - - - - - - - - - - -");
      // console.log("session() user: ", user);
      // console.log("--------------------------------");

      // session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
