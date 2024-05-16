import React from 'react'
import './App.css'
import Team from './Team'
import Teamdesc from './Teamdesc'
import cardData from './Data.js'
import Card from './Card'
import Cardimage from './Cardimage'

// console.log(cardData);

const App = () => {
  return (
      <div className='maincomponent'>
        <Team/>
        <Teamdesc/>
      <div className='container'>
        {
          cardData.map((data)=>{
            return(
              <Card data={data}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App