import { AppProps } from 'next/app'

import '../styles/globals.css'

function Blutui({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Blutui
