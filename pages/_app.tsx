import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>乗りレコ</title>
        <meta
          name='description'
          content='何の曲のどんな乗り番を経験したか簡単マークアップ！乗りレコを共有して経験を共有しよう！'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
