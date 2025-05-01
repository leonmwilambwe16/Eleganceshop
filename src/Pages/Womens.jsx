import React, { useContext } from 'react'
import { IoBagAddSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import '../Pages/Womens.css'
import { Data } from '../Data'
import { CartContext} from '../Context/ContextPage'

function Womens (){
  const filterProducts = Data.filter((prod)=>prod.cathegory === 'women')

  const {AddToCart} = useContext(CartContext)

  return (
    <div className='women-container'>
          {filterProducts.map((product)=>(
          <div className="product-box-cart">
            <img src={product.pic} alt=""/>
             <div className="btn-add-delete">
               <IoBagAddSharp  className='button' onClick={()=>AddToCart(product)}  />
               <Link to={`/womens/${product.id}`}> <button className='button'>View</button></Link>
               
             </div>
             <div className="price-prod">
             <p>${product.price}</p>
             </div>
          </div>
              
        ))}
    </div>
  )
}

export default Womens