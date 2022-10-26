import { Page } from '@commerce/types/page'
import { CloudComponent } from '@components/ui'
import Link from 'next/link'
import s from './CloudNavBar.module.css'

interface CloudNavBarProps {
  pages?: Page[]
}

const CloudNavBar: React.FC<CloudNavBarProps> = ({ pages }) => {
  return (
    <nav className={s.root}>
      {pages ? (
        pages.map((page) => (
          <Link href={page.url!} key={page.id}>
            <a className="text-store-abutton-blue hover:text-store-a-red transition ease-in-out duration-150">
              <CloudComponent>
                <span
                  key={page.url}
                  className="py-3 md:py-0 md:pb-4 items-center inline-flex min-h-[80px]"
                >
                  {page.name}
                </span>
              </CloudComponent>
            </a>
          </Link>
        ))
      ) : (
        <></>
      )}
    </nav>
  )
}

export default CloudNavBar
