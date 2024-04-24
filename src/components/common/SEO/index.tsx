import Head from 'next/head'
import { websiteMetadata } from '@/utils'
import { useRouter } from 'next/router'

export interface SEOProps {
  title?: string
  children?: any
}

export function SEO(props: SEOProps) {
  const { title: titleProp, children } = props

  const router = useRouter()
  const { asPath } = router

  const title =
    websiteMetadata.navItems.find((i) => i.path === asPath)?.name ||
    websiteMetadata.title

  const share = `${websiteMetadata.siteUrl}/img/img-share.png`

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={websiteMetadata.description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={share} />
      <meta itemProp="image" content={share} />
      <meta property="og:description" content={websiteMetadata.description} />
      <meta property="og:url" content={`${websiteMetadata.siteUrl}${asPath}`} />
      {children}
    </Head>
  )
}
