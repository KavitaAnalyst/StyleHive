/* eslint-disable react/prop-types */
//import React from 'react'
import './ProductDisplay.css';
import start_icon from '../Assets/star_icon.png';
import start_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { HomeContext } from '../../Context/HomeContext';


const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(HomeContext);
  return (
    <div className='productdisplay'>
    <div className='productdisplay-left'>
         <div className='productdisplay-img-list'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            </div> 
        <div className='productdisplay-img'>
            <img className='productdisplay-main-img'
             src={product.image}
            
            
            
            />
        </div>
        </div>
      <div className='productdisplay-right'>
   <h1>{product.name}</h1>
   <div className='productdisplay-right-star'>
      <img src={start_icon} alt=""/>
      <img src={start_icon} alt=""/>
      <img src={start_icon} alt=""/>
      <img src={start_icon} alt=""/>
      <img src={start_dull_icon} alt=""/>
      <p>(122)</p>
   </div>

   <div className='productdisplay-right-prices'>
    <div className='productdisplay-right-price-old'>${product.old_price}</div>
    <div className='productdisplay-right-price-new'>${product.new_price}</div>
   </div>

      <div className='productdisplay-right-desc'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aliquam dolorem maiores perspiciatis non, quia fugiat magnam. Perspiciatis, pariatur earum.
      </div>

      <div className='productdisplay-right-size'>
        <h1>Select size</h1>
        <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
            <span>Category : </span> Women , T-Shirt , Crop Top</p>

        <p className="productdisplay-right-category">
            <span>Tags : </span> Modern,Latest</p>


      </div>
      </div>

    </div>
  )
}

export default ProductDisplay