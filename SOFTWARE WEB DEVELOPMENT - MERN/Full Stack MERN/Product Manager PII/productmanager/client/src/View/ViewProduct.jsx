import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'

const ViewProduct=()=>{
    const {id}=useParams();
    
    const [product,setProduct]=useState({});
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
        .then(res=>setProduct(res.data))
        .catch(err=>console.error(err));
    },[id])

    return(
        <div className='text-center my-5 py-5'>
            <h6>{product.title}</h6>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
        </div>
    )
}

export default ViewProduct;