import React, { useEffect, useState } from 'react'

const App = () => {

let [search,setsearch]=useState("")
let [items,setitems]=useState([])

function updatesearch({target:{value}}){
  setsearch(value);
}

async function api(){
  let data =await (await fetch("https://fakestoreapi.com/products")).json();
  console.log(data);
  setitems(data);
}

useEffect(()=>{
  api()
},[])



  return (
    <>
    <div className="container">
      <input type="text" className='searchbar' onChange={updatesearch}/>
      <button className='searchbtn'>SEARCH</button>
    </div>
    <div>
      {items.map((ele,index)=>{
        return(
        <img src={ele.image} alt="NO IMG" height={200} width={200} key={ele.id}/>
        )
      })}
    </div>
    </>
    
    
  )
}

export default App