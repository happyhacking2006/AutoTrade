import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/layout/layout'
import styles from 'styles/Home.module.css'
import { Roboto } from 'next/font/google'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'helpers/create-emotion-cache';
import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { Button } from '@mui/base'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App( props: MyAppProps ) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main className={roboto.className}>
        <div className={styles.wrapper}>
          <Layout >
            <Component {...pageProps} />  
          </Layout>
        </div>
      </main>
    </CacheProvider>
    
  )
}
