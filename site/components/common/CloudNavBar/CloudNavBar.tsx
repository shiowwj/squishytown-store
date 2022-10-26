import { Page } from '@commerce/types/page'
import { CloudComponent } from '@components/ui'
import cn from 'clsx'
import Link from 'next/link'
import s from './CloudNavBar.module.css'

interface CloudNavBarProps {
  pages?: Page[]
}

const CloudNavBar: React.FC<CloudNavBarProps> = ({ pages }) => {
  return (
    <nav className="hidden lg:visible md:visible lg:flex md:flex flex-row justify-center lg:w-[90vw] lg:mx-auto mb-6">
      {pages ? (
        pages.map((page) => (
          <Link href={page.url!} key={page.id}>
            <CloudComponent>
              <span
                key={page.url}
                className="py-3 md:py-0 md:pb-4 items-center inline-flex min-h-[80px]"
              >
                <a className="text-store-abutton-blue hover:text-store-a-red transition ease-in-out duration-150">
                  {page.name}
                </a>
              </span>
            </CloudComponent>
          </Link>
        ))
      ) : (
        <></>
      )}
    </nav>
  )
}

export default CloudNavBar
