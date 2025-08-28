import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const Navbar = () => {
    const { cartItems } = useCart();
  return (
    <>
    <div className="navsection">
    <div className="title">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit',fontSize:'30px',fontWeight:'bold' }}>
    <h2>E-MART</h2>
  </Link>

    </div>
    <div className="search">
        <input type='text' placeholder='search here...'/>
    </div>
    <div className="user">
        <div className="user-details">
             <Link to='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
           <button className="btn">Signup</button> 
            </Link>
           </div>
        <div className="user-details">
          
            <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className="btn">Login</button>
            </Link>
            
        </div>
        
        <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>
        <div className="cart " >
            Cart<span >{cartItems.length}</span>
        </div>
        </Link>
    </div>
    </div>
    <div className="subMenu">
          <ul>
            <Link to='/mobile'>
                <li>Mobiles</li>
            </Link>
            <Link to='/computer'>
                <li>Computers</li>
            </Link>
            <Link to='/watch'>
                <li>Watches</li>
            </Link>
            <Link to='/men'>
                <li>Mens Fashion</li>
            </Link>
            <Link to='/woman'>
                <li>Women Dressing</li>
             </Link>
             <Link to='/tv'>
                <li>Televisions</li>
            </Link>
            <Link to='/ac'>
            <li>Air conditioners</li>
            </Link>
            <Link to='/speakers'>
            <li>speakers</li>
            </Link>
            <Link to='/fridges'>
            <li>Fridges</li>
            </Link>
            <Link to='/furniture'>
            <li>Furniture</li>
            </Link>
            <Link to='/kitchen'>
            <li>kitchen</li>
            </Link>
          </ul>
    </div>
    </>
    
  )
}

export default Navbar