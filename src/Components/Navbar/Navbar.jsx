/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';
const Navbar = () => {

    const [menu,setMenu] = useState("home")
    const {getTotalCartItems} = useContext(HomeContext)
  return (
    <>
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo}/>
            <p>StyleHive</p>
        </div>

        <div className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link to='/'  style={{textDecoration:'none'}}  >Home</Link>{menu==="home" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to="/mens" style={{textDecoration:'none'}}>Mens</Link>{menu==="mens" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to="/womens" style={{textDecoration:'none'}}>Womens</Link>{menu==="womens" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to="/kids" style={{textDecoration:'none'}} >Kids</Link>{menu==="kids" ? <hr/>:<></>}</li>
        </div>
   <div className='nav-login-cart'>
    <button><Link to="/login" >Login</Link></button>
    <Link to="/cart"><img src={cart} alt="" /> </Link>
    <div className='nav-cart-count'>
     {getTotalCartItems()}
    </div>
   </div>
        
    </div>
    
    
    
   </>
  )
}

export default Navbar