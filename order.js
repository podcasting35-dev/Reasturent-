
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);
export default function Order(){
 const pay = async()=>{
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/checkout',{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({amount:25})
  });
  const {id}=await res.json();
  const stripe=await stripePromise;
  stripe.redirectToCheckout({sessionId:id});
 };
 return (
  <div>
   <h1>Order & Pay</h1>
   <button onClick={pay}>Pay Now</button>
  </div>
 );
}
