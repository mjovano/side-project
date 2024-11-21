import '../styles/globals.css';
import Header from '../components/Header';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
