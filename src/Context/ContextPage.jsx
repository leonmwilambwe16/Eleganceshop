import {createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{

const [Cart,SetCart] = useState([]);
 



const AddToCart =(product)=>{
  
  
  SetCart(prevCart =>{
    const existingProd =prevCart.find((item)=> item.id === product.id);
    if(existingProd){
      return(
        prevCart.map((item)=>
        item.id === product.id
        ?{...item ,quantity :item.quantity +1}: item
        )
      );
    }else{
      return [...prevCart ,{...product,quantity:1}];
    }
  })
   
}

const DeleteToCart =(productId)=>{
   SetCart((prevCart)=>{
    const existingProd = prevCart.find((item)=> item.id === productId);

   if( existingProd.quantity> 1){
    return(
      prevCart.map((item)=>
      item.id === productId ?{... item,quantity:item.quantity -1}:item
      
      )
    );
   }else{
    return(
      prevCart.filter((item)=>item.id !== productId)
    )
   }



   });
}
  


  return(
    <CartContext.Provider value={{ Cart, SetCart , AddToCart, DeleteToCart}}  >
    {children}
    </CartContext.Provider>
  );
 
 
 
};  

   