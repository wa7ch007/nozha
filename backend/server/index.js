const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();

// ⭐ افتح كل شيء مؤقتًا لحل المشكلة
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"]
  })
);

app.use(express.json());

const stripe = Stripe(process.env.STRIPE_SECRET);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { cart } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

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
      success_url: "https://nozha.vercel.app/success",
      cancel_url: "https://nozha.vercel.app/cart"
    });

    res.json({ url: session.url });
  } catch (error) {
    console.log("Stripe Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
