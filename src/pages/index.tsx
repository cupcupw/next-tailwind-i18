import { GetServerSideProps } from 'next/types'
import { useTranslation } from 'next-i18next'
import { getLangWithContext } from '@/utils/getLangWithContext'
import { SEO } from '@/components'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await getLangWithContext(context)),
    },
  }
}

export default function Home(props: any) {
  const { locale } = useRouter()
  return (
    <main className="h-screen">
      <SEO />
    </main>
  )
}
