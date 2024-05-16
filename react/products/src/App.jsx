import React, { useState } from 'react'
import Products from './products.json'

const App = () => {
const [state, setState] = useState(Products)


  return (
    <section className='maincontainer'>
      {state.map((ele,index)=>{
        return(
          <>
            <div className="cardcontainer">
              <h1 className='header'>{ele.Id.toUpperCase()}</h1>
              <img className='imgtag' src={ele.img} alt="" />
              <div className='title'>{ele.Title}</div>
              <div className='website'><i class="fa-solid fa-globe"></i><a className='websiteanchor' href={ele.Url} title={ele.Url} >Website</a></div>
            </div>
          </>
        )
      })}
    </section>
  )
}

export default App