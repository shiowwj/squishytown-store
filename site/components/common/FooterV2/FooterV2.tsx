import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { ChevronRight, Github, Vercel } from '@components/icons'
import { Logo, Container, Text, Input } from '@components/ui'
import { EmailSubscribe, I18nWidget } from '@components/common'
import s from './FooterV2.module.css'
import Image from 'next/image'
import Instagram from '@components/icons/Instagram'
import Tiktok from '@components/icons/Tiktok'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { shopPages, shippingPaymentPages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 text-primary bg-primary transition-colors duration-150 px-8 lg:px-24">
          <div className="flex flex-row flex-1 col-span-1 lg:col-span-5 justify-between lg:justify-evenly">
            {/* SHOP */}
            <div className="flex flex-col min-w-[20vw]">
              <Text variant="pageHeading" className="mb-2">
                Shop
              </Text>
              {[...links, ...shopPages].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className={s.link}>{page.name}</a>
                  </Link>
                </span>
              ))}
            </div>

            {/* SHIPPING & PAYMENT */}
            <div className="flex flex-col text-right md:text-right lg:text-left">
              <Text variant="pageHeading" className="mb-2">
                Shipping &amp; Payment
              </Text>
              {[...shippingPaymentPages].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className={s.link}>{page.name}</a>
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* logo + description */}
          <div className="col-span-full lg:col-span-7 flex justify-center">
            <div className="flex flex-col lg:flex-row items-center font-boldtext-center">
              <Link href="/">
                <div className={s.logoDescription}>
                  <Image
                    src={'/Squishy-Town-Logo-circle.svg'}
                    width={150}
                    height={150}
                    alt={''}
                  />
                </div>
              </Link>
              <div className={s.description}>
                <div className="text-4xl mb-5 font-extrabold">
                  <span>The Squishy Town</span>
                </div>
                <div>
                  <span className="text-xl font-normal">
                    A place where you find pieces of your childhood or a place
                    where you create your childhood
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* email sub and socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150 px-8 lg:px-24 items-center">
          <div className="col-span-1 lg:col-span-6 flex flex-col lg:justify-end text-primary lg:mx-16">
            {/* email sub */}
            <EmailSubscribe />
          </div>

          <div className="col-auto"></div>
          {/* socials */}
          <div className="col-span-1 lg:col-span-3 flex justify-center lg:justify-end text-primary">
            <a className={s.social}>
              <Instagram />
            </a>
            <a className={s.social}>
              <Tiktok />
            </a>
          </div>
        </div>

        {/* copyright */}
        <div className="pt-6 px-6 pb-10 flex flex-col md:flex-row justify-center items-center space-y-4 text-accent-6 text-2xl font-kiddos">
          <div>
            <span>&copy; Squishytown 2022. All Rights Reserved.</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const shopPages: Page[] = []
  const shippingPaymentPages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      if (!page.url?.includes('shipping-returns')) {
        const slug = page.url && getSlug(page.url)
        if (!slug) return
        if (locale && !slug.startsWith(`${locale}/`)) return
        shopPages.push(page)
      }
      if (page.url?.includes('shipping-returns')) {
        const slug = page.url && getSlug(page.url)
        if (!slug) return
        if (locale && !slug.startsWith(`${locale}/`)) return
        shippingPaymentPages.push(page)
      }
    })
  }

  return {
    shopPages: shopPages.sort(bySortOrder),
    shippingPaymentPages: shippingPaymentPages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
