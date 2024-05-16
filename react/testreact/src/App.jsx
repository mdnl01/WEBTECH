import React, { useState } from 'react'


let details=[];

const App = () => {

const [username, setusername] = useState("");
const [password, setpassword] = useState("")


function updateuser(e){
  setusername(e.target.value)
}

function updatepass(e){
  setpassword(e.target.value)
}

function submitfn(e){
  e.preventDefault()
  if(username!=""&&password!="")
  {
    details.push({username,password});
    console.log(details);
  }
  setusername("")
  setpassword("")
}
  return (
    <>
    <form onSubmit={submitfn}>
      <input type="text" onChange={updateuser} value={username}/> <br /><br />
      <input type="text" onChange={updatepass} value={password}/> <br /><br />
      <button type='submit'>SUMBIT</button>
    </form>
    </>
  )
}

export default App