import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
import Image from 'next/image'
interface HeroProps {
  className?: string
  headline: string
  description: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
    <div className="bg-transparent">
      <Container className="max-w-7xl px-6">
        <div className={s.root}>
          <Image
            src={'/assets/bg_hero_main_cover.svg'}
            alt={'hero-banner'}
            loading={'eager'}
            layout="fill"
            priority={true}
          />
        </div>
      </Container>
    </div>
  )
}

export default Hero
