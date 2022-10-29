import { NextApiRequest, NextApiResponse } from 'next'

const URL =
  'https://thesquishytown.myshopify.com/admin/api/2022-04/customers.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Only POST requests allowed' })
    }

    if (req.method === 'POST') {
      const email = req.body.email
      const results = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': process.env
            .NEXT_PUBLIC_SHOPIFY_ADMIN_ACCESS_TOKEN as string,
        },
        body: JSON.stringify({
          customer: {
            email: email,
            verified_email: true,
            email_marketing_consent: {
              state: 'subscribed',
              opt_in_level: 'single_opt_in',
            },
            addresses: [
              {
                city: 'Singapore',
                country: 'Singapore',
                country_code: 'SG',
                country_name: 'Singapore',
                default: true,
              },
            ],
          },
        }),
      })

      return res
        .status(results.status)
        .json({ message: 'Create Subscription Success' })
    }
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}
