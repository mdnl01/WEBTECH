import React, { useState } from 'react'
import './App.css'
import imgarray from './Images.js'
// console.log(imgarray)

const App = () => {
    let red=Math.floor(Math.random() * 256);
    let blue=Math.floor(Math.random() * 256);
    let green=Math.floor(Math.random() * 256);
    
console.log(red, blue, green)
  let[imageindex,setImageindex]=useState(0)
  


  function previousimage(){
    if(imageindex==0)
      setImageindex(imgarray.length-1)
    else
      setImageindex(imageindex-1)
  }
  function nextimage(){

    if(imageindex==imgarray.length-1)
      setImageindex(0)
    else
      setImageindex(imageindex+1)
    
  }



  return (
    <div className="maincontainer" style={{backgroundColor:`rgba(${red},${green},${blue})`}}>
      <div className="slidercontainer">
        <div className="imagecontainer">
          <img className='image' src={imgarray[imageindex]} alt="" />
        </div>
        <div className="buttoncontainer">
          <button className='btnleft' onClick={previousimage}>LEFT</button>
          <button className='btnright' onClick={nextimage}>RIGHT</button>
        </div>
      </div>
    </div>
  )
}

export default App