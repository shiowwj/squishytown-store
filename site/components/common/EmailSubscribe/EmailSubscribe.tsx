import React, { FC, memo, useEffect, useState } from 'react'
import cn from 'clsx'
import s from './EmailSubscribe.module.css'
import { useRouter } from 'next/router'
import { Logo, Container, Text, Input } from '@components/ui'
import { CheeseCake, ChevronRight } from '@components/icons'
import Breadman from '@components/icons/Breadman'

interface Props {
  className?: string
  id?: string
}

const EmailSubscribe: FC<Props> = ({
  className,
  id = 'email_subscription',
}) => {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/customer/subscribe'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    if (response.status === 201) setSubscribed(true)
  }

  return (
    <div className={cn(s.root, className)}>
      {!subscribed ? (
        <>
          <Text variant="pageHeading" className="mb-2">
            Subscribe to us
          </Text>
          <form onSubmit={handleSubmit}>
            <label id={id} className="hidden" htmlFor="email">
              Subscribe to us
            </label>
            <div className={s.inputRoot}>
              <input
                id="emailInput"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                className={s.input}
                required
              />
              <button type="submit" className={s.searchIconContainer}>
                <ChevronRight />
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <Text
            variant="pageHeading"
            className="pl-3 mb-2 flex justify-center lg:justify-start items-center"
          >
            <Breadman />{' '}
            <span className="mx-6 text-store-a-red">
              Thanks for subscribing!
            </span>
            <CheeseCake />
          </Text>
        </>
      )}
    </div>
  )
}

export default memo(EmailSubscribe)
