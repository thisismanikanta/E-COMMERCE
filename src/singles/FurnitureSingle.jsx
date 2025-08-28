import React from 'react'
import { furnitureData } from '../stores/data/furniture';
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext'
const FurnitureSingle = () => {
 const {id} = useParams();
   const { addToCart,cartItems } = useCart();
 
    const Product = furnitureData.find((item) => item.id === id);
  return (
    <>
    <Navbar/>
     <div className="ind-section">
        <div className="ind-image">
            <img src={Product.image} alt='' />
        </div>
       <div className="ind-details">
        <div className="ind-company space">
            <h1>{Product.company}</h1>
        </div>
         <div className="ind-model space">
            <h2>{Product.model}</h2>
        </div>
        <div className="ind-price space">
            <h2>{Product.price}</h2>
        </div>
        <div className="ind-desc space">
            <p>{Product.description}</p>
            
        </div>
         <button className="ind-btn" onClick={() => addToCart(Product)}>Add to Cart</button>
       </div>
      
    </div></>
   
    
  )
}
export default FurnitureSingle