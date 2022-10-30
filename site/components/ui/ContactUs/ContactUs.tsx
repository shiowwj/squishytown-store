import cn from 'clsx'
import { FC } from 'react'
import s from './ContactUs.module.css'
import { Text } from '@components/ui'
import { FacebookMessenger, Mail, Phone } from '@components/icons'

interface ContactUsProps {
  className?: string
}

const ContactUs: FC<ContactUsProps> = ({ className }) => {
  const rootClassName = cn(s.root, className)
  return (
    <div className={rootClassName}>
      <Text variant="body">
        Do you have a question? Please send us a message and we will reply
        within 1 business day. We also warmly welcome feedback, questions,
        suggestions, and ideas for improving our store & services. Your comments
        are important to us!
      </Text>
      <div className={s.item}>
        {/* <span> */}
        <div className={s.icon}>
          <Mail />
        </div>
        {/* </span>\ */}
        <span className={s.title}>E-Mail: hello@squishytown.com</span>
      </div>
      <div className={s.item}>
        {/* <span> */}
        <div className={s.icon}>
          <Phone />
        </div>
        {/* </span> */}
        <span className={s.title}>+852 5487 3996</span>
      </div>
      <div className={s.item}>
        {/* <span> */}
        <div className={s.icon}>
          <FacebookMessenger />
        </div>
        {/* </span> */}
        <span className={s.title}>Facebook Messenger</span>
      </div>
    </div>
  )
}

export default ContactUs
