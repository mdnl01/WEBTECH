import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImCross } from "react-icons/im";



function App() {


  let [item, setItem]= useState("");
  let [list, setList]= useState([]);


  function updateitem({target:{value}})
  { 
    setItem(value)
  }

  function updatelist()
  {
    setList([...list,item])
  }

  function deletelist(index)
  {
    list.splice(index,1)
    setList([...list])
  }
  return (
    <>
      <div className='maincontainer'>
        <div className='appcontainer'>
          <div className='inputcontainer'>
            <input type="text" className='inputtag' onChange={updateitem}/>
            <button className='btn' onClick={updatelist} value={item}>ADD</button>
          </div>
          <div className='listcontainer'>
            <div className='total'>TOTAL:{list.length}</div>
            
            {list.map((ele,index)=>{
              return(
                <div className='listitemcontainer' key={index}>
                  <i className='arrow'><MdKeyboardArrowRight /></i>
                  <div className='item'>{ele}</div>
                  <i className='trash' onClick={()=>{deletelist(index)}}><ImCross /></i>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
