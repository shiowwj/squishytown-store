import Link from 'next/link'
import s from './MenuSidebarView.module.css'
import { useUI } from '@components/ui/context'
import SidebarLayout from '@components/common/SidebarLayout'
import type { Link as LinkProps } from './index'
import Instagram from '@components/icons/Instagram'
import Tiktok from '@components/icons/Tiktok'
import { ChevronLeft, ChevronRight } from '@components/icons'
import React, { useState } from 'react'

export default function MenuSidebarView({
  links = [],
  collectionPages = [],
}: {
  links?: LinkProps[]
  collectionPages?: LinkProps[]
}) {
  const [displayShopAll, setDisplayShopAll] = useState(false)
  const { closeSidebar } = useUI()

  const handleClick = (_: React.MouseEvent<HTMLDivElement>) => {
    setDisplayShopAll(!displayShopAll)
  }

  return (
    <SidebarLayout handleClose={() => closeSidebar()}>
      <div className={s.root}>
        <div>
          {displayShopAll ? (
            <nav>
              <ul>
                <li className={s.item}>
                  <div
                    className={s.itemShopAllCurrent}
                    onClick={(e) => handleClick(e)}
                  >
                    <ChevronLeft />
                    Shop All
                  </div>
                </li>
                {collectionPages.map((l: any) => (
                  <li
                    key={l.href}
                    className={s.item}
                    onClick={() => closeSidebar()}
                  >
                    <Link href={l.href}>
                      <a>{l.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <nav>
              <ul>
                <li className={s.item}>
                  <div
                    className={s.itemShopAll}
                    onClick={(e) => handleClick(e)}
                  >
                    Shop All
                    <ChevronRight />
                  </div>
                </li>
                {links.map((l: any) => (
                  <li
                    key={l.href}
                    className={s.item}
                    onClick={() => closeSidebar()}
                  >
                    <Link href={l.href}>
                      <a>{l.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {/* <nav>
            <ul>
              <li className={s.item}>
                <div className={s.itemShopAll} onClick={(e) => handleClick(e)}>
                  Shop All
                  <ChevronRight />
                </div>
              </li>
              {links.map((l: any) => (
                <li
                  key={l.href}
                  className={s.item}
                  onClick={() => closeSidebar()}
                >
                  <Link href={l.href}>
                    <a>{l.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}
        </div>
        <div className={s.socials}>
          <a className={s.social}>
            <Instagram />
          </a>
          <a className={s.social}>
            <Tiktok />
          </a>
        </div>
      </div>
    </SidebarLayout>
  )
}

MenuSidebarView
