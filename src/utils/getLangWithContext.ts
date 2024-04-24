import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getLangWithContext = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
  ns?: string[],
) => {
  const { locale, defaultLocale } = context

  const loc = locale || defaultLocale || 'en'
  return await serverSideTranslations(loc, ns)
}
