const stripe = require('stripe')("sk_test_51JUCwkBW5Yr7MPTm89gKTi6c1Ax1Fj4HWV6FYBGu4eVwM0ZqjlIVdL0N8I1kRxxoMAS0D0mroPgwaLMKKc1ge2QN00tEwQbCZ6");//process.env.STRIPE_SECRET_KEY

export async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1MhrqKBW5Yr7MPTmf7yVW6K2',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}