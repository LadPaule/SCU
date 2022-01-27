import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // todo: configure more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_WEB_CLIENT_GOOGLE_ID,
      clientSecret: process.env.NEXT_WEB_CLIENT_GOOGLE_SECRETE,
    }),
    // todo: configure more authentication providers here
  ],
});
// NEXT_WEB_CLIENT_GOOGLE_ID
