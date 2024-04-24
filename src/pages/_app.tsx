import '@/assets/scss/globals.scss'
import { Layout } from '@/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { IframeLayout } from '@/Layout/IframeLayout'

function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="ie" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          key="viewport"
        />
      </Head>
      {asPath.startsWith('/screen') && (
        <IframeLayout>
          <Component {...pageProps} />
        </IframeLayout>
      )}
      {!asPath.startsWith('/screen') && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}

export default appWithTranslation(App)
