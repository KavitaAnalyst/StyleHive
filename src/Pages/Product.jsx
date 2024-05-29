/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import {HomeContext} from '../Context/HomeContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductsDisplay/ProductDisplay';
import DescriptionBox from '../Components/Assets/DesdriptionBox/DescriptionBox';
const Product = () => {

  const {all_product} = useContext(HomeContext)
  
  const {productId} = useParams();
  const product = all_product.find((e)=>
    e.id=== Number(productId));
 
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>

    </div>
  )
}

export default Product
