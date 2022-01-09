import '../styles/globals.css'
import LogRocket from 'logrocket';
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'

LogRocket.init('la2cir/instasams');

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
