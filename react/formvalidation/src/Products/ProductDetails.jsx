import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./ProducDetails.css"

const ProductDetails = () => {

    let [data, setData] = useState({})

    let { id } = useParams()
    let navpage=useNavigate()

    function btnnavigate(){
        navpage("/products/clothing");
    }

    async function apifetch() {
        let apidata = await fetch(`https://fakestoreapi.com/products/${id}`);
        apidata = await apidata.json()

        setData(apidata)
    }
    useEffect(() => {
        apifetch()
    }, [])
    console.log(data);

    return (
        <>
        <div className='detailscont'>
            <div className='detailscard'>
                <div className='detailstitle'>{data.title}</div>
                <div className='detailsimgcont'><img className='detailsimg' src={data.image}/></div>
                <div className='detailsdesc'>{data.description}</div>
                <div className='detailsprice'>Price: {data.price}$</div>
            </div>
        <button className='detailsbackbtn' onClick={btnnavigate}>BACK TO PRODUCTS</button>
        </div>
        </>
    )
}

export default ProductDetails