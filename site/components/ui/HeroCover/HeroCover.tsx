import React, { FC, ReactNode } from 'react'
import s from './HeroCover.module.css'
import Image from 'next/image'
interface HeroProps {
  className?: string
  children?: ReactNode
  withBanner?: boolean
}

const HeroCover: FC<HeroProps> = ({
  className,
  children,
  withBanner = true,
}) => {
  return (
    <div className="bg-transparent lg:max-w-[70vw] md:max-w-[85vw] mx-auto max-[100vw]">
      {/* <Container className="max-w-[100vw] px-6"> */}
      <div className={s.root}>
        {withBanner ? (
          <Image
            sizes="(min-width: 768px) 80px, 60px"
            src={'/bg_hero_main_cover.svg'}
            alt={'hero-banner'}
            loading={'eager'}
            width={1389}
            height={617}
            layout={'responsive'}
            priority={true}
            className={s.image}
          />
        ) : (
          <div className="mt-6"></div>
        )}
      </div>
      {/* </Container> */}
      {withBanner ? (
        <div className="bg-store-p-light mx-2 pt-6 pb-14 rounded-b-xl">
          {children}
        </div>
      ) : (
        <div className="bg-store-p-light mx-2 pt-6 pb-14 rounded-xl">
          {children}
        </div>
      )}
    </div>
  )
}

export default HeroCover
