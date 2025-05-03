import LinkedinProvider, {
  LinkedInProfile,
} from "next-auth/providers/linkedin";

export const linkedinProvider = LinkedinProvider({
  clientId: process.env.NEXTAUTH_LINKEDIN_CLIENT_ID as string,
  clientSecret: process.env.NEXTAUTH_LINKEDIN_CLIENT_SECRET as string,
  profile: (profile: LinkedInProfile) => ({
    id: profile.sub,
    name: profile.name,
    email: profile.email,
    image: profile.picture,
  }),
  wellKnown: "https://www.linkedin.com/oauth/.well-known/openid-configuration",
  authorization: {
    params: {
      scope: "openid profile email",
    },
  },
});
