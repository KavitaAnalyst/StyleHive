//import React from 'react'
import data_products from '../Assets/data';
import Item from '../Items/Item'
import './Popular.css'
const Popular = () => {
  return (
    <div className='popular'>
  <h1>POPULAR IN WOMEN</h1>
  <hr/>
  <div className='popular-item'>
    {data_products.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.old_price} 
        old_price = {item.new_price}/>
    })}
  </div>

    </div>
  )
}

export default Popular