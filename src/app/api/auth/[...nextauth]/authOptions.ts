import axios from "axios";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider, {
  LinkedInProfile,
} from "next-auth/providers/linkedin";

const STRAPI_DOMAIN = process.env.NEXT_PUBLIC_CMS_DOMAIN;

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
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
    }),
    LinkedinProvider({
      // https://next-auth.js.org/providers/linkedin
      // https://www.linkedin.com/developers/apps/219502882/auth
      clientId: process.env.NEXTAUTH_LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_LINKEDIN_CLIENT_SECRET as string,
      // issuer: "https://www.linkedin.com",
      profile: (profile: LinkedInProfile) => ({
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
      }),
      wellKnown:
        "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
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
      // console.log("-------------------------------");
      // console.log("signIn() account: ", account);
      // console.log("-------------------------------");
      if (account.provider === "google") {
        return profile.email_verified;
      }
      return true;
    },

    async jwt({ account, token }) {
      console.log("-------------------------------");
      console.log("------------------------------- jwt() - start");
      console.log("-------------------------------");
      console.log("jwt() account: ", account);
      console.log("- - - - - - - - - - - - - - - -");
      console.log("jwt() token: ", token);
      console.log("- - - - - - - - - - - - - - - -");

      if (account) {
        const { provider, access_token } = account;

        const strapiAuthRes = await axios.get(
          `${STRAPI_DOMAIN}/api/auth/${provider}/callback?access_token=${access_token}`,
        );

        console.log(
          "jwt() strapi /api/auth/ strapiAuthRes.data: ",
          strapiAuthRes.data,
        );
        console.log("- - - - - - - - - - - - - - - -");
        const strapiJwt = strapiAuthRes.data?.jwt;
        console.log("jwt() strapi /api/auth/ strapiJwt: ", strapiJwt);
        console.log("- - - - - - - - - - - - - - - -");

        if (strapiJwt) {
          // token.jwt = strapiJwt;

          const strapiUsersMeRes = await axios({
            method: "PUT",
            url: `${STRAPI_DOMAIN}/api/users/me`,
            data: JSON.stringify({
              lastLogin: new Date().getTime(),
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${strapiJwt}`,
            },
          });
          console.log("jwt() strapi /api/users/me : ", strapiUsersMeRes?.data);
          console.log("- - - - - - - - - - - - - - - -");
        }
      }
      
      console.log("-------------------------------");
      console.log("------------------------------- jwt() - end");
      console.log("-------------------------------");
      return token;
    },

    async session({ session, token, user }) {
      // console.log("-------------------------------");
      // console.log("session() session: ", session);
      // console.log("- - - - - - - - - - - - - - - -");
      // console.log("session() token: ", token);
      // console.log("- - - - - - - - - - - - - - - -");
      // console.log("session() user: ", user);
      // console.log("-------------------------------");

      // session.user = token;
      return session;
    },
  },
};
