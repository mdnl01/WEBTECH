import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <nav className='navbar'>
        <Link to="/">SIGNUP</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/aboutus">ABOUT US</Link>
        <Link to="/careers">CAREERS</Link>
        <Link to='/products'>PRODUCTS</Link>
    </nav>
    </>
  )
}

export default NavBar