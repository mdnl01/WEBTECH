import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FormValidate from './FormValidate.jsx'
import FormValidLib from './FormValidLib.jsx'
import NavBar from './NavBar.jsx'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import Careers from './Careers.jsx'
import Login from './Login.jsx'
import Products from './Products.jsx'
import Electronics from './Products/Electronics.jsx'
import Groceries from './Products/Groceries.jsx'
import Clothing from './Products/Clothing.jsx'
import Stationery from './Products/Stationery.jsx'
import ProductDetails from './Products/ProductDetails.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <BrowserRouter>
        <NavBar/>

     <Routes>
      <Route path='/' element={<FormValidLib/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/careers' element={<Careers/>}></Route>
      <Route path='/products' element={<Products/>}>
        <Route path='electronics' element={<Electronics/>}></Route>
        <Route path='groceries' element={<Groceries/>}></Route>
        <Route path='clothing' element={<Clothing/>}> </Route>
        <Route path='stationery' element={<Stationery/>}></Route>
      </Route>

      <Route path='/products/clothing/:id' element={<ProductDetails/>}></Route>
    </Routes>   
   </BrowserRouter>
  </>,
)
