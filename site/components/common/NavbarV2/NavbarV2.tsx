import { FC, useState } from 'react'
import Link from 'next/link'
import s from './NavbarV2.module.css'
import NavbarV2Root from './NavbarV2Root'
import { Container, useUI } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from '@components/icons'
import PagesMenuContent from './PagesMenuContent'
import { Dropdown, DropdownTrigger } from '@components/ui'

export interface Link {
  href: string
  label: string
}

interface NavbarV2Props {
  pages?: Link[]
  links?: Link[]
}

const NavbarV2: FC<NavbarV2Props> = ({ links, pages }) => {
  const [displayDropdown, setDisplayDropDown] = useState(false)

  return (
    <NavbarV2Root>
      <Container clean className="mx-auto max-w-8xl px-6">
        <div className={s.nav}>
          <div className="flex items-center flex-1 justify-start">
            <div className="lg:hidden">
              <UserNav variant={'menu'} />
            </div>
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Image
                  src={'/Squishy-Town-Logo-circle.svg'}
                  width={120}
                  height={120}
                  alt={''}
                />
              </a>
            </Link>
            {/* code for navbarV2 menu */}
            <nav className={s.navMenu}>
              <Dropdown>
                <DropdownTrigger>
                  {/* <button> */}
                  <div className={s.linkShopall}>
                    Shop All
                    <ChevronDown />
                  </div>
                  {/* </button> */}
                </DropdownTrigger>
                <PagesMenuContent collectionLinks={links} />
              </Dropdown>
              {/* <Link href="/search"> */}
              {/* <Dropdown>
                <DropdownTrigger>
                  <button
                    aria-label="Menu"
                    className={s.link}
                    onClick={() => {
                      openModal()
                    }}
                  >
                    Shop All
                    <ChevronDown />
                  </button>
                </DropdownTrigger>
                <PagesMenuContent />
              </Dropdown> */}
              {/* </Link> */}

              {/* pages from website */}
              {pages?.map((p) => (
                <Link href={p.href} key={p.href}>
                  <a className={s.link}>{p.label}</a>
                </Link>
              ))}
            </nav>
          </div>
          {/* <div className="lg:hidden md:hidden"> */}
          <Link href="/">
            <a className={s.logoMobile} aria-label="Logo">
              <Image
                src={'/Squishy-Town-Logo-circle.svg'}
                width={120}
                height={120}
                alt={''}
              />
            </a>
          </Link>
          {/* </div> */}

          <div className="flex items-center justify-end flex-1 space-x-8">
            {process.env.COMMERCE_SEARCH_ENABLED && (
              <div className="justify-center my-auto hidden lg:flex">
                <Searchbar />
                {/* <SearchbarV2 /> */}
              </div>
            )}
            <UserNav variant={'cart'} />
            {/* cart here */}
          </div>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="flex pb-4 lg:px-6 lg:hidden">
            <Searchbar id="mobile-search" />
          </div>
        )}
      </Container>
    </NavbarV2Root>
  )
}

export default NavbarV2
