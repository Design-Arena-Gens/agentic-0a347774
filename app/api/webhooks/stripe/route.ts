import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json(
      { error: 'Webhook Error' },
      { status: 400 }
    )
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object
      // Create or update subscription in database
      console.log('Checkout session completed:', session.id)
      break
    }
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object
      // Update subscription status in database
      await supabase
        .from('subscriptions')
        .upsert({
          stripe_subscription_id: subscription.id,
          stripe_customer_id: subscription.customer,
          status: subscription.status,
          current_period_start: new Date(subscription.current_period_start * 1000),
          current_period_end: new Date(subscription.current_period_end * 1000),
          cancel_at_period_end: subscription.cancel_at_period_end,
          updated_at: new Date(),
        })
      break
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object
      // Mark subscription as canceled
      await supabase
        .from('subscriptions')
        .update({ status: 'canceled', updated_at: new Date() })
        .eq('stripe_subscription_id', subscription.id)
      break
    }
    case 'invoice.payment_succeeded': {
      const invoice = event.data.object
      console.log('Payment succeeded:', invoice.id)
      break
    }
    case 'invoice.payment_failed': {
      const invoice = event.data.object
      console.log('Payment failed:', invoice.id)
      break
    }
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
