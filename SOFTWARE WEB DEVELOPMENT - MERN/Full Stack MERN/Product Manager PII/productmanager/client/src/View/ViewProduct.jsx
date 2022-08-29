import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'

const ViewProduct=()=>{
    const {_id}=useParams();
    const [product,setProduct]=useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+_id)
        .then(res=>setProduct(res.data))
        .catch(err=>console.error(err));
    },[_id])

    return(
        <>
            <p>Product Title: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
        </>
    )
}

export default ViewProduct;