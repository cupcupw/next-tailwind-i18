import { useRouter } from 'next/router'
import classnames from 'classnames'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { SwitchLocal } from './SwitchLocal'

export function Header() {
  const { pathname = '/' } = useRouter()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-white z-50">
        <div className="max-w-screen-xl px-4 xl:px-0 h-[72px] m-auto flex items-center relative">
          <Logo />
          <Navbar />
          <SwitchLocal />
        </div>
      </header>

      <div className={classnames(`h-[72px]`)} />
    </>
  )
}
