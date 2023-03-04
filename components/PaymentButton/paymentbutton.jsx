import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import classes from './paymentbutton.module.css'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51JUCwkBW5Yr7MPTmaT8D6F0ZnX202Oe4bo8229cdf4oZfCywEd5uTvfvZERy8DNUpDQrzcy690YfLigNBpvnH08A00mjk5YBHm");// process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
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
    <form action="./api/checkout_sessions" method="POST">
      <section className={classes.section}>
        エンジニアスクール1ヶ月コース(5万円)
        <button className={classes.button} type="submit" role="link">
          Checkout
        </button>
      </section>
    </form><br />
    <form action="./api/checkout_sessions" method="POST">
      <section className={classes.section}>
        エンジニアスクール3ヶ月コース(10万円)
        <button className={classes.button} type="submit" role="link">
          Checkout
        </button>
      </section>
    </form>
    </div>
  );
}