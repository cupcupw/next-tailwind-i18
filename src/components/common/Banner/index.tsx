import classNames from 'classnames'
import { HtmlHTMLAttributes } from 'react'

interface BannerProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Banner(props: BannerProps) {
  const { className } = props
  return (
    <section className={classNames('w-full h-[150px] lg:h-[472px]', className)}>
      <img
        className="w-full h-full object-cover"
        src="/img/home/banner.jpg"
        alt="home-banner"
      />
    </section>
  )
}
