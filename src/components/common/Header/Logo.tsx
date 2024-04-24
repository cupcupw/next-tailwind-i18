import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="block">
      <img
        className="block w-[60px] h-auto"
        src="/img/logo.png"
        width="192"
        height="72"
        alt="logo"
      />
    </Link>
  )
}
