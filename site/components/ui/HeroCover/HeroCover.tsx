import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './HeroCover.module.css'
import Link from 'next/link'
import Image from 'next/image'
interface HeroProps {
  className?: string
}

const HeroCover: FC<HeroProps> = ({ className }) => {
  return (
    <div className="bg-transparent">
      <Container className="max-w-[100vw] px-6">
        <div className={s.root}>
          <Image
            src={'/bg_hero_main_cover.svg'}
            alt={'hero-banner'}
            loading={'eager'}
            layout="fill"
            priority={true}
          />
        </div>
      </Container>
      <div></div>
    </div>
  )
}

export default HeroCover
