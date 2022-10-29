import { ChevronDown, ChevronUp } from '@components/icons'
import cn from 'clsx'
import React, { FC, useRef, useState } from 'react'
import { AccordionItemProps } from '.'
import s from './AccordionItem.module.css'

const Accordion: FC<AccordionItemProps> = ({
  title,
  content,
  className,
  onToggle,
  active,
}) => {
  const rootClassName = cn(s.root, className)
  const contentEl = useRef() as React.RefObject<HTMLDivElement>
  return (
    // className={`accordion_item ${active ? "active" : ""}`}
    <li className={`${rootClassName} ${active ? 'active' : ''}`}>
      <button className={s.itemButton} onClick={onToggle}>
        <span className={s.control}>
          <div className={s.icon}>
            {active ? <ChevronDown /> : <ChevronUp />}
          </div>
        </span>
        <span className={s.title}>{title}</span>
      </button>
      <div
        ref={contentEl}
        className={s.contentWrapper}
        style={
          active
            ? {
                height: contentEl.current ? contentEl.current.scrollHeight : '',
              }
            : { height: '0px' }
        }
      >
        {/* <div className={`${s.contentWrapper} ${active ? 'open' : ''}`}> */}
        <div className={s.contentAnswer}>{content}</div>
      </div>
    </li>
  )
}

export default Accordion
