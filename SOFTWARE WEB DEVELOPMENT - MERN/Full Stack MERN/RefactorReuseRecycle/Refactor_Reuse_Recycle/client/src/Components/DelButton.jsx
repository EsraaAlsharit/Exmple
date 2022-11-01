import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams,useHistory } from "react-router-dom";

const DelButton=(props)=>{

    const history=useHistory();

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/product/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
        history.push("/product")
    }

    return(
        <button className='btn btn-danger' onClick={()=>{handleDelete(props.product_id)}}>Delete</button>
    )
}

export default DelButton;