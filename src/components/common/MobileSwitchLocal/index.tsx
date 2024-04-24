import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function MobileSwitchLocal() {
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

  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }
  return (
    <div
      className={`lg:hidden fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-[url('/img/m-local-1.png')] bg-center bg-no-repeat rounded-full transition-all select-none`}
    >
      <span
        onClick={handleClick}
        className="cursor-pointer border-2 border-white w-6 h-6 rounded-lg text-sm flex items-center justify-center text-white"
      >
        {locales.find((item) => item.value === routerLocale)?.label}
      </span>
      {locales.map((locale, index) => (
        <Link
          key={index}
          onClick={handleClick}
          className={classNames(
            `absolute w-12 h-12 flex items-center justify-center bg-center bg-no-repeat rounded-full`,
            {
              "bg-[url('/img/m-local-1.png')]": locale.value === routerLocale,
              "bg-[url('/img/m-local-2.png')] ": locale.value !== routerLocale,
              'bottom-[100px] right:0': index === 0,
              '-left-[70.71px] bottom-[70.71px]': index === 1,
              'bottom-0 right-[100px]': index === 2,
              hidden: !visible,
            },
          )}
          href={`${asPath}`}
          locale={locale.value}
        >
          <span className="border-2 border-white w-6 h-6 rounded-lg text-sm flex items-center justify-center text-white">
            {locale.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
