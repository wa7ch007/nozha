const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const stripe = Stripe("process.env.STRIPE_SECRET");

app.post("/create-checkout-session", async (req, res) => {
  const { cart } = req.body;

  const line_items = cart.map((item) => ({
    price_data: {
      currency: "aed",
      product_data: {
        name: item.name
      },
      unit_amount: item.price * 100
    },
    quantity: item.qty
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cart"
  });

  res.json({ url: session.url });
});

app.listen(3000, () => console.log("Server running on port 3000"));
