export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex-col lg:flex-row flex items-center justify-center text-regular-color text-sm pb-12 px-6 pt-12 lg:pt-20 text-center lg:bg-white flex-wrap">
      <a href="" target="_blank" className="flex items-center underline">
        <i className="bg-[url('/img/icon-gongan.png')] w-[18px] h-[20px] bg-contain bg-no-repeat mr-2" />
        沪公网安备
      </a>
      <p className="my-2 lg:my-0 lg:mx-10">
        Copyright © 2014-{year}
        xxx 版权所有
      </p>
      <a href="" target="_blank" className="underline">
        沪ICP备xxxx
      </a>
      <a href="" target="_blank" className="h-[30px] lg:ml-5 mt-2 xl:mt-0">
        <img
          className="w-auto h-full block"
          src="/img/icon-network.png"
          alt="证书"
        />
      </a>
    </footer>
  )
}
