import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useHistory } from "react-router-dom";

    
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
            <form onSubmit={updateProduct} >
                <div className='form-group my-3'>
                <label htmlFor="title">Title:</label>
                    <input type="text" className='form-control' name="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="price">Price:</label>
                    <input type="number" className='form-control' name="price" onChange={e=>setPrice(e.target.value)} value={price}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="desc">Description:</label>
                    <textarea type="text" className='form-control' name="desc" onChange={e=>setDesc(e.target.value)} value={description}>{description}</textarea>
                </div>
                <div className='App'>
                <button type='submit' className='btn btn-primary'>Edit</button>
                </div>
            </form>
        </div>
    )
}
export default Update;