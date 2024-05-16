// import React, { useReducer } from 'react'


// const App = () => {

//   let [state,dispatcher]=useReducer((cstate,action)=>{

//     switch(action)
//     {
//       case "INC1":return {...cstate,count1:cstate.count1+1};
//       case "DEC1":return {...cstate,count1:cstate.count1-1};
//       case "INC2":return {...cstate,count2:cstate.count2+1};
//       case "DEC2":return {...cstate,count2:cstate.count2-1};
//       default: return cstate
//     }
    
//   },{count1:0,count2:0})
//   // console.log(state);


//   return (
//     <div className="maincontainer">
//       <div>Count1:{state.count1}</div>
//       <div>Count2:{state.count2}</div>
//       <button className="inc1" onClick={()=>{dispatcher("INC1")}}>INC1</button>
//       <button className="dec1" onClick={()=>{dispatcher("DEC1")}}>DEC1</button>
//       <button className="inc2" onClick={()=>{dispatcher("INC2")}}>INC2</button>
//       <button className="dec2" onClick={()=>{dispatcher("DEC2")}}>DEC2</button>
//     </div>
//   )
// }

// export default App

// & COUNTER APP^^^^^^^^^^NO CSS APPLIED

import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

const App = () => {

  let [movies,dispatcher]=useReducer((cstate,action)=>{
    let fetchApi=async()=>{
      cstate=await axios.get("")
    }
  }
  ,
  [])




  return (
    <div className="maincontainer">
      {}
    </div>
  )
}

export default App