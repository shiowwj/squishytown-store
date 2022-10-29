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
      <Link href="/search">
        <a className={s.link}>
          <CloudComponent>
            <div className={s.div}>
              <span className={s.span}>Shop All</span>
            </div>
          </CloudComponent>
        </a>
      </Link>
      {pages ? (
        pages.map((page) => (
          <Link href={page.url!} key={page.id}>
            <a className={s.link}>
              <CloudComponent>
                <div className={s.div}>
                  <span key={page.url} className={s.span}>
                    {page.name}
                  </span>
                </div>
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
