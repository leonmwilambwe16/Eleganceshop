
import '../Pages/CartPage.css'
import { Data } from '../Data'
import { useContext } from 'react'
import { CartContext } from '../Context/ContextPage'
import { IoTrashSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function CartPage (){
const { Cart, AddToCart, DeleteToCart } = useContext(CartContext)


  return (
    <div className='cart-container'>
      {Cart.map((item)=>{
        return(
         <div className="cart-nav" key={item.id} >
          <img src={item.pic} alt="" />

          <div className="item-tittle">
            <p>${item.price}</p>
            <div className="buttonitem">
              <IoTrashSharp className='trash-btn'  onClick={()=> DeleteToCart(item.id)} />
            </div>
            </div>
            <div className="quantity">
            <FaMinus className='minus-btn' onClick={()=>DeleteToCart(item.id)} />
            <p>{item.quantity}</p>
            <FaPlus className='plus-btn' onClick={()=>AddToCart(item)} />
           
           
            </div>
           
         </div>
        )
      })}
     
     
      <button className='checkout-btn'>Proceed to checkout</button>
    </div>
  )
}

export default CartPage