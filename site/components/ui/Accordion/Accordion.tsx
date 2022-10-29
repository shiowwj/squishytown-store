import cn from 'clsx'
import { FC, useState } from 'react'
import s from './Accordion.module.css'
import AccordionItem from './AccordionItem'
import { Text } from '@components/ui'

const FAQS = [
  {
    title: 'How can I track my order?',
    content:
      'If you have chosen a shipping method that includes tracking information, you can track your order online after it has been shipped. Please see the Order Tracking page for more information.',
  },
  {
    title: 'When will a product be back in stock?',
    content:
      'If you have chosen a shipping method that includes tracking information, you can track your order online after it has been shipped. Please see the Order Tracking page for more information.',
  },
  {
    title: 'I have not yet received my order, where is it?',
    content:
      'If you have chosen a shipping method that includes tracking information, you can track your order online after it has been shipped. Please see the Order Tracking page for more information.',
  },
  {
    title:
      'It has already taken XX days and I still have not received my order.',
    content:
      'If you have chosen a shipping method that includes tracking information, you can track your order online after it has been shipped. Please see the Order Tracking page for more information.',
  },
]

interface AccordionProps {
  className?: string
}

const Accordion: FC<AccordionProps> = ({ className }) => {
  const [clicked, setClicked] = useState<number>(-1)
  const rootClassName = cn(s.root, className)

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(-1)
    }
    setClicked(index)
  }

  return (
    <div className={rootClassName}>
      <Text variant="pageHeading">Frequently Asked Questions</Text>
      <ul className={s.list}>
        {FAQS.map(({ title, content }, idx) => (
          <AccordionItem
            active={clicked === idx}
            onToggle={() => handleToggle(idx)}
            key={idx}
            title={title}
            content={content}
          />
        ))}
      </ul>
    </div>
  )
}

export default Accordion
