import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const items = useSelector((state) => state.cart);

  return (

    <div className='headar' >

      <span className='logo'>REDUX STORE</span>
      <div>
        <Link className='navLink' to="/home" >Home</Link>
        <Link className='navLink' to="/cart" >cart</Link>
        <span className='cartCount'> cart items:{items.length}</span></div>
    </div>
  )
}
