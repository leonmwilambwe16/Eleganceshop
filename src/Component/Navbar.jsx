
import '../Component/Navbar.css'

import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useContext, useState } from 'react';
import { CartContext } from '../Context/ContextPage';
import { SiTrustedshops } from "react-icons/si";




function Navbar (){

const [showMenue, SetshowMenue]= useState(false);
;
const {Cart} = useContext(CartContext)

const handleMenu =()=>{
  SetshowMenue(!showMenue);
}

const totalItems = Cart.reduce((acc,item)=>acc + item.quantity ,0)


 
  return (
    <div className='nav'>
      <div className="logo">
        <Link to='/'><SiTrustedshops className='first-logo' /></Link>
      
        <div className="minititle">
          <h2>Elegance</h2>
          <small>Online Shopping</small>
        </div>
      </div> 
     
      
      <ul className= {`menue-list ${showMenue ? 'active' : ''}`}>
      <FaTimes className='close-menu' onClick={handleMenu} />
        <Link className='nav-link' to='/' ><li>Home</li></Link>
        <Link className='nav-link' to='/mens' ><li>Men's</li></Link>
        <Link className='nav-link' to='/womens' ><li>Womens</li></Link>
        <Link className='nav-link' to='/kids' ><li>Kids</li></Link>
        <Link className='nav-link' to='/blog' ><li>Blog</li></Link>
        <Link className='nav-link' to='/contacts' ><li>Contacts</li></Link>
      </ul> 
     
      <div className="cart-user">
      <Link to='/cartpage'><IoCart /></Link>
      
      <FaUser />
      <FaBars className='humberger-bar' onClick={handleMenu} />
      </div>
      
      <span className='count-text'>{totalItems}</span>

    </div>
  )
}

export default Navbar     



