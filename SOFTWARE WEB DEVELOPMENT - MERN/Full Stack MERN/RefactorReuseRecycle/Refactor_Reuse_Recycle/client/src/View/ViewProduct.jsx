import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams,useHistory } from "react-router-dom";
import DelButton from '../Components/DelButton';

const ViewProduct=()=>{
    const {id}=useParams();
    // const history=useHistory();
    const [product,setProduct]=useState({});
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
        .then(res=>setProduct(res.data))
        .catch(err=>console.error(err));
    },[id])

    // const handleDelete = (id) =>{
    //     axios.delete("http://localhost:8000/api/product/"+id)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error(err))
    //     history.push("/product")
    // }

    return(
        <div className='text-center my-5 py-5'>
            <h6>{product.title}</h6>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
            <DelButton product_id={product._id} />
        </div>
    )
}

export default ViewProduct;