// // pages/api/auth/[...nextauth].ts

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",  // Optional: your custom sign-in page
//     error: "/auth/error",    // Optional: custom error page
//   },
//   callbacks: {
//     async redirect({ url, baseUrl }) {
//       if (url === baseUrl) {
//         return `${baseUrl}/rooms`; // Redirect after successful login
//       }
//       return url; // Default redirect if the URL is not as expected
//     },
//   },
// });
// pages/api/auth/[...nextauth].ts
// pages/api/auth/[...nextauth].ts
// pages/api/auth/[...nextauth].ts
// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { getUserByEmail, createUser, hashPassword, verifyPassword } from '../../../lib/db';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        fullName: { label: 'Full Name', type: 'text' }, // Include full name for sign-up
        mobileNumber: { label: 'Mobile Number', type: 'text' }, // Include mobile number for sign-up
        isSignUp: { label: 'Sign Up', type: 'checkbox' }, // Indicate if it's a sign-up
      },
      async authorize(credentials) {
        const { email, password, fullName, mobileNumber, isSignUp } = credentials;

        if (!email || !password) {
          return null; // Return null if credentials are missing
        }

        if (isSignUp) {
          const existingUser = await getUserByEmail(email);
          if (existingUser) {
            throw new Error('User already exists'); // Provide an error for duplicate users
          }

          const hashedPassword = await hashPassword(password);
          const user = {
            email,
            password: hashedPassword,
            name: fullName,
            mobileNumber,
          };

          await createUser(user);

          // Automatically log the user in after successful sign-up
          return { email };
        }

        // Handle login for existing users
        const user = await getUserByEmail(email);
        if (!user || !(await verifyPassword(password, user.password))) {
          throw new Error('Invalid email or password'); // Provide a clear error
        }

        return { email };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return url; // Allow only internal redirects
      }
      return baseUrl; // Default to base URL
    },
  },
});
