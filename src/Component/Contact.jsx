import React from 'react'
import '../Component/Contact.css'
import { RiShirtFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Contact (){
  return (
    <div className='contact-container'>
      <div className="contact-box">
        <div className="space-mark">
          <RiShirtFill className='new-logo'/>
          <div className="text-small">
            <h4>Elegance</h4>
            <small>ONLINE SHOPPING</small>
            <p>ut labore et dolore magna aliqua</p>
            <p>ut labore et dolore magna aliqua</p>
            <p>Elegance@gmail.com</p>
            <p>010-004-0640</p>
          </div>
          <p></p>
        </div>
        <div className="space-mark">
        <h4>Shopping & Categories</h4>
        <p>Men </p>
        <o>WOMEN </o>
        <p>Kids </p>
        </div>
        <div className="space-mark">
        <h4>Shopping & Categories</h4>
        <p>Men </p>
        <o>WOMEN </o>
        <p>Kids </p>
        </div>
        <div className="space-mark">
        <h4>Shopping & Categories</h4>
        <p>Men </p>
        <o>WOMEN </o>
        <p>Kids </p>
        </div>
        <div className="space-mark">
        <h4>SUBSCRIBE</h4>
          <form action="">
            <label htmlFor="">Email</label>
            <input type="text" />
          </form>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="contact-boxi">
        <hr />
        <div className="contact">
          <h4>Copy right @ 2025 Elegance :Ltd all right Reserved</h4>
          <small>Design:Tamplate</small>
          <div className="social-media-logo">
          <FaFacebookF />
          <FaXTwitter />
          <RiInstagramFill />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact