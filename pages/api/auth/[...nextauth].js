import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRECT
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
  // theme: {
  //   logo: "https://links.papareact.com/sq0",
  //   brandColor: '#F13287',
  //   colorScheme: 'auto'
  // }
  // pages: {
  //   signIn: '/auth/signin',
  //   // signOut: '/auth/signout',
  //   // error: '/auth/error', // Error code passed in query string as ?error=
  //   // verifyRequest: '/auth/verify-request', // (used for check email message)
  //   // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  // aumentar la data del callback del usuario que se loggeo
  callbacks: {
    async session ({ session, token, user }) {
      // Sergio Maury -> sergiomaury
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
      // Google user uid
      session.user.uid = token.sub
      return session
    }
  }
})