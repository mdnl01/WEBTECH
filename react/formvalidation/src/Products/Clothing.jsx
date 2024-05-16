import React, { useEffect, useState } from 'react'
import './Clothing.css'
import { Link, Outlet } from 'react-router-dom';

const Clothing = () => {

    let [data,setData]=useState([])

    async function apifetch(){
        let apidata=await fetch("https://fakestoreapi.com/products");
        apidata=await apidata.json()

        setData(apidata)
    }
    useEffect(() => {
        apifetch()
    },[])
    console.log(data);

  return (
    <>
    <div className='clothcontainer'>
        {data.filter(({category}) => category.includes("clothing")).map(({title,id,image})=>{
            return (
                <Link to={`${id}`} className='clothcard' key={id}>
                    <div className='clothtitle'>{title}</div>
                    <div className='clothimgcont'><img className='clothimg' src={image} width='100%' height='100%'/></div>
                </Link>
            )
        })}
    </div>
    <Outlet/>
    </>
  )
}

export default Clothing