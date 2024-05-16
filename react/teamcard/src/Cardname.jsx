import React from 'react'
import cardData from './Data.js'

const Cardname = (props) => {
    // console.log(props);
  return (
    <div className='cardname'>{props.name}</div>
  )
}

export default Cardname