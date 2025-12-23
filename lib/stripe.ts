import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

export const getStripe = () => {
  return stripe
}

// Price IDs from your Stripe Dashboard
export const PRICING_PLANS = {
  BASIC: {
    name: 'Basic',
    priceId: process.env.STRIPE_BASIC_PRICE_ID || '',
    price: 9,
  },
  PRO: {
    name: 'Pro',
    priceId: process.env.STRIPE_PRO_PRICE_ID || '',
    price: 29,
  },
  ENTERPRISE: {
    name: 'Enterprise',
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || '',
    price: 99,
  },
}
