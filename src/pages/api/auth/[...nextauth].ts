// pages/api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",  // Optional: your custom sign-in page
    error: "/auth/error",    // Optional: custom error page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url === baseUrl) {
        return `${baseUrl}/rooms`; // Redirect after successful login
      }
      return url; // Default redirect if the URL is not as expected
    },
  },
});
