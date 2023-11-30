const express = require('express');
const stripe = require('stripe')('sk_test_51Mfmd9EutuvIteRaoAH2dnMlT13qH1mHDjN9dBKyNL64QL3hzg1xWuuck9NWeXJR0Ad0UnvVK1I4e7vmrkp6RIDl00CuvRcwc2');
const router = express();
const plansController = require("../../controller/plan");

router.post('/create-checkout-session', async (req, res) => {
    const product = await stripe.products.create({
      name: "Subscription",
    });
    
    
    {
    var amount = req.body.amount;
    var email = req.body.product_name;
    if(amount == 7){
      var plan = Date.now() + 604800000;
    }
    else if(amount == 19){
      var plan = Date.now() + 2678400000;
    }
    else if(amount == 31){
      var plan = Date.now() + 31622400000;
    }
    console.log(email, plan);
    plansController.addPlan(email, plan);
    }


    
    if(product){
        var price = await stripe.prices.create({
          product: `${product?.id}`,
          unit_amount: req.body.amount * 100,
          currency: 'usd',
        });
    }
    if(price.id){
      var session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: `${price.id}`,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:5173/EditProfile',
        cancel_url: 'http://localhost:5173/Plans',
      });
      console.log(session)
      return res.redirect(303, session?.url);
    }
});

router.get('/success', async(req, res) => {
    try {
        return res.redirect('http://localhost:5173/EditProfile');
    } catch (error) {
        console.error(error.message)
    }
});


router.get('/cancel', async(req, res) => {
    try {
        return res.redirect('http://localhost:5173/Plans');
    } catch (error) {
        console.error(error.message)
    }
});

module.exports = router;