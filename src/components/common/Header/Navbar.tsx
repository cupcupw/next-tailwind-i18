import Link from 'next/link'
import router from 'next/router'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { websiteMetadata } from '@/utils'
import { useTranslation } from 'next-i18next'

export function Navbar() {
  const { asPath: pathname = '/', locale } = useRouter()
  const [visible, setVisible] = useState(false)
  const { t } = useTranslation('common', { keyPrefix: 'header' })
  // https://github.com/framer/motion/issues/2006
  useEffect(() => {
    const handler = () => {
      window.scroll(0, 0)
    }
    router.events.on('beforeHistoryChange', handler)
    return () => {
      router.events.off('beforeHistoryChange', handler)
    }
  }, [])

  return (
    <>
      <button
        className={classnames(
          `block lg:hidden bg-[length:24px_24px] bg-no-repeat w-10 h-10 ml-auto bg-center`,
          [
            visible
              ? `bg-[url('/img/icon-close.svg')]`
              : `bg-[url('/img/icon-menu.svg')]`,
          ],
        )}
        onClick={() => setVisible((v) => !v)}
      />
      <div
        className={classnames(
          `lg:hidden fixed top-[72px] transition-all duration-300 overflow-hidden left-0 right-0 bg-black/70`,
          [visible ? 'h-[calc(100%-72px)]' : 'h-0'],
        )}
        onClick={() => setVisible((v) => !v)}
      >
        <nav className="bg-white">
          {websiteMetadata.navItems.map(({ path, name, key, params }) => {
            const active =
              path === '/' ? pathname === path : pathname.startsWith(path)
            return (
              <Link
                className={classnames(
                  `block px-4 text-base font-medium transition-colors`,
                  [active ? 'text-primary' : 'text-secondary-color'],
                )}
                href={path + (params || '')}
                key={path}
                onClick={() => setVisible((v) => !v)}
              >
                <span className="flex items-center h-16 border-b border-regular-color">
                  {t(key)}
                  <i className="ml-auto bg-[url('/img/icon-arrow.png')] bg-contain w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </nav>
      </div>
      <nav className="hidden lg:flex items-center ml-auto h-full overflow-hidden">
        {websiteMetadata.navItems.map(({ path, name, key, params }) => {
          const active =
            path === '/' ? pathname === path : pathname.startsWith(path)
          return (
            <Link
              className={classnames(
                `relative flex h-full leading-4 items-center justify-center flex-col ml-10 text-base font-medium hover:text-primary transition-colors`,
                [active ? 'text-primary' : 'text-secondary-color'],
                { 'text-base ml-6': locale === 'en' },
              )}
              href={path + (params || '')}
              key={path}
            >
              {t(key)}
              {active && (
                <motion.div
                  className="block bottom-3 absolute w-full h-[3px] bg-primary"
                  layoutId="navbar"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
