import '../Pages/Mens.css'
import {Data} from '../Data.js'
import { IoBagAddSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/ContextPage.jsx';



function Mens (){
  
 

const filterProducts = Data.filter((prod)=>prod.cathegory === 'mens')

const { AddToCart } = useContext(CartContext)

  return (
    <div className='Mens-prod'>
      <div className="title-prod">
      <button>Suite</button>
      <button>Shirt</button>
      <button>Tshirt</button>
      <button>Pant</button>
      </div>
        {filterProducts.map((product)=>(
          <div className="product-box-cart">
            <img src={product.pic} alt=""/>
             <div className="btn-add-delete">
               <IoBagAddSharp  className='button' onClick={()=>AddToCart(product)}  />
               <Link to={`/mens/${product.id}`}> <button className='button'>View</button></Link>
               
             </div>
             <div className="price-prod">
             <p>${product.price}</p>
             </div>
             
             </div>
          
              
        ))}
       
      

    </div>
  )
}

export default Mens   



