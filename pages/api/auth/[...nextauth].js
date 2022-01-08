import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/Google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRECT,
      synchronize: false
    }),
    // ...add more providers here
  ],
  // theme: {
  //   logo: "https://links.papareact.com/sq0",
  //   brandColor: '#F13287',
  //   colorScheme: 'auto'
  // }
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
})