import React, { useRef } from 'react'

const App = () => {

  let divref=useRef(null);
  console.log(divref)
  // console.log(divref.current)
  
  // console.log("rendered")
  function colorchange()
  {
    divref.current.style.backgroundColor="red";
  }

  return (
    <>
    <div ref={divref}>App</div>
    <button onClick={colorchange}>CLICK</button>
    </>
  )
}

export default App