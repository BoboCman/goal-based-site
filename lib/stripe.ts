import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable')
}

console.log('Stripe key loaded:', process.env.STRIPE_SECRET_KEY.slice(0, 7) + '...')

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
  appInfo: {
    name: 'Goal-Based Analysis',
    version: '1.0.0'
  }
})

export const PRICE_AMOUNT = 55 // $.55 in cents
export const CURRENCY = 'usd'
export const PRODUCT_NAME = 'Goal-Based Analysis'
