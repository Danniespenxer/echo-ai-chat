import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from './prisma';


export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' }; // Example logic
        if (credentials?.username === 'user' && credentials?.password === 'pass') {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],


  // Use Prisma adapter for NextAuth
  adapter: PrismaAdapter(prisma),


  // Callbacks to handle custom JWT tokens or session info
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.userId = token.id;
      }
      return session;
    },
  },


  // Pages to redirect users to when they sign in, out, or encounter an error
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
  },


  // Enable debug mode during development
  debug: process.env.NODE_ENV === 'development',
};


export default authOptions;
```
