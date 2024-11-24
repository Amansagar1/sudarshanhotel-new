import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { getUserByEmail, createUser, hashPassword, verifyPassword } from '../../../lib/db';

// Define the User type
type User = {
  id: string;
  email: string;
  name: string;
  mobileNumber?: string;
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        fullName: { label: 'Full Name', type: 'text' },
        mobileNumber: { label: 'Mobile Number', type: 'text' },
        isSignUp: { label: 'Sign Up', type: 'checkbox' },
      },
      async authorize(credentials): Promise<User | null> {
        const { email, password, fullName, mobileNumber, isSignUp } = credentials || {};

        if (!email || !password) {
          return null;
        }

        if (isSignUp) {
          const existingUser = await getUserByEmail(email);
          if (existingUser) {
            throw new Error('User already exists');
          }

          const hashedPassword = await hashPassword(password);
          const newUser = await createUser({
            email,
            password: hashedPassword,
            name: fullName,
            mobileNumber,
          });

          return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            mobileNumber: newUser.mobileNumber,
          };
        }

        const user = await getUserByEmail(email);
        if (!user || !(await verifyPassword(password, user.password))) {
          throw new Error('Invalid email or password');
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          mobileNumber: user.mobileNumber,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
});
