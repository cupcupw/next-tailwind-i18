import { Footer, Header, MobileSwitchLocal } from '@/components'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'

export interface LayoutProps {
  children?: ReactNode
}

export function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <div>
        <Header />
        <div>
          {children}
          <Footer />
        </div>
        <MobileSwitchLocal />
      </div>
    </>
  )
}
