import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // todo: configure more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_WEB_CLIENT_GOOGLE_ID,
      clientSecret: process.env.NEXT_WEB_CLIENT_GOOGLE_SECRETE,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_WEB_CLIENT_FACEBOOK_ID,
      clientSecret: process.env.NEXT_WEB_CLIENT_FACEBOOK_SECRETE,
    }),
    // todo: configure more authentication providers here
  ],
});

