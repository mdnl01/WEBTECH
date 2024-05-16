import React from 'react'
import cardData from './Data.js'

export const Cardimage = (props) => {
    // console.log(props.img);
  return (
    <>
        <img className='cardimage' src={props.img} alt="NOIMAGE" />
    </>
  )
}
export default Cardimage
