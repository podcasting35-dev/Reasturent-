
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Stripe from 'stripe';
import menu from './routes/menu.js';

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);
const stripe=new Stripe(process.env.STRIPE_SECRET);

app.use('/api/menu',menu);

app.post('/api/checkout',async(req,res)=>{
 const session=await stripe.checkout.sessions.create({
  payment_method_types:['card'],
  line_items:[{
   price_data:{
    currency:'usd',
    product_data:{name:'Zoob Zib Order'},
    unit_amount:req.body.amount*100
   },
   quantity:1
  }],
  mode:'payment',
  success_url:'https://yourdomain.com/success',
  cancel_url:'https://yourdomain.com/cancel'
 });
 res.json({id:session.id});
});

app.listen(5000);
