import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import classes from './paymentbutton.module.css'
import Image from 'next/image'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);// process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
export function PaymentButton() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <div>
      <form action="./api/checkout_sessions_pro1" method="POST">
        <section className={classes.section}>
          <label className={classes.label} htmlFor="エンジニアスクール1ヶ月コース(5万円)">エンジニアスクール1ヶ月コース(5万円)</label>
          <button className={classes.button} type="submit" role="link">
            Checkout
          </button>
        </section>
      </form><br />
      <form action="./api/checkout_sessions_pro2" method="POST">
        <section className={classes.section}>
          <label className={classes.label} htmlFor="エンジニアスクール3ヶ月コース(10万円)">エンジニアスクール3ヶ月コース(10万円)</label>
          <button className={classes.button} type="submit" role="link">
            Checkout
          </button>
        </section>
      </form>
    </div>
  );
}