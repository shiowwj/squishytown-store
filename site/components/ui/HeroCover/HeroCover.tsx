import React, { FC, ReactNode } from 'react'
import { Container } from '@components/ui'
import { ArrowRight, RainbowHouse } from '@components/icons'
import s from './HeroCover.module.css'
import Link from 'next/link'
import Image from 'next/image'
interface HeroProps {
  className?: string
  children?: ReactNode
}

const HeroCover: FC<HeroProps> = ({ className, children }) => {
  return (
    <div className="bg-transparent">
      {/* <Container className="max-w-[100vw] px-6"> */}
      <div className={s.root}>
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
      </div>
      {/* </Container> */}
      <div className="bg-store-p-light mx-6 pt-6 pb-14 rounded-b-xl">
        {children}
      </div>
    </div>
  )
}

export default HeroCover
