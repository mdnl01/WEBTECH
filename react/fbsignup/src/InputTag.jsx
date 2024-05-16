import React, { useState } from 'react'

const InputTag = () => {

  let [name,setname]=useState({username:""});

  function updateName(event)
  {
    setname({username:event.target.value})
  }
  console.log(name);

  function register(event){
    event.preventDefault()
    
  }

  return (
    <form onSubmit={register} className='maincontainer'>
      <input type="text" onChange={updateName} name="username"/>
    </form>
  )
}

export default InputTag