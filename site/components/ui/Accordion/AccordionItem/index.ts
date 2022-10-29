import React from 'react'

export { default } from './AccordionItem'
export interface AccordionItemProps {
  className?: string
  title: string
  content: string
  onToggle?: (...args: any[]) => any
  active: boolean
}
