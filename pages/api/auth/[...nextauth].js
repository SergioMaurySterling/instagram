import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRECT
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
  },
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