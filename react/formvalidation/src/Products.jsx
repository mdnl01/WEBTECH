import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Products.css'

const Products = () => {
  return (
    <>
    <nav className='prodnav'>
        <NavLink to='electronics'>ELECTRONICS</NavLink>
        <NavLink to='groceries'>GROCERIES</NavLink>
        <NavLink to='clothing'>CLOTHING</NavLink>
        <NavLink to='stationery'>STATIONERY</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products