import React from 'react'
import cardData from './Data.js'
import Cardimage from './Cardimage.jsx'
import Cardname from './Cardname.jsx'
import Carddesig from './Carddesig.jsx'
import Carddesc from './Carddesc.jsx'

const Card = (props) => {
    // console.log(props.data);
  return (
    <div className='cardcontainer'>
        <Cardimage img={props.data.img} />
        <Cardname name={props.data.name}/>
        <Carddesig desig={props.data.desig} />
        <Carddesc desc={props.data.desc}/>
    </div>
  )
}

export default Card