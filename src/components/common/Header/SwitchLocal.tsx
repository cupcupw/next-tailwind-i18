import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function SwitchLocal() {
  const router = useRouter()
  const { asPath, locale: routerLocale } = router
  const locales = [
    {
      label: '简',
      value: 'zh-CN',
    },
    {
      label: '繁',
      value: 'zh-HK',
    },
    {
      label: 'En',
      value: 'en',
    },
  ]
  return (
    <div className="hidden lg:flex relative ml-10 group space-x-4 text-secondary-color">
      {locales.map((locale, index) => (
        <Link
          key={index}
          className={classNames(
            'cblock w-6 h-6 border-2 border-primary-color rounded-md text-xs font-bold flex items-center justify-center',
            {
              '!border-primary text-primary': locale.value === routerLocale,
            },
          )}
          href={`${asPath}`}
          locale={locale.value}
        >
          {locale.label}
        </Link>
      ))}
    </div>
  )
}
