import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useHistory } from "react-router-dom";
import Form from '../Components/Form'

    
const Update = () => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description,setDesc]=useState("");
    const history=useHistory();
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
        .then(res=>{
            setTitle(res.data.title) 
            setPrice(res.data.price) 
            setDesc(res.data.description)})
        .catch(err=>console.error(err));
    },[id])

    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/'+id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
            history.push("/product")
    }
    
    return (
        <div className='container my-5'>
        <h1 className='App'>Update Product Manager</h1>
        <Form function={updateProduct} setTitle={setTitle} title={title}
            price={price} setPrice={setPrice} description={description} setDesc={setDesc}  />
        </div>
    )
}
export default Update;