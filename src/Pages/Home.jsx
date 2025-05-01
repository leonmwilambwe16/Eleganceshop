
import '../Pages/Home.css'
import {Data} from '../Data.js'
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';



function Home (){

 const [Slider,setSlider] =useState(0);
 const [Showpage,setShowpage] = useState(false);

 const hadleshowPge=()=>{
  setShowpage(!showProd)
 }
 

 const totalSlide = 6 ;
 const visibleSlide = 3;


 useEffect(()=>{
  const interval = setInterval(()=>{
    setSlider((prev)=>
     prev >= totalSlide - visibleSlide ? 0 : prev +1
    )
  },3000)
  return () => clearInterval (interval)
 },[])


 const Nexthandler =()=>{
   setSlider(prev=>
    (prev >= totalSlide -visibleSlide ? 0 :prev + 1)
   )
 }
const Prevhandler =()=>{
  setSlider(prev=>( 
    prev >=0 ? totalSlide + visibleSlide : prev -1 )
  )
}
  
  const navigate = useNavigate()
  const showProd = 3
  


 
  return (
    <div className='home-container'>
      <div className="content">
      <div className="box" >
        <div className="slider-wraper"  >
         
           <div className="slide" style={{
            transform: `translateX(-${Slider * (100 / 3)}%)`,
             transition: 'transform 0.5s ease',
             width: `${(100 / 3) * totalSlide}%`
             }}>
            <h2>slide1</h2>
           </div>
           <div className="slide" style={{
            transform: `translateX(-${Slider * (100 / 3)}%)`,
             transition: 'transform 0.5s ease',
             width: `${(100 / 3) * totalSlide}%`
             }}>
            <h2>slide2</h2>
           </div>
           <div className="slide" style={{
            transform: `translateX(-${Slider * (100 / 3)}%)`,
             transition: 'transform 0.5s ease',
             width: `${(100 / 3) * totalSlide}%`
             }}>
            <h2>slide3</h2>
           </div>
           
          <div className="buton">
            <button onClick={Prevhandler}>Prev</button>
            <button onClick={Nexthandler}>Nex</button>
          </div>
          </div>
         </div>
         <div className="box2">
          <div className="boxsepared">
          <div className="pic-box1">
          
           </div>
           <div className="pic-box2">
            
           </div>
          </div>
          
          <div className="boxsepared">
          <div className="pic-box3">
            <h1>30% OFF</h1>
          <button onClick={hadleshowPge}>Shop Now</button>
           </div>
           <div className="pic-box4">
           
           </div>
          </div> 
         </div>
      </div>
      <div className="product-latest">
        <h3>Men's Latest</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>

        <div className="product-slider">
          {Data.filter(product =>product.cathegory ==='mens').slice(0,showProd).map((product)=>{

            return(
            <div className="item-prod" key={product.id} >
                <img src={product.pic} alt="" />
                <div className="details">
                <span>${product.price}</span>
                </div>
                <div className="btn-home">
                  <small>{product.title}</small>
                 <p onClick={()=>navigate('/mens')}>More</p>
                 </div>
            </div>
            )
           
          })}

        </div>
        
      </div>
      <div className="product-latest">
        <h3>Women's Latest</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>

        <div className="product-slider">
          {Data.filter(product => product.cathegory === 'women').slice(0,showProd).map((product)=>{

            return(
            <div className="item-prod" key={product.id} >
                <img src={product.pic} alt="" />
                <div className="details">
                <span>${product.price}</span>
                </div>
                <div className="btn-home">
                <small>{product.title}</small>
                 <p onClick={()=>navigate('/womens')}>More</p>
                 </div>
            </div>
            )
           
          })}

        </div>
        
      </div>
      <div className="product-latest">
        <h3>Kid's Latest</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        <div className="product-slider">
          {Data.slice(0,showProd).map((product)=>{

            return(
            <div className="item-prod" key={product.id} >
                <img src={product.pic} alt="" />
                <div className="details">
                <span>${product.price}</span>
                </div>
                <div className="btn-home">
                <small>{product.title}</small>
                <p onClick={()=>navigate('/kids')}>More</p>
                </div>
            </div>
            )
           
          })}

        </div>
      </div>
      <div className="blog-home">
          <div className="explore">
            <h3>Explore Our Products</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            <small><span className='special'>"</span> eiusmod tempor incididunt ut labore et dolore magna</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span>sed do eiusmod</span> tempor incididunt ut labore et dolore magna</p>

          <button className='more-blog-btn'>Discover More</button>
          </div>
         

          <div className="explore">
             <div className="ficontentexplore">
               <div className="picexplore">
                hi
               </div>
               <div className="picexplore">
                then
                </div>
             </div>
             <div className="ficontentexplore">
             <div className="picexplore">
               yo
            </div>
            <div className="picexplore">
              yes
            </div>
              </div>
          </div>
      </div>
     
      <div className={`block-menu ${Showpage ? 'popshowmenu' : ''}`}>
        <h2>yes</h2>
      </div>
    </div>
  )
}

export default Home