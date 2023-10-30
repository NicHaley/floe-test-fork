import NextAuth, { DefaultSession } from "@floe/nextauth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
    };
    profile: DefaultSession["profile"];
    error?: string;
  }
}