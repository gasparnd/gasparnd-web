import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layaut } from "components/Layaut";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layaut>
      <Component {...pageProps} />
    </Layaut>
  );
}

export default MyApp
