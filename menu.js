
import {useEffect,useState} from 'react';
export default function Menu(){
 const [items,setItems]=useState([]);
 useEffect(()=>{
  fetch(process.env.NEXT_PUBLIC_API_URL+'/api/menu')
   .then(r=>r.json()).then(setItems);
 },[]);
 return (
  <div>
   <h1>Menu</h1>
   {items.map(i=>(
    <div key={i._id}>
     <h3>{i.name}</h3>
     <p>{i.description}</p>
     <b>${i.price}</b>
    </div>
   ))}
  </div>
 );
}
