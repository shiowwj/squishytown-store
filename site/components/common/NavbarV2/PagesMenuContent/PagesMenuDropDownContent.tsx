import cn from 'clsx'
import { useRouter } from 'next/router'
import s from './PagesMenuDropDownContent.module.css'
import {
  DropdownContent,
  DropdownMenuItem,
} from '@components/ui/Dropdown/Dropdown'
import { Link as LinkProps } from '../NavbarV2'
import { FC } from 'react'
import Link from 'next/link'

interface PagesMenuDropDownContentProps {
  collectionLinks?: LinkProps[]
}

const PagesMenuDropDownContent: FC<PagesMenuDropDownContentProps> = ({
  collectionLinks,
}) => {
  const router = useRouter()

  const { pathname } = useRouter()

  const handleClick = (
    _: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    router.push(href)
  }
  return (
    <DropdownContent
      side="bottom"
      sideOffset={10}
      className={s.root}
      id="PagesMenuDropDownContent"
    >
      {collectionLinks &&
        collectionLinks.map(({ label, href }) => (
          <DropdownMenuItem key={href}>
            <a
              className={s.link}
              aria-label={href}
              onClick={(e) => handleClick(e, href)}
            >
              {label}
            </a>
          </DropdownMenuItem>
        ))}
    </DropdownContent>
  )
}

export default PagesMenuDropDownContent
