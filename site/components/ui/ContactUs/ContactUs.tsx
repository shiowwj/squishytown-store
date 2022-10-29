import cn from 'clsx'
import { FC } from 'react'
import s from './ContactUs.module.css'
import { Text } from '@components/ui'

interface ContactUsProps {
  className?: string
}

const ContactUs: FC<ContactUsProps> = ({ className }) => {
  const rootClassName = cn(s.root, className)
  return (
    <div className={rootClassName}>
      <Text variant="body" className={'text-store-a-blue'}>
        Do you have a question? Please send us a message and we will reply
        within 1 business day. We also warmly welcome feedback, questions,
        suggestions, and ideas for improving our store & services. Your comments
        are important to us!
      </Text>
    </div>
  )
}

export default ContactUs
