import { Footer, Header, MobileSwitchLocal, SEO } from '@/components'
import type { ReactNode } from 'react'

export interface LayoutProps {
  children?: ReactNode
}

export function IframeLayout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <div>
        <Header />
        <div>{children}</div>
        <MobileSwitchLocal />
      </div>
    </>
  )
}
