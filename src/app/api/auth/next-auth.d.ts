import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Inclui o ID do usuário no tipo
    } & DefaultSession["user"];
  }
}
