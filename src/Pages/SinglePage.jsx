
import '../Pages/SinglePage.css'
import { Data } from '../Data'
import { useParams } from 'react-router-dom'
;
import { useContext } from 'react';
import { CartContext } from '../Context/ContextPage';


function SinglePage () {

  const {id} = useParams();
  const {AddToCart} = useContext(CartContext)
  
;
  const product = Data.find((item)=>item.id ===parseInt(id))


  return (
    <div className='items-container'>
      
        
          <div className="items-box">
            <img src={product.pic} alt="" />
            <div className="add-btn-delete-btn">
             
              <button onClick={()=>AddToCart(product)} >add</button>
            </div>
          </div>
      
    </div>
  )
}

export default SinglePage